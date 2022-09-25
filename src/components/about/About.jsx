import   React ,{useRef} from 'react';
import "./About.css";
import deliveryMan3 from "../../assets/images/Delivery003 1.png";
import {FaFacebookF, FaTwitter, FaInstagram} from 'react-icons/fa';
// import {useIntersection} from 'react-use';
// import {gsap, Power4,} from 'gsap';

const About = () => {
//   const aboutRef = useRef(null);
//   const imageRef =useRef(null);
//   const visionRef = useRef(null)
//   //ANIMATION FOR THE VISION PART
//   const visionIntersection = useIntersection (visionRef,{
//     root: null,
//     rootMargin: "0px",
//     threshold: 0.5,
//   });

//   const vision =()=>{
//     gsap.to(visionRef.current, {
//       duration: 1,
//       opacity: 1,
//       y: -30,
//       delay: 1,
//       ease: Power4.easeOut,
//       stagger: {
//         amount: 0.3,
//       },
//     });
//   }
//   const visionOut = () =>{
//     gsap.to(aboutRef.current, {
//       duration: 1,
//       opacity: 0,
//       y: -20,
//       ease: Power4.easeOut,
//     });
//   }


//     visionIntersection && visionIntersection.intersectionRatio < 0.5
//       ?  visionOut(".vision")
//       : vision(".vision");
// //ANIMATION FOR THE ABOUT SECTION
//   const intersection = useIntersection(aboutRef, {
//     root: null,
//     rootMargin: "0px",
//     threshold: .8,
//   });

//   const fadeIn = () => {
//     gsap.to(aboutRef.current, {
//       duration: 1,
//       opacity: 1,
//       y: -30,
//       delay: 0.5,
//       ease: Power4.easeOut,
//       stagger: {
//         amount: 0.3,
//       },
//     });
//   };
//   const fadeOut = () => {
//     gsap.to(aboutRef.current, {
//       duration: 1,
//       opacity: 0,
//       y: -20,
//       ease: Power4.easeOut,
//     });
//   };

//   intersection && intersection.intersectionRatio < .8
//     ? fadeOut(".fadeIn")
//     : fadeIn(".fadeIn");

//     //ANIMATION FOR THE IMAGE
//      const intersect = useIntersection(imageRef, {
//     root: null,
//     rootMargin: "0px",
//     threshold: 0.9,
//   });

//   const imageIn = () => {
//     gsap.to(imageRef.current, {
//       duration: 1,
//       opacity: 1,
//       y: -30,
//       delay: 1,
//       ease: Power4.easeOut,
//       stagger: {
//         amount: 0.3,
//       },
//     });
//   };
//   const imageOut = () => {
//     // gsap.to(imageRef.current, {
//     //   duration: 1,
//     //   opacity: 0,
//     //   y: -20,
//     //   ease: Power4.easeOut,
//     // });
//   };

//   intersect && intersection.intersectionRatio < 0.9
//     ? imageOut(".imageIn")
//     : imageIn(".imageIn");

    return (
      <div className="about-container" id="about">
        <div  className="about-container-1 imageIn">
          <div className="img-container">
            <img
              className="delivery-man-icon"
              src={deliveryMan3}
              alt="delivery-man"
            />
          </div>
        </div>

            
        <div className=" about-container-2 " >
          <div  className="about-container-section-1 fadeIn">


            <h1>ABOUT US</h1>
            <p>
              Axio is a reliable platform that links you up with people going to
              the same location as your goods. Axio is also a platform that
              provides employment opportunities to travelers and vehicle owners.
              It was built to reduce traffic stress, costs of transport, and to
              make goods transfer more reliable and economical. This amazing
              website is well known for its seamless delivery processes,
              transparency, and reliability.
            </p>
            
          </div>

          <div   className="about-container-section-2 vision">
            <div className="text">
              <h1>VISION</h1>
              <p>
                Our mission is to provide decentralized delivering processes and
                create an opportunity for travelers to earn.
              </p>
            </div>
            <div className="social-icons">
              <a
                href="https://facebook.com/axiohq/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="social-icon instagram">
                  <FaFacebookF className="socialss" />
                </div>
              </a>
              <a
                href="https://twitter.com/axiohq/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="social-icon twitter">
                  <FaTwitter className="socialss" />
                </div>
              </a>
              <a
                href="https://instagram.com/axiohq/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="social-icon linkedin">
                  <FaInstagram className="socialss" />
                </div>
              </a>
            </div>
          </div>
        </div>
       
      </div>
    );
}

export default About;