import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Components.EmbedJS display="none" />
		<Box
			width="100%"
			height="100vh"
			background="#e8e8e8"
			position="relative"
			quarkly-title="main"
			as="main"
			display="flex"
			align-items="center"
			justify-content="center"
		>
			<Box
				width="250px"
				height="250px"
				background="--secondaryGradient"
				display="flex"
				align-items="center"
				justify-content="center"
			>
				<Text>
					hello world
				</Text>
			</Box>
		</Box>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});