import React from "react";
import "./Contact.css";
import "./Projects.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import end1 from './carousel-images/end1.jpg';
// import end2 from './carousel-images/end2.jpg';
// import end4 from './carousel-images/end4.png';

const images = [
    "/images/end6.jpg",
    "/images/end1.jpg",
    "/images/end7.jpg",
    "/images/end4.png",
    "/images/end9.jpg",
    "/images/end10.jpg",
];

const Contact = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    };

    return (

        <div className="container">
            <section id="contact-me"></section>
            <h1 className="header">CONTACT ME</h1>
            <p>Feel free to email me at {" "}
                <a href="mailto:sjchan@umich.edu" target="_blank" rel="noopener noreferrer">sjchan@umich.edu</a> 
                {" "} or connect with me on {" "}
                <a href="https://www.linkedin.com/in/sarahjchan/" target="_blank" rel="noopener noreferrer">Linkedin</a> 
                !
            </p>
            <h1 className="header">OTHER FUN STUFF</h1>
            <div className="content">
                <div className="image-grid-carousel">
                    {/* <div style={{ maxWidth: "200px", margin: "10" }}> */}
                    <div style={{width: "100%", maxWidth: "400px", margin: "10px auto"}}>
                    <Slider {...settings}>
                        {images.map((image, index) => (
                        <div key={index}>
                            <img src={image} alt={`Slide ${index + 1}`} style={{ width: "100%", borderRadius: "10px" }} />
                        </div>
                        ))}
                    </Slider>
                    </div>
                    {/* <img src="images/end1.jpg" alt="hi" className="title-image"/>
                    <img src="images/end2.jpg" alt="hi" className="image"/>
                    <img src="images/end5.jpg" alt="hi" className="image"/>
                    <img src="images/end4.png" alt="hi" className="image"/> */}
                </div>
                <div className="text-container-carousel">
                    <p>Outside of robotics, I compete for the University of Michigan Artistic 
                    Swimming Club, rock climb, hike and bike the beautiful trails around Ann Arbor, 
                    and attempt to recreate viral recipes.</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;