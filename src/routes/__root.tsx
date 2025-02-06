import React, { Suspense, useEffect, useMemo, useState } from "react";
import { App, Divider, Empty, Input, Layout, Switch, message } from "antd";
import { SearchOutlined, SunOutlined, MoonOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu, Typography } from "antd";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { description } from "../../package.json";

import iconImageUrl from "../assets/images/icon.png";
import { type IToolRoute, TOOL_ROUTES } from "../store/routes";
import type { ItemType, MenuItemGroupType } from "antd/es/menu/hooks/useItems";
import { fuzzyMatch } from "../utils/fuzzyMatch.utils";
import { setMessageInstance } from "../store/message/message.slice";
import { useAppDispatch } from "../store/hooks";
import LoadingBar from "../components/LoadingBar.component";

import styles from "./__root.module.scss";
import { useSelector } from "react-redux";
import { selectTheme } from "../store/theme/theme.selector";
import { toggleTheme } from "../store/theme/theme.slice";
import { createRootRoute, Link, Outlet, useLocation } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { ErrorBoundary } from "react-error-boundary";
import InternalError from "../components/InternalError.component";

export const Route = createRootRoute({
	component: () => <AppLayout />,
});

function AppLayout() {
	const location = useLocation();
	const dispatch = useAppDispatch();

	const theme = useSelector(selectTheme());
	const onToggleTheme = () => {
		dispatch(toggleTheme());
	};

	const [messageInstance, contextHolder] = message.useMessage({
		maxCount: 5,
	});
	dispatch(setMessageInstance(messageInstance));

	const [selectedKey, setSelectedKey] = useState<string | null>(null);
	useEffect(() => {
		setSelectedKey(location.pathname);
	}, [location]);

	const toolRoute = useMemo(() => {
		let toolRoute: IToolRoute | null = null;

		outer: for (const toolRouteGroup of TOOL_ROUTES) {
			for (const route of toolRouteGroup.routes) {
				const currentPath = location.pathname.replace("/jukidevtools", "");
				if (route.path === currentPath) {
					toolRoute = route;
					break outer;
				}
			}
		}

		return toolRoute;
	}, [location]);

	const routeLabel = useMemo(() => {
		if (location.pathname === "/jukidevtools/") return "";
		if (!toolRoute) return "Page Not Found";
		return toolRoute.label;
	}, [location, toolRoute]);

	const routeTitle = useMemo(() => {
		if (!routeLabel) return "Jukidevtools";
		return `${routeLabel} | Jukidevtools`;
	}, [routeLabel]);

	const routeDescription = useMemo(() => {
		if (toolRoute?.description) return toolRoute.description;
		return "Some cool tools and utilities for developers";
	}, [toolRoute]);

	const [searchQuery, setSearchQuery] = useState("");

	const menuItems: MenuProps["items"] = useMemo(() => {
		const createMenuItem = (toolRoute: IToolRoute): ItemType => ({
			// @ts-ignore - this is a bug in the type definition
			label: <Link to={toolRoute.path}>{toolRoute.label}</Link>,
			key: toolRoute.path,
			icon: React.createElement(toolRoute.icon),
		});

		const menuItemGroups: MenuItemGroupType[] = TOOL_ROUTES.map((toolRouteGroup) => ({
			type: "group",
			label: toolRouteGroup.label,
			children: toolRouteGroup.routes
				.filter((route) => {
					if (fuzzyMatch(route.label, searchQuery)) return true;
					if (route.alias) {
						for (const aliasLabel of route.alias) {
							if (fuzzyMatch(aliasLabel, searchQuery)) return true;
						}
					}
				})
				.map((route) => createMenuItem(route)),
		}));

		return menuItemGroups.filter(
			(menuItemGroup: MenuItemGroupType) => menuItemGroup.children?.length,
		);
	}, [searchQuery]);

	// biome-ignore lint/correctness/useExhaustiveDependencies: this effect should update when location changes
	useEffect(() => {
		const triggerButton: HTMLElement | null = document.querySelector(
			".ant-layout-sider-below:not(.ant-layout-sider-collapsed) .ant-layout-sider-zero-width-trigger",
		);
		if (triggerButton) {
			triggerButton.click();
		}
	}, [location]);

	return (
		<>
			<App>
				<LoadingBar />
				<HelmetProvider>
					<Helmet>
						<title>{routeTitle}</title>
						<meta name="description" content={routeDescription} />
					</Helmet>
				</HelmetProvider>
				{contextHolder}
				<Layout className="flex flex-col h-lvh">
					<Layout.Header
						className={`${theme === "light" ? "bg-white" : ""} p-0 z-10 shadow-sm flex items-center`}
					>
						<Link to="/" className="items-center gap-2 w-[310px] p-7 hidden xl:flex">
							<img className="w-10" src={iconImageUrl} alt={description} />
							<Typography.Title level={2} className="text-xl mb-0">
								Jukidevtools
							</Typography.Title>
						</Link>
						<Divider type="vertical" className="h-6 m-0 hidden xl:block" />
						<div className="grow flex items-center justify-between">
							<Typography.Title className="text-2xl font-normal p-8 mb-0">
								{routeLabel}
							</Typography.Title>
							<div className="mx-8 flex items-center gap-4">
								<Switch
									checkedChildren={<MoonOutlined />}
									unCheckedChildren={<SunOutlined />}
									value={theme === "dark"}
									onClick={onToggleTheme}
								/>
							</div>
						</div>
					</Layout.Header>
					<Layout className="flex-grow overflow-hidden">
						<Layout.Sider
							width="310"
							breakpoint="xl"
							collapsedWidth="0"
							defaultCollapsed={true}
							className={styles.sidebar}
						>
							<div className={`${theme === "light" ? "bg-white" : ""} flex flex-col h-full`}>
								<div className="px-4 pt-8 pb-4">
									<Input
										placeholder="Search tools..."
										prefix={<SearchOutlined className="text-gray-300" />}
										value={searchQuery}
										onChange={(value) => setSearchQuery(value.target.value)}
										allowClear
									/>
								</div>
								{menuItems.length === 0 ? (
									<Empty
										image={Empty.PRESENTED_IMAGE_SIMPLE}
										description="No tools match your query"
									/>
								) : (
									<Menu
										theme={theme}
										style={{ flexBasis: 0 }}
										className="flex-grow overflow-y-auto pb-8"
										mode="inline"
										selectedKeys={!selectedKey ? [] : [selectedKey]}
										items={menuItems}
									/>
								)}
							</div>
						</Layout.Sider>

						<Layout.Content className="p-8">
							<div
								className={`${theme === "light" ? "bg-white" : ""} rounded-lg h-full overflow-y-auto`}
							>
								<ErrorBoundary fallback={<InternalError />}>
									<Suspense>
										<Outlet />
									</Suspense>
								</ErrorBoundary>
							</div>
						</Layout.Content>
					</Layout>
				</Layout>
			</App>
		</>
	);
}
