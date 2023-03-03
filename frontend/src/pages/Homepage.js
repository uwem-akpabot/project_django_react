import React from 'react';
import feature1 from '../images_website/images/feature1.png';
import feature2 from '../images_website/images/feature2.png';
import feature3 from '../images_website/images/feature3.png';
import feature4 from '../images_website/images/feature4.png';
import welcome from '../images_website/images/welcome.png';
import department1 from '../images_website/images/department1.jpg';
import department2 from '../images_website/images/department2.jpg';
import department3 from '../images_website/images/department3.jpg';

const Homepage = () => {
  return (
    <>
    <section className="cta">
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <div className="cta-block">
                    <div className="emmergency item">
                        <i className="fa fa-phone"></i>
                        <h2>Emegency Cases</h2>
                        <a href="#">1-800-700-6200</a>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                    </div>
                    <div className="top-doctor item">
                        <i className="fa fa-stethoscope"></i>
                        <h2>24 Hour Service</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore dignissimos officia dicta suscipit vel eum</p>
                        <a href="#" className="btn btn-main">Read more</a>
                    </div>
                    <div className="working-time item">
                        <i className="fa fa-hourglass-o"></i>
                        <h2>Working Hours</h2>
                        <ul className="w-hours">
                            <li>Mon - Fri  - <span>8:00 - 17:00</span></li>
                            <li>Mon - Fri  - <span>8:00 - 17:00</span></li>
                            <li>Mon - Fri  - <span>8:00 - 17:00</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<section className="feature-section section bg-gray">
	<div className="container">
		<div className="row">
			<div className="col-sm-12 col-xs-12">
				<div className="image-content">
					<div className="section-title text-center">
						<h3>Best Features
							<span>of Our Hospital</span>
						</h3>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam magni in at debitis <br />
							nam error officia vero tempora alias? Sunt?</p>
					</div>
					<div className="row">
						<div className="col-sm-6">
							<div className="item">
								<div className="icon-box">
									<figure>
										<a href="#">
											<img src="images/resource/1.png" alt="" />
										</a>
									</figure>
								</div>
								<h6>Orthopedics</h6>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ducimus veniam illo quibusdam pariatur ex sunt, est aspernatur 
									at debitis eius vitae vel nostrum dolorem labore autem corrupti odit mollitia?</p>
							</div>
						</div>
						<div className="col-sm-6">
							<div className="item">
								<div className="icon-box">
									<figure>
										<a href="#">
											<img src="images/resource/2.png" alt="" />
										</a>
									</figure>
								</div>
								<h6>Diaginostic</h6>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ducimus veniam illo quibusdam pariatur ex sunt, est aspernatur
								at debitis eius vitae vel nostrum dolorem labore autem corrupti odit mollitia?</p>
							</div>
						</div>
						<div className="col-sm-6">
							<div className="item">
								<div className="icon-box">
									<figure>
										<a href="#">
											<img src="images/resource/3.png" alt="" />
										</a>
									</figure>
								</div>
								<h6>Psycology</h6>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ducimus veniam illo quibusdam pariatur ex sunt, est aspernatur
								at debitis eius vitae vel nostrum dolorem labore autem corrupti odit mollitia?</p>
							</div>
						</div>
						<div className="col-sm-6">
							<div className="item">
								<div className="icon-box">
									<figure>
										<a href="#">
											<img src="images/resource/4.png" alt="" />
										</a>
									</figure>
								</div>
								<h6>General Treatment</h6>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ducimus veniam illo quibusdam pariatur ex sunt, est aspernatur
								at debitis eius vitae vel nostrum dolorem labore autem corrupti odit mollitia?</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
<section className="service-tab-section section">
    <div className="outer-box clearfix">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="tabs">
                        <ul className="nav nav-tabs" role="tablist">
                            <li role="presentation" className="active">
                                <a href="#dormitory"  data-toggle="tab">dormitory</a>
                            </li>
                            <li role="presentation">
                                <a href="#orthopedic" data-toggle="tab">orthopedic</a>
                            </li>
                            <li role="presentation">
                                <a href="#sonogram" data-toggle="tab">sonogram</a>
                            </li>
                            <li role="presentation">
                                <a href="#x-ray" data-toggle="tab">x-ray</a>
                            </li>
                            <li role="presentation">
                                <a href="#diagnostic" data-toggle="tab">diagnostic</a>
                            </li>
                        </ul>
                    </div>
                    <div className="tab-content">
                        <div className="service-box tab-pane fade in active row" id="dormitory">
                            <div className="col-md-6">
                                <img className="img-responsive" src="images/services/service-one.jpg" alt="service-image" />
                            </div>
                            <div className="col-md-6">
                                <div className="contents">
                                    <div className="section-title">
                                        <h3>dormitory</h3>
                                    </div>
                                    <div className="text">
                                        <p>The implant fixture is first placed, so that it ilikely to osseointegrate, then a dental prosthetic is added. then a
                                            dental prosthetic is added.then a dental pros- thetic is added.</p>
                                            <p>The implant fixture is first placed, so that it ilikely to osseointegrate, then a dental prosthetic is added. then a dental
                                                prosthetic is added.then a dental pros- thetic is added.</p>
                                    </div>
                                    <ul className="content-list">
                                        <li>
                                            <i className="fa fa-dot-circle-o"></i>Whitening is among the most popular dental</li>
                                        <li>
                                            <i className="fa fa-dot-circle-o"></i>Teeth cleaning is part of oral hygiene and involves</li>
                                        <li>
                                            <i className="fa fa-dot-circle-o"></i>Teeth cleaning is part of oral hygiene and involves</li>
                                    </ul>
                                    <a href="#" className="btn btn-style-one">Read more</a>
                                </div>
                            </div>
                        </div>
                        <div className="service-box tab-pane fade in" id="orthopedic">
                            <div className="col-md-6">
                                <img className="img-responsive" src="images/services/service-two.jpg" alt="service-image" />
                            </div>
                            <div className="col-md-6">
                                <div className="contents">
                                    <div className="section-title">
                                        <h3>orthopedic</h3>
                                    </div>
                                    <div className="text">
                                        <p>The implant fixture is first placed, so that it ilikely to osseointegrate, then a dental prosthetic is added.
                                            then a dental prosthetic is added.then a dental pros- thetic is added.</p>
                                        <p>The implant fixture is first placed, so that it ilikely to osseointegrate, then a dental prosthetic is added.
                                            then a dental prosthetic is added.then a dental pros- thetic is added.</p>
                                    </div>
                                    <ul className="content-list">
                                        <li>
                                            <i className="fa fa-dot-circle-o"></i>Whitening is among the most popular dental</li>
                                        <li>
                                            <i className="fa fa-dot-circle-o"></i>Teeth cleaning is part of oral hygiene and involves</li>
                                        <li>
                                            <i className="fa fa-dot-circle-o"></i>Teeth cleaning is part of oral hygiene and involves</li>
                                    </ul>
                                    <a href="#" className="btn btn-style-one">Read more</a>
                                </div>
                            </div>
                        </div>
                        <div className="service-box tab-pane fade in" id="sonogram">
                            <div className="col-md-6">
                                <img className="img-responsive" src="images/services/service-three.jpg" alt="service-image" />
                            </div>
                            <div className="col-md-6">
                                <div className="contents">
                                    <div className="section-title">
                                        <h3>sonogram</h3>
                                    </div>
                                    <div className="text">
                                        <p>The implant fixture is first placed, so that it ilikely to osseointegrate, then a dental prosthetic is added.
                                            then a dental prosthetic is added.then a dental pros- thetic is added.</p>
                                        <p>The implant fixture is first placed, so that it ilikely to osseointegrate, then a dental prosthetic is added.
                                            then a dental prosthetic is added.then a dental pros- thetic is added.</p>
                                    </div>
                                    <ul className="content-list">
                                        <li>
                                            <i className="fa fa-dot-circle-o"></i>Whitening is among the most popular dental</li>
                                        <li>
                                            <i className="fa fa-dot-circle-o"></i>Teeth cleaning is part of oral hygiene and involves</li>
                                        <li>
                                            <i className="fa fa-dot-circle-o"></i>Teeth cleaning is part of oral hygiene and involves</li>
                                    </ul>
                                    <a href="#" className="btn btn-style-one">Read more</a>
                                </div>
                            </div>
                        </div>
                        <div className="service-box tab-pane fade in" id="x-ray">
                            <div className="col-md-6">
                                <img className="img-responsive" src="images/services/service-four.jpg" alt="service-image" />
                            </div>
                            <div className="col-md-6">
                                <div className="contents">
                                    <div className="section-title">
                                        <h3>x-ray</h3>
                                    </div>
                                    <div className="text">
                                        <p>The implant fixture is first placed, so that it ilikely to osseointegrate, then a dental prosthetic is added.
                                            then a dental prosthetic is added.then a dental pros- thetic is added.</p>
                                        <p>The implant fixture is first placed, so that it ilikely to osseointegrate, then a dental prosthetic is added.
                                            then a dental prosthetic is added.then a dental pros- thetic is added.</p>
                                    </div>
                                    <ul className="content-list">
                                        <li>
                                            <i className="fa fa-dot-circle-o"></i>Whitening is among the most popular dental</li>
                                        <li>
                                            <i className="fa fa-dot-circle-o"></i>Teeth cleaning is part of oral hygiene and involves</li>
                                        <li>
                                            <i className="fa fa-dot-circle-o"></i>Teeth cleaning is part of oral hygiene and involves</li>
                                    </ul>
                                    <a href="#" className="btn btn-style-one">Read more</a>
                                </div>
                            </div>
                        </div>
                        <div className="service-box tab-pane fade in" id="diagnostic">
                            <div className="col-md-6">
                                <img className="img-responsive" src="images/services/service-five.jpg" alt="service-image" />
                            </div>
                            <div className="col-md-6">
                                <div className="contents">
                                    <div className="section-title">
                                        <h3>diagnostic</h3>
                                    </div>
                                    <div className="text">
                                        <p>The implant fixture is first placed, so that it ilikely to osseointegrate, then a dental prosthetic is added.
                                            then a dental prosthetic is added.then a dental pros- thetic is added.</p>
                                        <p>The implant fixture is first placed, so that it ilikely to osseointegrate, then a dental prosthetic is added.
                                            then a dental prosthetic is added.then a dental pros- thetic is added.</p>
                                    </div>
                                    <ul className="content-list">
                                        <li>
                                            <i className="fa fa-dot-circle-o"></i>Whitening is among the most popular dental</li>
                                        <li>
                                            <i className="fa fa-dot-circle-o"></i>Teeth cleaning is part of oral hygiene and involves</li>
                                        <li>
                                            <i className="fa fa-dot-circle-o"></i>Teeth cleaning is part of oral hygiene and involves</li>
                                    </ul>
                                    <a href="#" className="btn btn-style-one">Read more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<section className="service-section bg-gray section">
    <div className="container">
        <div className="section-title text-center">
            <h3>Provided
                <span>Services</span>
            </h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet. qui suscipit atque <br />
                fugiat officia corporis rerum eaque neque totam animi, sapiente culpa. Architecto!</p>
        </div>
        <div className="row items-container clearfix">
            <div className="item">
                <div className="inner-box">
                    <div className="img_holder">
                        <a href="service.html">
                            <img src="images/gallery/1.jpg" alt="images" className="img-responsive" />
                        </a>
                    </div>
                    <div className="image-content text-center">
                        <span>Better Service At Low Cost</span>
                        <a href="service.html">
                            <h6>Dormitory</h6>
                        </a>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, vero.</p>
                    </div>
                </div>
            </div>
            <div className="item">
                <div className="inner-box">
                    <div className="img_holder">
                        <a href="service.html">
                            <img src="images/gallery/2.jpg" alt="images" className="img-responsive" />
                        </a>
                    </div>
                    <div className="image-content text-center">
                        <span>Better Service At Low Cost</span>
                        <a href="service.html">
                            <h6>Germs Protection</h6>
                        </a>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, vero.</p>
                    </div>
                </div>
            </div>
            <div className="item">
                <div className="inner-box">
                    <div className="img_holder">
                        <a href="service.html">
                            <img src="images/gallery/3.jpg" alt="images" className="img-responsive" />
                        </a>
                    </div>
                    <div className="image-content text-center">
                        <span>Better Service At Low Cost</span>
                        <a href="service.html">
                            <h6>Psycology</h6>
                        </a>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, vero.</p>
                    </div>
                </div>
            </div>
            <div className="item">
                <div className="inner-box">
                    <div className="img_holder">
                        <a href="service.html">
                            <img src="images/gallery/1.jpg" alt="images" className="img-responsive" />
                        </a>
                    </div>
                    <div className="image-content text-center">
                        <span>Better Service At Low Cost</span>
                        <a href="service.html">
                            <h6>Dormitory</h6>
                        </a>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, vero.</p>
                    </div>
                </div>
            </div>
            <div className="item">
                <div className="inner-box">
                    <div className="img_holder">
                        <a href="service.html">
                            <img src="images/gallery/2.jpg" alt="images" className="img-responsive" />
                        </a>
                    </div>
                    <div className="image-content text-center">
                        <span>Better Service At Low Cost</span>
                        <a href="service.html">
                            <h6>Germs Protection</h6>
                        </a>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, vero.</p>
                    </div>
                </div>
            </div>
            <div className="item">
                <div className="inner-box">
                    <div className="img_holder">
                        <a href="service.html">
                            <img src="images/gallery/3.jpg" alt="images" className="img-responsive" />
                        </a>
                    </div>
                    <div className="image-content text-center">
                        <span>Better Service At Low Cost</span>
                        <a href="service.html">
                            <h6>Psycology</h6>
                        </a>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, vero.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<section className="team-section section">
    <div className="container">
        <div className="section-title text-center">
            <h3>Our Expert
                <span>Doctors</span>
            </h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem illo, rerum 
                <br />natus nobis deleniti doloremque minima odit voluptatibus ipsam animi?</p>
        </div>
        <div className="row">
            <div className="col-md-4 col-sm-6 col-xs-12">
                <div className="team-member">
                    <img src="images/team/doctor-2.jpg" alt="doctor" className="img-responsive" />
                    <div className="contents text-center">
                        <h4>Dr. Robert Barrethion</h4>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, aspernatur.</p>
                        <a href="#" className="btn btn-main">read more</a>
                    </div>
                </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
                <div className="team-member">
                    <img src="images/team/doctor-lab-3.jpg" alt="doctor" className="img-responsive" />
                    <div className="contents text-center">
                        <h4>Dr. Marry Lou</h4>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, aspernatur.</p>
                        <a href="#" className="btn btn-main">read more</a>
                    </div>
                </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
                <div className="team-member">
                    <img src="images/team/event-2.jpg" alt="doctor" className="img-responsive" />
                    <div className="contents text-center">
                        <h4>Dr. Sansa Stark</h4>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, aspernatur.</p>
                        <a href="#" className="btn btn-main">read more</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<section className="testimonial-section" style={{background: "url(images/testimonials/1.jpg)"}}>
    <div className="container">
        <div className="section-title text-center">
            <h3>What Our
                <span>Patients Says</span>
            </h3>
        </div>
        <div className="testimonial-carousel">
            <div className="slide-item">
                <div className="inner-box text-center">
                    <div className="image-box">
                        <figure>
                            <img src="images/testimonials/1.png" alt="" />
                        </figure>
                    </div>
                    <h6>Adam Rose</h6>
                    <p>Neque porro quisquam est, qui dolorem ipsum quia consectetur, dolor sit amet, consectetur, numquam Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, at?</p>
                </div>
            </div>
            <div className="slide-item">
                <div className="inner-box text-center">
                    <div className="image-box">
                        <figure>
                            <img src="images/testimonials/2.png" alt="" />
                        </figure>
                    </div>
                    <h6>David Warner</h6>
                    <p>Neque porro quisquam est, qui dolorem ipsum quia consectetur, dolor sit amet, consectetur, numquam Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, at?</p>
                </div>
            </div>
            <div className="slide-item">
                <div className="inner-box text-center">
                    <div className="image-box">
                        <figure>
                            <img src="images/testimonials/3.png" alt="" />
                        </figure>
                    </div>
                    <h6>Amy Adams</h6>
                    <p>Neque porro quisquam est, qui dolorem ipsum quia consectetur, dolor sit amet, consectetur, numquam Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, at?</p>
                </div>
            </div>
            <div className="slide-item">
                <div className="inner-box text-center">
                    <div className="image-box">
                        <figure>
                            <img src="images/testimonials/1.png" alt="" />
                        </figure>
                    </div>
                    <h6>Adam Rose</h6>
                    <p>Neque porro quisquam est, qui dolorem ipsum quia consectetur, dolor sit amet, consectetur, numquam Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, at?</p>
                </div>
            </div>
            <div className="slide-item">
                <div className="inner-box text-center">
                    <div className="image-box">
                        <figure>
                            <img src="images/testimonials/2.png" alt="" />
                        </figure>
                    </div>
                    <h6>David Warner</h6>
                    <p>Neque porro quisquam est, qui dolorem ipsum quia consectetur, dolor sit amet, consectetur, numquam Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, at?</p>
                </div>
            </div>
            <div className="slide-item">
                <div className="inner-box text-center">
                    <div className="image-box">
                        <figure>
                            <img src="images/testimonials/3.png" alt="" />
                        </figure>
                    </div>
                    <h6>Amy Adams</h6>
                    <p>Neque porro quisquam est, qui dolorem ipsum quia consectetur, dolor sit amet, consectetur, numquam Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, at?</p>
                </div>
            </div>
            <div className="slide-item">
                <div className="inner-box text-center">
                    <div className="image-box">
                        <figure>
                            <img src="images/testimonials/1.png" alt="" />
                        </figure>
                    </div>
                    <h6>Adam Rose</h6>
                    <p>Neque porro quisquam est, qui dolorem ipsum quia consectetur, dolor sit amet, consectetur, numquam Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, at?</p>
                </div>
            </div>
            <div className="slide-item">
                <div className="inner-box text-center">
                    <div className="image-box">
                        <figure>
                            <img src="images/testimonials/2.png" alt="" />
                        </figure>
                    </div>
                    <h6>David Warner</h6>
                    <p>Neque porro quisquam est, qui dolorem ipsum quia consectetur, dolor sit amet, consectetur, numquam Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, at?</p>
                </div>
            </div>
            <div className="slide-item">
                <div className="inner-box text-center">
                    <div className="image-box">
                        <figure>
                            <img src="images/testimonials/3.png" alt="" />
                        </figure>
                    </div>
                    <h6>Amy Adams</h6>
                    <p>Neque porro quisquam est, qui dolorem ipsum quia consectetur, dolor sit amet, consectetur, numquam Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, at?</p>
                </div>
            </div>
        </div>
    </div>
</section>

<section className="appoinment-section section">
    <div className="container">
        <div className="row">
            <div className="col-md-6 col-sm-12 col-xs-12">
                <div className="accordion-section">
    <div className="section-title">
        <h3>FAQ</h3>
    </div>
    <div className="accordion-holder">
        <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
            <div className="panel panel-default">
                <div className="panel-heading" role="tab" id="headingOne">
                    <h4 className="panel-title">
                        <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Why Should I choose Medical Health
                        </a>
                    </h4>
                </div>
                <div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                    <div className="panel-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,
                        non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                        sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh
                        helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
                        vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't
                        heard of them accusamus labore sustainable VHS.
                    </div>
                </div>
            </div>
            <div className="panel panel-default">
                <div className="panel-heading" role="tab" id="headingTwo">
                    <h4 className="panel-title">
                        <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false"
                            aria-controls="collapseTwo">
                            What are the Centre’s visiting hours?
                        </a>
                    </h4>
                </div>
                <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                    <div className="panel-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,
                        non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                        sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh
                        helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
                        vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't
                        heard of them accusamus labore sustainable VHS.
                    </div>
                </div>
            </div>
            <div className="panel panel-default">
                <div className="panel-heading" role="tab" id="headingThree">
                    <h4 className="panel-title">
                        <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false"
                            aria-controls="collapseThree">
                            How many visitors are allowed?
                        </a>
                    </h4>
                </div>
                <div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                    <div className="panel-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,
                        non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                        sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh
                        helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
                        vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't
                        heard of them accusamus labore sustainable VHS.
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
            </div>
            <div className="col-md-6 col-sm-12 col-xs-12">
                <div className="contact-area">
    <div className="section-title">
        <h3>Request
            <span>Appointment</span>
        </h3>
    </div>
    <form name="contact_form" className="default-form contact-form" action="sendmail.php" method="post">
        <div className="row">
            <div className="col-md-6 col-sm-12 col-xs-12">
                <div className="form-group">
                    <input type="text" name="Name" placeholder="Name" required="" />
                </div>
                <div className="form-group">
                    <input type="email" name="Email" placeholder="Email" required="" />
                </div>
                <div className="form-group">
                    <select name="subject">
                        <option>Departments</option>
                        <option>Diagnostic</option>
                        <option>Psychological</option>
                    </select>
                </div>
            </div>
            <div className="col-md-6 col-sm-12 col-xs-12">
                <div className="form-group">
                    <input type="text" name="Phone" placeholder="Phone" required="" />
                </div>
                <div className="form-group">
                    <input type="text" name="Date" placeholder="Date" required="" id="datepicker" />
                    <i className="fa fa-calendar" aria-hidden="true"></i>
                </div>
                <div className="form-group">
                    <select name="subject">
                        <option>Doctor</option>
                        <option>Diagnostic</option>
                        <option>Psychological</option>
                    </select>
                </div>
            </div>
            <div className="col-md-12 col-sm-12 col-xs-12">
                <div className="form-group">
                    <textarea name="form_message" placeholder="Your Message" required=""></textarea>
                </div>
                <div className="form-group text-center">
                    <button type="submit" className="btn-style-one">submit now</button>
                </div>
            </div>
        </div>
    </form>
</div>                        
            </div>
        </div>                    
    </div>
</section>


{/* <section className="banner-area other-page">
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-6">
                    <h1 className="text-primary">Caring for better life and medical excellence. </h1>
                    We specialize in In Vitro Fertilization (IVF) with over 75% success rate. Our doctors are highly professional in their duties.
                </div>
            </div>
        </div>
    </section>
    <section className="welcome-area section-padding">
        <div className="container">
            <div className="row">
                <div className="col-lg-5 align-self-center">
                    <div className="welcome-img">
                        <img src={welcome} alt="" />
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="welcome-text mt-5 mt-lg-0" style={{border:0}}>
                        <h2>Welcome to Beyond's Healthcare Services.</h2>
                        <p className="pt-3">We are specialist in In Vitro Fertilization (IVF) with over 75% success rate. Our doctors are highly professional in their duties whose greater brought sixth fly.</p>
                        <p>Subdue whales void god which living don't midst lesser yielding over lights whose. Cattle greater brought sixth fly den dry good tree isn't seed stars were the boring.</p>
                        <a href="#" className="template-btn mt-3">learn more</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="feature-area section-padding bg-primary">
        <div className="container">
            <div className="row text-white">
                <div className="col-lg-6 offset-lg-3">
                    <div className="section-top text-center">
                        <h2 className="text-white">Popular department</h2>
                        <p>Green above he cattle god saw day multiply under fill in the cattle fowl a all, living, tree word link available in the service for subdue fruit.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-3 col-md-6">
                    <div className="single-feature text-center item-padding">
                        <img src={feature1} alt="" />
                        <h3>advance technology</h3>
                        <p className="pt-3">Creeping for female light years that lesser can't evening heaven isn't bearing tree appear</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="single-feature text-center item-padding mt-4 mt-md-0">
                        <img src={feature2} alt="" />
                        <h3>comfortable place</h3>
                        <p className="pt-3">Creeping for female light years that lesser can't evening heaven isn't bearing tree appear</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="single-feature text-center item-padding mt-4 mt-lg-0">
                        <img src={feature3} alt="" />
                        <h3>quality equipment</h3>
                        <p className="pt-3">Creeping for female light years that lesser can't evening heaven isn't bearing tree appear</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="single-feature text-center item-padding mt-4 mt-lg-0">
                        <img src={feature4} alt="" />
                        <h3>friendly staff</h3>
                        <p className="pt-3">Creeping for female light years that lesser can't evening heaven isn't bearing tree appear</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="department-area section-padding4">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 offset-lg-3">
                    <div className="section-top text-center">
                        <h2>Popular department</h2>
                        <p>Green above he cattle god saw day multiply under fill in the cattle fowl a all, living, tree word link available in the service for subdue fruit.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-6 col-md-4">
                    <img src={department1} alt="" className="img-fluid" />
                    <div className="single-feature text-center item-padding bg-white">
                        <h3>advance technology</h3>
                        <p className="pt-3">Creeping for female light years that lesser can't evening heaven isn't bearing tree appear</p>
                    </div>
                </div>
                <div className="col-6 col-md-4">
                    <img src={department2} alt="" className="img-fluid" />
                    <div className="single-feature text-center item-padding">
                        <h3>advance technology</h3>
                        <p className="pt-3">Creeping for female light years that lesser can't evening heaven isn't bearing tree appear</p>
                    </div>
                </div>
                <div className="col-6 col-md-4">
                    <img src={department3} alt="" className="img-fluid" />
                    <div className="single-feature text-center item-padding">
                        <h3>advance technology</h3>
                        <p className="pt-3">Creeping for female light years that lesser can't evening heaven isn't bearing tree appear</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="hotline-area text-center section-padding">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h2>Emergency hotline</h2>
                    <span>(+234) 805-567-550</span>
                    <p className="pt-3">We provide 24/7 customer support. Please feel free to contact us <br />for emergency case.</p>
                </div>
            </div>
        </div>
    </section> */}
    </>
  )
}
export default Homepage
