import React from "react";

import ProfilePicture from "../Images/profilesmall.JPG";

export default function AboutContainer() {
	return (
		<>
			<div className="section box">
				<p className="subtitle has-text-centered">
					Born in Flint, Raised in Atlanta
				</p>
				<div className="tile">
					<div className="tile is-child">
						<article className="content">
							<p>
								{" "}
								Greetings and salutations! My name is William
								Blacknall and I am a pseudo-homechef, software
								engineer, teacher, and lifelong student. I left
								the field of teaching to pursue my passion for
								technology and software development, and while I
								do miss my students and colleagues, I am excited
								about the opportunities of the future. <br />
								<br />
								Much like technology, the world of education and
								effective teaching is always changing. My
								teaching background allows me to quickly break
								down and process new information, as my entire
								career has been centered around mincing complex
								information into managable chunks for young
								adolescents to understand. This makes me not
								only a quick learner, but also a great mentor.
							</p>
						</article>
					</div>
					<div
						className="tile is-child is-4"
						style={{ borderRadius: "10%" }}
					>
						<figure>
							<img
								src={ProfilePicture}
								alt="BlacknallHeadshot"
								style={{
									borderRadius: "10%",
									display: "block",
									marginLeft: "auto",
									marginRight: "auto"
								}}
							/>
						</figure>
					</div>
				</div>
			</div>
		</>
	);
}
