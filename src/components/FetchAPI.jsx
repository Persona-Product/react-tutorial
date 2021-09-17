import React, { useState, useEffect } from "react";
import { Progress } from "./Progress";

export const FetchAPI = () => {
	const [data, setData] = useState([]);

	const fetchAPI = async () => {
		const api = await fetch("https://jsonplaceholder.typicode.com/posts");
		const resultData = await api.json();
		setData(resultData);
	};

	useEffect(() => {
		setTimeout(fetchAPI, 800);
	}, []);

	return (
		<>
			{data.length === 0 ? (
				<Progress />
			) : (
				<div className="main-api-content">
					{data.map((item) => (
						<div key={item.id}>
							<h1>{item.title}</h1>
							<p>{item.body}</p>
						</div>
					))}
				</div>
			)}
		</>
	);
};
