import React from "react";

import MyVitaLog from "../Images/MyVitaLog-Thumbnail.png";
import NSAmericas from "../Images/nsamericas-thumbnail.png";
import FridgeScavenger from "../Images/fridgescavenger-thumbnail.png";

export default function ProjectsContainer() {
	return (
		<>
			<section className="container">
				<div className="columns">
					<div className="column box">
						<p className="subtitle has-text-centered">MyVitaLog</p>
						<figure className="image">
							<img
								src={MyVitaLog}
								alt="MyVitaLog Website Screenshot"
							/>
							<figcaption className="has-text-centered">
								<a
									href="https://www.myvitalog.com/"
									target="_blank"
									rel="noreferrer noopener"
								>
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
					<div className="column box">
						<p className="subtitle has-text-centered">NSAmericas</p>
						<figure className="image">
							<img
								src={NSAmericas}
								alt="NSAmericas Brazil Page"
							/>
							<figcaption className="has-text-centered">
								<a
									href="https://www.nsamericas.com/"
									target="_blank"
									rel="noreferrer noopener"
								>
									NSAmericas.com
								</a>
							</figcaption>
						</figure>
						<ul>
							<li>
								<strong>Role:</strong> UI/UX Designer,
								Navigation, Styling, and Functionality
								Developer.
							</li>
							<li>
								<strong>Description: </strong> Interactive
								travel website offering information on travel
								destinations in Brazil and the US.
							</li>
							<li>
								<strong>Features: </strong> Five day weather
								forecast for picture destinations, currency
								exchange calculator for travel based on country
								of origin.
							</li>
							<li>
								<strong>Tools:</strong> ReactJS, BulmaCSS
							</li>
						</ul>
					</div>
					<div className="column box">
						<p className="subtitle has-text-centered">
							FridgeScavenger (In Development)
						</p>
						<figure className="image">
							<img
								src={FridgeScavenger}
								alt="Fridge Scavenger Screenshot"
							/>
							<figcaption className="has-text-centered">
								<a
									href="https://fridgescavenger.com/"
									target="_blank"
									rel="noreferrer noopener"
								>
									FridgeScavenger.com
								</a>
							</figcaption>
						</figure>
						<ul>
							<li>
								<strong>Role: </strong>Lead Designer/Developer
								(Solo Project)
							</li>
							<li>
								<strong>Description:</strong> Recipe generating
								website using Spoonacular's API, designed to allow
								users to input ingredients they own to generate
								recipe suggestions.
							</li>
							<li>
								<strong>Features:</strong> Classic recipe
								search, ingredient-based recipe search.
							</li>
							<li>
								<strong>Tools: </strong>NextJS, ReactJS,
								BulmaCSS
							</li>
						</ul>
					</div>
				</div>
			</section>
		</>
	);
}
