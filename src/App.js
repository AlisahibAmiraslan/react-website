import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Home from "./Home/Home";
import Projects from "./Projects/Projects";
import Question from "./Faqs/Question";
import ProjectDesc from "./Projects/ProjectDesc";
import Team from "./Team/Team";
import { useLocation } from "react-router-dom";
import "react-accessible-accordion/dist/fancy-example.css";
import "swiper/css/bundle";
import Loader from "./Loader/loader";

function App() {
	const location = useLocation();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location]);

	// if you want to loading scroll animation
	// const [progress, setProgress] = useState(false);

	// function getScroll() {
	//   setProgress(true);
	//   setTimeout(() => {
	//     setProgress(false);
	//   }, 2000);
	// }

	// useEffect(() => {
	//   window.addEventListener("load", getScroll);

	//   return () => {
	//     window.removeEventListener("laod", getScroll);
	//   };
	// }, [location]);

	const [loadingSkeleton, setLoadingSkeleton] = useState(true);

	setTimeout(() => {
		setLoadingSkeleton(false);
	}, 2000);

	return (
		<>
			{loadingSkeleton ? (
				<Loader />
			) : (
				<>
					<Header />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="about" element={<About />} />
						<Route path="contact" element={<Contact />} />
						<Route path="question" element={<Question />} />
						<Route path="projects" element={<Projects />} />
						<Route path="project_desc" element={<ProjectDesc />} />
						<Route path="team" element={<Team />} />
					</Routes>
					<Footer />
				</>
			)}
		</>
	);
}

export default App;
