import { useLocation } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import TopLoadingBar, { type LoadingBarRef } from "react-top-loading-bar";

const LoadingBar = () => {
	const location = useLocation();
	const ref = useRef<LoadingBarRef>(null);

	// biome-ignore lint/correctness/useExhaustiveDependencies: this effect should update when location changes
	useEffect(() => {
		ref.current?.complete();
		ref.current?.continuousStart();

		setTimeout(() => {
			ref.current?.complete();
		}, 100);
	}, [location]);

	return <TopLoadingBar ref={ref} color="#FF9800" height={3} waitingTime={500} />;
};

export default LoadingBar;
