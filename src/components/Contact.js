import React from "react";
import "./Contact.css";
import "./Projects.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
    "images/end1.jpg",
    "images/end2.jpg",
    // "images/end3.jpeg",
    "images/end4.png",
];

const Contact = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 5000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
    };

    return (

        <div className="container">
            <section id="contact-me"></section>
            <h1 className="header">CONTACT ME</h1>
            <p>Feel free to email me at {" "}
                <a href="mailto:sjchan@umich.edu" target="_blank" rel="noopener noreferrer">sjchan@umich.edu</a> 
                {" "} or connect with me on LinkedIn {" "}
                <a href="https://www.linkedin.com/in/sarahjchan/" target="_blank" rel="noopener noreferrer">here</a> 
                !
            </p>
            <h1 className="header">OTHER FUN STUFF</h1>
            <div className="content">
                <div className="image-grid-carousel">
                    <div style={{ maxWidth: "200px", margin: "10" }}>
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

// const Contact = () => {
//   return (
//     <div className="contact-container">
//         <h1 className="header">MORE FUN STUFF</h1>
//         <div className="text-container">hello</div>
//     </div>
//     // Feel free to email me at sjchan@umich.edu or connect with me on LinkedIn here!
//     // <h1 classname="header">MORE FUN STUFF</h1>
//   );
// };

export default Contact;