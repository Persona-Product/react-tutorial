import React from "react";
import clsx from "clsx";

export const Button = (props) => {
	return (
		<div className="navigation-button-group">
			<button
				className={clsx(
					"navigation-button",
					props.isActive ? "navigation-active-button" : null
				)}
				onClick={props.onClick}
			>
				{props.children}
			</button>
			<span className={props.isActive ? "navigation-active-bar" : null} />
		</div>
	);
};
