// import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
// function Testimonial(){
//   return (
    // <>
    // <div className='container'>
    //    <div className='boxslider'>
    //     <div className='boxslidercontent'>
    //     <div className='oursliderheader'>
    //     <h1 className='hslider'>Our Portfolio</h1>
    //     <a  className="aslider" href='#'>View All <img src='/image/Arrow 1.png' className="imgslider" alt='View All'></img></a>
    //  </div> 
    //  <div className='boxcontent'>
    //         <img className="imgcontent"
    //     src='' alt='img'></img>
    //         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    //         <span className='spansildercontent'>
    //         <img src="/image/Line 1.png" alt='line' className='lineimg'></img><FontAwesomeIcon icon={faQuoteLeft} className='quoticon'/>
    //         <h4>Binod Agarwal, India</h4>
    //         </span>
    //     </div>
    //     </div>
    //    </div>
    // </div>
    // </>
//   )
// }

// export default Testimonial

import React, { Component } from "react";
import Slider from "react-slick";
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      autoplay:true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            autoplay:true,
            slidesToScroll: 3,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            autoplay:true,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 425,
          settings: {
            slidesToShow: 1,
            autoplay:true,
            slidesToScroll: 1,
            dots: false
          }
        }
      ]
    };
    return (
       
        <div className='container'>
         <div className="col-md-12">
        <div className="boxcontainer">
        <div className='oursliderheader'>
        <h1 className='hslider'>Client Testimonial</h1>
        <a  className="aslider" href='#'>View All <img src='/image/Arrow 1.png' className="imgslider" alt='View All'></img></a>
     </div>
     <div className="sildermainbox">
        <Slider {...settings}>

          <div >
            <div className='boxcontent'>
             <img className="imgcontent"
        src='/image/Ellipse 31.png' alt='img'></img>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className="imgicon">
            <img src="/image/Line 1.png" alt='line'></img><FontAwesomeIcon icon={faQuoteLeft} className='quoticon'/>
            </div>
            <p className="pslider">Binod Agarwal, India</p>
           
        </div>
          </div>
          <div>
            <div className='boxcontent'>
             <img className="imgcontent"
        src='/image/Ellipse 31 (1).png' alt='img'></img>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className="imgicon">
            <img src="/image/Line 1.png" alt='line'></img><FontAwesomeIcon icon={faQuoteLeft} className='quoticon'/>
            </div>
            <p className="pslider">Binod Agarwal, India</p>
           
        </div>
          </div>
          <div>
            <div className='boxcontent'>
             <img className="imgcontent"
        src='/image/Ellipse 31 (2).png' alt='img'></img>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className="imgicon">
            <img src="/image/Line 1.png" alt='line'></img><FontAwesomeIcon icon={faQuoteLeft} className='quoticon'/>
            </div>
            <p className="pslider">Binod Agarwal, India</p>
           
        </div>
          </div>
          <div>
            <div className='boxcontent'>
             <img className="imgcontent"
        src='/image/Ellipse 31.png' alt='img'></img>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className="imgicon">
            <img src="/image/Line 1.png" alt='line'></img><FontAwesomeIcon icon={faQuoteLeft} className='quoticon'/>
            </div>
            <p className="pslider">Binod Agarwal, India</p>
           
        </div>
          </div>
          <div>
            <div className='boxcontent'>
             <img className="imgcontent"
        src='/image/Ellipse 31 (1).png' alt='img'></img>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className="imgicon">
            <img src="/image/Line 1.png" alt='line'></img><FontAwesomeIcon icon={faQuoteLeft} className='quoticon'/>
            </div>
            <p className="pslider">Binod Agarwal, India</p>
           
        </div>
          </div>
          <div>
            <div className='boxcontent'>
             <img className="imgcontent"
        src='/image/Ellipse 31 (2).png' alt='img'></img>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className="imgicon">
            <img src="/image/Line 1.png" alt='line'></img><FontAwesomeIcon icon={faQuoteLeft} className='quoticon'/>
            </div>
            <p className="pslider">Binod Agarwal, India</p>
           
        </div>
          </div>
        </Slider>
        </div>
        </div>
        </div>
      </div>
    );
  }
}