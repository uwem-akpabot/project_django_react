import React from 'react';
import home_background_1 from '../images_website/home_background_1.jpg';
import about from '../images_website/about.png';
import departments from '../images_website/departments.jpg';
import dept_1 from '../images_website/dept_1.jpg';
import dept_2 from '../images_website/dept_2.jpg';
import dept_3 from '../images_website/dept_3.jpg';
import service_1 from '../images_website/service_1.svg';
import service_2 from '../images_website/service_2.svg';
import service_3 from '../images_website/service_3.svg';
import service_4 from '../images_website/service_4.svg';
import service_5 from '../images_website/service_5.svg';
import service_6 from '../images_website/service_6.svg';
import text_section from '../images_website/text_section.jpg';
import cta from '../images_website/cta.jpg'

const Homepage = () => {
  return (
    <React.Fragment>
    <div className="home">
      <div className="home_slider_background"><img src={home_background_1} /></div>
    </div>

    <div className="text_section">
		<div className="container">
			<div className="row">
				<div className="col-lg-5">
					<div className="text_section_image"><img src={text_section} alt="" /></div>
				</div>
				<div className="col-lg-7">
					<div className="text_section_content">
						<div className="section_title"><h2>A great medical team to help your needs</h2></div>
						<div className="text_section_text">
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ante leo, finibus quis est ut, tempor tincidunt ipsum. Nam consequat semper sollicitudin. Aliquam nec dapibus massa. Pellen tesque in luctus ex. Praesent luctus erat sit amet tortor aliquam bibendum. Nulla ut molestie augue, scelerisque consectetur quam. Dolor sit amet, consectetur adipiscing elit. Cura bitur ante leo, finibus quis est ut, tempor tincidunt ipsum. Nam consequat semper sollicitudin.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

    <div className="box">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 box_col">
            <div className="box working_hours bg-white">
              <div className="box_icon d-flex flex-column align-items-start justify-content-center"><div style={{width:"29px", height:"29px"}}>
                <img src="images/alarm-clock.svg" alt="" /></div></div>
              <div className="box_title text-dark">Working Hours</div>
              <div className="working_hours_list text-dark">
                <ul>
                  <li className="d-flex flex-row align-items-center justify-content-start text-dark">
                    <div>Monday – Friday</div>
                    <div className="ml-auto">8.00 – 19.00</div>
                  </li>
                  <li className="d-flex flex-row align-items-center justify-content-start text-dark">
                    <div>Saturday</div>
                    <div className="ml-auto">9.30 – 17.00</div>
                  </li>
                  <li className="d-flex flex-row align-items-center justify-content-start text-dark">
                    <div>Sunday</div>
                    <div className="ml-auto">9.30 – 15.00</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-4 box_col">
            <div className="box box_appointments bg-white">
              <div className="box_icon d-flex flex-column align-items-start justify-content-center"><div style={{width:"29px", height:"29px"}}>
                <img src="images/phone-call.svg" alt="" /></div></div>
              <div className="box_title">Appointments</div>
              <div className="box_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ante leo, finibus quis est ut, tempor tincidunt ipsum. Nam cons equat semper sollicitudin.</div>
            </div>
          </div>
          <div className="col-lg-4 box_col">
            <div className="box box_emergency bg-white">
              <div className="box_icon d-flex flex-column align-items-start justify-content-center"><div style={{width:"37px", height:"37px", marginLeft:"-4px"}}>
                <img src="images/bell.svg" alt="" /></div></div>
              <div className="box_title">Emergency Cases</div>
              <div className="box_phone">+56 273 45678 235</div>
              <div className="box_emergency_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ante leo.</div>
            </div>
          </div>

        </div>
      </div>
    </div>
    <div className="about">
      <div className="container">
        <div className="row row-lg-eq-height">
          <div className="col-lg-7">
            <div className="about_content">
              <div className="section_title"><h2>A great medical team to help your needs</h2></div>
              <div className="about_text">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ante leo, finibus quis est ut, tempor tincidunt ipsum. Nam consequat semper sollicitudin. Aliquam nec dapibus massa. Pellen tesque in luctus ex. Praesent luctus erat sit amet tortor aliquam bibendum. Nulla ut molestie augue, scelerisque consectetur quam. Dolor sit amet, consectetur adipiscing elit. Cura bitur ante leo, finibus quis est ut, tempor tincidunt ipsum. Nam consequat semper sollicitudin. Aliquam nec dapibus massa. Pellentesque in luctus ex.</p>
              </div>
              <div className="button about_button">
                <a href="#">read more</a>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="about_image"><img src={about} alt="" /></div>
          </div>
        </div>
      </div>
    </div>
    <div className="departments">Here ...
      <div className="departments_background parallax-window" data-parallax="scroll" data-image-src={departments} data-speed="0.8"></div>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="section_title section_title_light"><h2>Our Medical Departments</h2></div>
          </div>
        </div>
        <div className="row departments_row row-md-eq-height">
          <div className="col-lg-3 col-md-6 dept_col">
            <div className="dept">
              <div className="dept_image"><img src={dept_1} alt="" /></div>
              <div className="dept_content text-center">
                <div className="dept_title">plastic surgery</div>
                <div className="dept_subtitle">Dr. James Smith</div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 dept_col">
            <div className="dept">
              <div className="dept_image"><img src={dept_2} alt="" /></div>
              <div className="dept_content text-center">
                <div className="dept_title">gastroenterology</div>
                <div className="dept_subtitle">Dr. Gunter Roscoe</div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 dept_col">
            <div className="dept">
              <div className="dept_image"><img src={dept_3} alt="" /></div>
              <div className="dept_content text-center">
                <div className="dept_title">dentistry</div>
                <div className="dept_subtitle">Dr. Maria Williams</div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 dept_col">
            <div className="dept">
              <div className="dept_text">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ante leo, finibus quis est ut, tempor tincidunt ipsum. Nam consequat semper sollicitudin. Aliquam nec dap ibus massa. Pellen tesque in luctus ex.</p>
              </div>
              <div className="button dept_button"><a href="#">read more</a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="services">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="section_title"><h2>Our Featured Services</h2></div>
          </div>
        </div>
        <div className="row services_row">
          <div className="col-lg-4 col-md-6 service_col">
            <a href="services.html">
              <div className="service text-center trans_200">
                <div className="service_icon"><img className="svg" src={service_1} alt="" /></div>
                <div className="service_title trans_200">Free Checkups</div>
                <div className="service_text">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ante leo, finibus quis est ut, tempor tincidunt ipsum. Nam consequat semper sollicitudin.</p>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-md-6 service_col">
            <a href="services.html">
              <div className="service text-center trans_200">
                <div className="service_icon"><img className="svg" src={service_2} alt="" /></div>
                <div className="service_title trans_200">Screening Exams</div>
                <div className="service_text">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ante leo, finibus quis est ut, tempor tincidunt ipsum. Nam consequat semper sollicitudin.</p>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-md-6 service_col">
            <a href="services.html">
              <div className="service text-center trans_200">
                <div className="service_icon"><img className="svg" src={service_3} alt="" /></div>
                <div className="service_title trans_200">RMI Services</div>
                <div className="service_text">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ante leo, finibus quis est ut, tempor tincidunt ipsum. Nam consequat semper sollicitudin.</p>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-md-6 service_col">
            <a href="services.html">
              <div className="service text-center trans_200">
                <div className="service_icon"><img className="svg" src={service_4} alt="" /></div>
                <div className="service_title trans_200">Dentistry</div>
                <div className="service_text">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ante leo, finibus quis est ut, tempor tincidunt ipsum. Nam consequat semper sollicitudin.</p>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-md-6 service_col">
            <a href="services.html">
              <div className="service text-center trans_200">
                <div className="service_icon"><img className="svg" src={service_5} alt="" /></div>
                <div className="service_title trans_200">Neonatology</div>
                <div className="service_text">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ante leo, finibus quis est ut, tempor tincidunt ipsum. Nam consequat semper sollicitudin.</p>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-md-6 service_col">
            <a href="services.html">
              <div className="service text-center trans_200">
                <div className="service_icon"><img className="svg" src={service_6} alt="" /></div>
                <div className="service_title trans_200">Biochemistry</div>
                <div className="service_text">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ante leo, finibus quis est ut, tempor tincidunt ipsum. Nam consequat semper sollicitudin.</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="cta">
      <div className="cta_background parallax-window" data-parallax="scroll" data-image-src="images/cta.jpg" data-speed="0.8"></div>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="cta_content text-center">
              <h2>Need a personal health plan?</h2>
              <p>Duis massa massa, mollis vel ullamcorper quis, finibus et urna. Aliquam ac eleifend metus. Ut sollicitudin risus ex</p>
              <div className="button cta_button"><a href="#">request a plan</a></div>
            </div>
          </div>
        </div>
      </div>		
    </div>
    </React.Fragment>
  )
}
export default Homepage
