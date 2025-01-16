import { type FC, useEffect, useRef } from "react";
import { Empty } from "antd";
import { useSelector } from "react-redux";
import { selectTheme } from "../../store/theme/theme.selector";

interface IHtmlViewerProps {
	html: string | null;
	white?: boolean;
	updatingFlag?: boolean;
}

const HtmlViewer: FC<IHtmlViewerProps> = ({ html, white, updatingFlag }) => {
	const theme = useSelector(selectTheme());
	const iframeRef = useRef<HTMLIFrameElement | null>(null);

	// biome-ignore lint/correctness/useExhaustiveDependencies: updatingFlag is used to force update the iframe content
	useEffect(() => {
		if (html === null) return;
		if (iframeRef.current === null) return;

		iframeRef.current.src = "about:blank";
		setTimeout(() => {
			if (iframeRef.current === null) return;
			const iframeDoc =
				iframeRef.current.contentDocument || iframeRef.current.contentWindow?.document;
			if (!iframeDoc) return;

			if (theme === "dark") {
				if (white) {
					iframeDoc.body.style.backgroundColor = "white";
				} else {
					iframeDoc.body.style.color = "white";
				}
			}

			iframeDoc.body.innerHTML = html;
		}, 100);
	}, [html, white, theme, updatingFlag]);

	return (
		<>
			{html === null ? (
				<div className="border border-solid border-gray-300 w-full h-full min-h-[250px] flex items-center justify-center">
					<Empty />
				</div>
			) : (
				<iframe
					title="html-viewer"
					ref={iframeRef}
					className="border border-solid border-gray-300 w-full h-full min-h-[250px]"
				/>
			)}
		</>
	);
};

export default HtmlViewer;
