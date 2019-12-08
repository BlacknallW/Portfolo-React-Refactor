import React from "react";
import LinkedInLogo from "../Images/LI-In-Bug.png";
import GitHubLogo from "../Images/GitHub-Mark-32px.png";

export default function ProfileHeader() {
	return (
		<>
			<section className="hero">
				<div className="hero-head">
					<article className="container has-text-centered">
						<h1 className="title">William Blacknall</h1>
						<p className="subtitle">Software Engineer/Home Chef</p>
						<div className="tabs is-centered is-boxed">
							<ul>
								<li>
									<a href="https://github.com/BlacknallW">
										<img
											src={GitHubLogo}
											alt="GitHub Profile"
											title="GitHub Profile"
										/>
									</a>
								</li>
								<li>
									<a href="https://www.linkedin.com/in/william-blacknall-9509a5116/">
										<img
											src={LinkedInLogo}
											alt="LinkedIn Profile"
											height="25"
											width="25"
											title="LinkedIn Profile"
										/>
									</a>
								</li>
								<li>
									<a
										href="mailto:williamblacknall@gmail.com"
										target="_blank"
										rel="noreferrer noopener"
									>
										<img
											src="https://img.icons8.com/ios-filled/50/000000/gmail.png"
											alt="williamblacknall@gmail.com"
											height="25"
											width="25"
											title="williamblacknall@gmail.com"
										/>
									</a>
								</li>
							</ul>
						</div>
					</article>
				</div>
			</section>
		</>
	);
}
