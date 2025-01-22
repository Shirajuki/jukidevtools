import { Typography } from "antd";
import SingleColumnLayout from "../layouts/SingleColumnLayout/SingleColumnLayout.component";

import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
	component: Index,
});

function Index() {
	return (
		<SingleColumnLayout
			View={
				<div className="text-xl w-full h-full flex flex-col justify-center items-center">
					<Typography.Title level={2} className="mb-8">
						:)
					</Typography.Title>
				</div>
			}
		/>
	);
}
