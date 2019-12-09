import React from "react";

import GeneralTso from "../Images/generaltsoschicken.jpg";

export default function InterestsContainer() {
	return (
		<>
			<div id="Interests" className="section box">
				<h1 className="subtitle has-text-centered">
					These are a Few of my Favorite Things:
				</h1>
				<div className="tile">
					<div className="tile is-child">
						<article className="content">
							<p>
								Was that a Mary Poppins song? Not sure. In any
								case, as you may have gathered from the
								sub-title I've given myself, I enjoy cooking.
								There's not really a "type" of food I prefer
								cooking, but I definitely prefer eating Asian
								Cuisine. When I was a wee lad, I was a very
								picky eater, and I refused to go to any
								restaurant where they didn't have a hamburger on
								the menu. Vegetables were out of the question
								for the most part, and I wouldn't even really go
								near fruit. Now, I'm willing to eat almost
								anything that doesn't smell rotten, and I've
								actually stopped "customizing" my orders when
								going to restaurants because I want to taste the
								flavor profile that the chef envisioned when
								creating the recipe of the dish I'm eating.
								Although...I do find most restaurants lacking in
								the spice department. <br />
								<br /> Contrary to the title of this section,
								cooking was really the only thing I intended to
								list here. Here's a picture of some General
								Tso's Chicken I made though!{" "}
							</p>
						</article>
					</div>
					<div
						className="tile is-child is-4"
						style={{ borderRadius: "10%" }}
					>
						<figure>
							<img
								src={GeneralTso}
								alt="General Tso's Chicken"
								style={{
									borderRadius: "10%",
									display: "block",
									marginLeft: "auto",
									marginRight: "auto"
								}}
							/>
							<figcaption className="has-text-centered">
								General Tso's Chicken
							</figcaption>
						</figure>
					</div>
				</div>
			</div>
		</>
	);
}
