import React from 'react';

const FooterWebsite = () => {
  return (
    <React.Fragment>
      <footer className="footer">
		<div className="footer_container">
			<div className="container">
				<div className="row">
					<div className="col-lg-4 footer_col">
						<div className="footer_about">
							<div className="footer_logo_container">
								<a href="#" className="d-flex flex-column align-items-center justify-content-center">
									<div className="logo_content">
										<div className="logo d-flex flex-row align-items-center justify-content-center">
											<div className="logo_text">Care<span>Med</span></div>
											<div className="logo_box">+</div>
										</div>
										<div className="logo_sub">Health Care Center</div>
									</div>
								</a>
							</div>
							<div className="footer_about_text">
								<p>Lorem ipsum dolor sit amet, conse ctetur adipiscing elit. Curabitur ante leo, finibus quis est ut, tempor tincidunt ipsum.</p>
							</div>
							<ul className="footer_about_list">
								<li><div className="footer_about_icon"><img src="images/phone-call.svg" alt="" /></div><span>+45 677 8993000 223</span></li>
								<li><div className="footer_about_icon"><img src="images/envelope.svg" alt="" /></div><span>office@template.com</span></li>
								<li><div className="footer_about_icon"><img src="images/placeholder.svg" alt="" /></div><span>Main Str. no 45-46, b3, 56832, Los Angeles, CA</span></li>
							</ul>
						</div>
					</div>
					<div className="col-lg-4 footer_col">
						<div className="footer_links footer_column">
							<div className="footer_title">Useful Links</div>
							<ul>
								<li><a href="#">Testimonials</a></li>
								<li><a href="#">FAQ</a></li>
								<li><a href="#">Apply for a Job</a></li>
								<li><a href="#">Terms & Conditions</a></li>
								<li><a href="#">Our Partners</a></li>
								<li><a href="#">Services</a></li>
								<li><a href="#">Free services</a></li>
								<li><a href="#">About us</a></li>
								<li><a href="#">News</a></li>
								<li><a href="#">Contact</a></li>
								<li><a href="#">Our Screening Program</a></li>
								<li><a href="#">FAQ</a></li>
							</ul>
						</div>
					</div>
					<div className="col-lg-4 footer_col">
						<div className="footer_news footer_column">
							<div className="footer_title">Useful Links</div>
							<ul>
								<li>
									<div className="footer_news_title"><a href="news.html">Aliquam ac eleifend metus</a></div>
									<div className="footer_news_date">March 10, 2018</div>
								</li>
								<li>
									<div className="footer_news_title"><a href="news.html">Donec in libero sit amet mi vulputate</a></div>
									<div className="footer_news_date">March 10, 2018</div>
								</li>
								<li>
									<div className="footer_news_title"><a href="news.html">Aliquam ac eleifend metus</a></div>
									<div className="footer_news_date">March 10, 2018</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div className="copyright">
			<div className="container">
				<div className="row">
					<div className="col">
						<div className="copyright_content d-flex flex-lg-row flex-column align-items-lg-center justify-content-start">
							<div className="cr">Copyright &copy;<script>document.write(new Date().getFullYear());</script> BEYOND'S HEALTHCARE. All rights reserved. 
                             Developer: <a href="" target="_blank">ICA Specs Ltd.</a></div>
							<div className="footer_social ml-lg-auto">
								<ul>
									<li><a href="#"><i className="fa fa-pinterest" aria-hidden="true"></i></a></li>
									<li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
									<li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
									<li><a href="#"><i className="fa fa-dribbble" aria-hidden="true"></i></a></li>
									<li><a href="#"><i className="fa fa-behance" aria-hidden="true"></i></a></li>
									<li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>			
		</div>
	</footer>
    </React.Fragment>
  )
}

export default FooterWebsite
