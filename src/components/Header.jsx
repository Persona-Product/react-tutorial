import React from "react";
import logo from "../assets/logo.svg";
import { Navigation } from "./Navigation";

export const Header = (props) => {
	const path = window.location.pathname;

	return (
		<header className="header">
			<div className="header-container">
				<a href={path}>
					<div className="header-title">
						<img src={logo} className="react-logo" alt="logo" />
						<h1>河原</h1>
					</div>
				</a>

				<Navigation {...props} />
			</div>
		</header>
	);
};
