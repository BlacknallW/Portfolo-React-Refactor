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
			<section class="hero is-light is-fullheight">
				<div class="section hero-head">
					<ProfileHeader />
					<br />
					<AboutContainer />
					<br />
					<ProjectsContainer />
					<br />
					<SkillsBar />
					<br />
					<InterestsContainer />
				</div>
				<div class="hero-body"></div>
				<div class="hero-foot"></div>
			</section>
		</>
	);
}

export default App;
