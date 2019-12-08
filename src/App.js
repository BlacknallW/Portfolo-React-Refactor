import React from "react";
import "bulma/css/bulma.css";

import ProfileHeader from "./Components/ProfileHeader";
import SkillsBar from "./Components/SkillsBar";
import AboutContainer from "./Components/AboutContainer";
import ProjectsContainer from "./Components/ProjectsContainer";
import InterestsContainer from "./Components/InterestsContainer";

function App() {
	return (
		<>
			<ProfileHeader />
			<AboutContainer />
			<ProjectsContainer />
			<SkillsBar />
			<InterestsContainer />
		</>
	);
}

export default App;
