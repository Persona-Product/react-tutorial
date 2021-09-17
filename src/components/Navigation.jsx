import React from "react";
import { Button } from "./Button";

export const Navigation = (props) => {
	return (
		<div className="navigation">
			{props.navigations.map((item, index) => (
				<span key={item.title}>
					<Button
						isActive={props.activeIndex === index}
						onClick={() => props.onClick(index)}
					>
						{item.title}
					</Button>
				</span>
			))}
		</div>
	);
};
