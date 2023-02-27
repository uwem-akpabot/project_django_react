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
    <section className="banner-area other-page">
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-6">
                    <h1 className="text-primary">Caring for better life and medical excellence. </h1>
                    We lead the way in medical excellence. Creeping beginning over gathered brought 
                    over gathered brought.
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
                        <h2>Welcome to our clinic</h2>
                        <p className="pt-3">Subdue whales void god which living don't midst lesser yielding over lights whose. Cattle greater brought sixth fly den dry good tree isn't seed stars were.</p>
                        <p>Subdue whales void god which living don't midst lesser yielding over lights whose. Cattle greater brought sixth fly den dry good tree isn't seed stars were the boring.</p>
                        <a href="#" class="template-btn mt-3">learn more</a>
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
                    <img src={department1} alt="" class="img-fluid" />
                    <div className="single-feature text-center item-padding bg-white">
                        <h3>advance technology</h3>
                        <p className="pt-3">Creeping for female light years that lesser can't evening heaven isn't bearing tree appear</p>
                    </div>
                </div>
                <div className="col-6 col-md-4">
                    <img src={department2} alt="" class="img-fluid" />
                    <div className="single-feature text-center item-padding">
                        <h3>advance technology</h3>
                        <p className="pt-3">Creeping for female light years that lesser can't evening heaven isn't bearing tree appear</p>
                    </div>
                </div>
                <div className="col-6 col-md-4">
                    <img src={department3} alt="" class="img-fluid" />
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
    </section>
    </>
  )
}
export default Homepage
