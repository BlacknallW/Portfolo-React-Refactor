import React from "react";

import MyVitaLog from "../Images/MyVitaLog-Thumbnail.png";

export default function ProjectsContainer() {
	return (
		<>
			<section className="container box">
				<div class="columns">
					<div class="column box">
						<p class="subtitle has-text-centered">MyVitaLog</p>
						<figure class="image">
							<img
								src={MyVitaLog}
								alt="MyVitaLog Website Screenshot"
							/>
							<figcaption className="has-text-centered">
								<a href="https://www.myvitalog.com/">
									MyVitalog.com
								</a>
							</figcaption>
						</figure>
						<ul>
							<li>
								<strong>Role:</strong> UI/UX Designer, Styler,
								and Navigation.
							</li>
							<li>
								<strong>Description:</strong> Interactive health
								and nutrition website designed to help users
								keep track of their calorie and nutrient intake.
							</li>
							<li>
								<strong>Features:</strong> USDA food search API,
								Account Creation, Meal Tracking.
							</li>
							<li>
								<strong>Tools:</strong> Node.js, Express,
								PostgreSQL, BulmaCSS.
							</li>
						</ul>
					</div>
					<div class="column box">
						<p class="subtitle has-text-centered">NSAmericas</p>
						<figure class="image"></figure>
						<ul></ul>
					</div>
					<div class="column box">
						<p class="subtitle has-text-centered">React Project</p>
						<figure className="image"></figure>
						<ul></ul>
					</div>
				</div>
			</section>
		</>
	);
}
