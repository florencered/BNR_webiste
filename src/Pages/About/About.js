import React, { useEffect } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import "./about.css" 
import AOS from "aos"; 
import 'aos/dist/aos.css';
import WaitlistHeader from '../../components/WaitlistHeader/WaitlistHeader';
const About = () => { 
    useEffect(()=>{
        AOS.init({duration:2000});
    },[])
    return (
        <div>
            <WaitlistHeader/>
            <div className='info'>
                <div className="container mb-5 mt-5 fs-5" data-aos='fade-up'>
                    <h2 id="history">Our History</h2>
                    <p className='mt-3 mb-3'> 
                        BuildNRun was founded by two Nigerian teenagers, Edem Gold and Breakthrough Makanjuola, who are determined to help businesses in Africa get online quickly and affordably. Edem and Breakthrough each had unique skill sets that complemented each other perfectly.
                    </p>

                    <p className='mt-3 mb-3'>
                        Edem was an expert in coding and the technical aspects of building websites and managing teams, while Breakthrough was a natural when it came to talking to people and marketing the services. Together, they assembled a team of expert developers and designers who shared their passion for making a difference, and they've since helped hundreds of businesses get online and reach new customers.
                    </p>

                </div>
                <div className="container mb-5 mt-5 fs-5" data-aos='fade-up'>
                    <h2 id="why">Why we do what we do</h2>

                    <p className='mt-3 mb-3' >
                        BuildNRun is a software firm which focuses on building and maintaing Virtual Stores for everyone selling in Africa. The core focus and mission of BuildNRun is to make it extremely easy and stress free for businsses to get online, hereby, making it possible for sellers to focus on operating their businesses while we focus on making their stores work so they don’t have to.
                    </p>
                    <p className='mt-3 mb-3'>
                        At BuildNRun, we believe that every business deserves a place on the internet, no matter how small. That's why we not only build and design e-commerce websites, but we also offer maintenance and support services so that our clients can focus on running their businesses instead of worrying about website maintenance.
                    </p>

                    <p className='mt-3 mb-3'>
                        We know that running a business is hard work, and we're committed to making the process of getting online as easy and stress-free as possible. Our team is always up-to-date on the latest trends and technologies in e-commerce, and we're always looking for ways to improve our services.
                    </p>
                </div>
                <div className="container mb-5 mt-5 fs-5" data-aos='fade-up'>
                    <h2> Here's what BNR is</h2>
                    <p className='mt-3 mb-3'>
                        BuildNRun is a cutting-edge technology company that specializes in developing innovative solutions to complex problems. Our team of experienced engineers and developers is dedicated to using the latest technologies and techniques to design and build custom software, applications, and systems that solve the most pressing challenges faced by businesses today.
                    </p>

                    <p className='mt-3 mb-3'>
                        From streamlining internal processes to developing advanced data analytics tools, our solutions are designed to help businesses stay ahead of the curve and achieve their goals. We pride ourselves on delivering high-quality, reliable solutions that are tailored to each client's unique needs and requirements.
                    </p>
                    <p className='mt-3 mb-3'>
                        At BuildNRun, we believe that technology can be a powerful force for positive change, and we are committed to leveraging its full potential to make a difference in the world. Whether you are a small startup or a large enterprise, we are here to help you build the solutions you need to succeed in today's fast-paced digital landscape.

                    </p>

                </div>

                <div className="container mb-5 mt-5 fs-5" data-aos='fade-up'>
                    <h2 id="mission">Our Mission Statement</h2>
                    <p className='mt-3 mb-3'>Our mission at BuildNRun is to empower Africa by building solutions to complex problems throughh technology, and we're dedicated to making that a reality through our innovative solutions and expert services.</p>

                </div>

            </div>
            <div className="container team" id="team" >

                <div className="section-title" data-aos='zoom-out'>
                    <h2>Founding Team</h2>
                    <p>“Never doubt that a small group of thoughtful, committed citizens can change the world; indeed, it's the only thing that ever has.” — Margaret Mead</p>
                </div>

                <div className="row">


                    <div className="col-lg-5 mt-4 mb-4 mt-lg-0" data-aos="zoom-in" data-aos-delay="200">
                        <div className="member d-flex align-items-start">
                            <div className="pic"><img src="images/team-2.jpg" className="img-fluid" alt="" /></div>
                            <div className="member-info">
                                <h3>Edem Gold</h3>
                                <span>Co-Founder, CEO</span>
                                <p>Edem Gold is a Nigerian writer and Software Engineer. He has written about topics such as quantum computing, AI/Machine Learning, and Software Engineering. He has been featured in publications such as; HackerNoon and The Next Web.</p>
                                <div className="social">
                                    <a href="https://twitter.com/EdemGold1"><i class="fab fa-twitter"></i></a>
                                    <a href="https://instagram.com/edemg_old"><i class="fab fa-instagram"></i></a>
                                    <a href="https://www.linkedin.com/m/in/edem-gold-06ab461b8"> <i class="fab fa-linkedin"></i> </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-5 mb-4" data-aos="zoom-in" data-aos-delay="100">
                        <div className="member d-flex align-items-start">
                            <div className="pic"><img src="images/team-1.jpg" className="img-fluid" alt="" /></div>
                            <div className="member-info">
                                <h3>Makanjuola Breakthrough</h3>
                                <span>Co-Founder, CMO</span>
                                <p> Breakthrough Makanjuola is a Nigerian Copywriter and Graphic designer.  He focuses on the creative aspects of marketing and advertising. He has also served clients extensively on Fiverr and UpWork .</p>
                                <div className="social">
                                    <a href="https://twitter.com/Breakthrumusic_"><i className="fab fa-twitter"></i></a>
                                    <a href="https://instagram.com/iambreakthroughmakanjuola"><i className="fab fa-instagram"></i></a>
                                    <a href="http://www.linkedin.com/in/breakthrough-makanjuola-"> <i className="fab fa-linkedin"></i> </a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>


            <Footer />
        </div>
    )
}

export default About