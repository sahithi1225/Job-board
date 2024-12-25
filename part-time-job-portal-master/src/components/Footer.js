// Filename - components/Footer.js

import React from "react";
import "./FooterStyles.css";

const Footer = () => {
	return (
		<div className="Box">
			<h1
				style={{
					color: "orange",
					textAlign: "center",
					marginTop: "10px",
				}}
			>
				A Part-Time Job Portal !!
			</h1>
			<div className="FooterContainer">
				<div className="Row">
					<div className="Column">
						<p className="Heading">About Us</p>
						<span className="FooterLink">
							Aim
						</span>
						<span className="FooterLink">
							Vision
						</span>
						<span className="FooterLink">
							Testimonials
						</span>
					</div>
					<div className="Column">
						<p className="Heading">Services</p>
						<span className="FooterLink">
							Job Safety
						</span>
						<span className="FooterLink">
							Part-Time Jobs
						</span>
						<span className="FooterLink">
							Good Stipend
						</span>
						<span className="FooterLink">
							Comfort
						</span>
					</div>
					<div className="Column">
						<p className="Heading">Contact Us</p>
						<span className="FooterLink">
							Bhimavaram
						</span>
						<span className="FooterLink">
							Rajahmundry
						</span>
						<span className="FooterLink">
							Jangareddigudem
						</span>
						<span className="FooterLink">
							Machilipatnam
						</span>
					</div>
					<div className="Column">
						<p className="Heading">Social Media</p>
						<span className="FooterLink">
							<i className="fab fa-facebook-f">
								<span
									style={{
										marginLeft: "10px",
									}}
								>
									Facebook
								</span>
							</i>
						</span>
						<span className="FooterLink">
							<i className="fab fa-instagram">
								<span
									style={{
										marginLeft: "10px",
									}}
								>
									Instagram
								</span>
							</i>
						</span>
						<span className="FooterLink">
							<i className="fab fa-twitter">
								<span
									style={{
										marginLeft: "10px",
									}}
								>
									Twitter
								</span>
							</i>
						</span>
						<span className="FooterLink">
							<i className="fab fa-youtube">
								<span
									style={{
										marginLeft: "10px",
									}}
								>
									Youtube
								</span>
							</i>
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
