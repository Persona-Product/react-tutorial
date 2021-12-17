import { useCallback, useState } from "react";
import { Header, Main, Footer, FetchAPI } from "../components/index";
import { DATA } from "../constants/data";

export default function App() {
	const [activeIndex, setActiveIndex] = useState(0);

	// komenntoout
	console.info(activeIndex)

	const handleNavigate = useCallback((index) => {
		setActiveIndex((_) => index);
	}, []);

	return (
		<div className="App">
			<Header
				navigations={DATA}
				activeIndex={activeIndex}
				onClick={handleNavigate}
			/>

			<Main>
				{activeIndex !== 4 ? (
					<div className="main-content">
						<h1>{DATA[activeIndex].title}</h1>
						<p>{DATA[activeIndex].body1}</p>
						<p>{DATA[activeIndex].body2}</p>
					</div>
				) : (
					<FetchAPI />
				)}
			</Main>

			<Footer />
		</div>
	);
}
