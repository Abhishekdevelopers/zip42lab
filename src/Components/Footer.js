import React from 'react'

const Footer = () => {
  return (
    <div className='container'>
    <div className='container-footer'>
        <div className='footer-header'>
            <div className='footer-header-child'><img src='/image/Vector.png' alt=''></img><p className='footerp'>Trending Designs & Development</p></div>
            <div className='footer-header-child'><img src='/image/Union (1).png' alt=''></img><p>Support teams across the country</p></div>
            <div className='footer-header-child'><img src='/image/Union.png' alt=''></img><p>Safe & Secure online payment</p></div>
        </div>
        <div className='footer-main'>
            <div >
                <ul className='footer-mainlist'>
                    <li className='footer-mainlist-heading'>Contact us</li>
                    <li className='footer-mainlist-main'><i class="fa-solid fa-phone-volume"></i>  +919015150575</li>
                    <li className='footer-mainlist-main'><i class="fa-solid fa-envelope"></i> info@gorevive.in</li>
                </ul>
            </div>
            <div>
                <ul className='footer-mainlist'>
                    <li className='footer-mainlist-heading'>Home</li>
                    <li className='footer-mainlist-main'><a className='afooter' href='#'>About Us</a></li>
                    <li className='footer-mainlist-main'><a className='afooter' href='#'>Services</a></li>
                    <li className='footer-mainlist-main'><a className='afooter' href='#'>Digital Marketing</a></li>
                    <li className='footer-mainlist-main'><a className='afooter' href='#'>Our Portfolio</a></li>
                </ul>
            </div>
            <div>
                <ul className='footer-mainlist'>
                    <li className='footer-mainlist-heading'>OUR POLICIES</li>
                    <li className='footer-mainlist-main'>
                    <a className='afooter' href='#'>Terms of Use</a></li>
                    <li className='footer-mainlist-main'><a className='afooter' href='#'>Privacy Policy</a></li>
                    <li className='footer-mainlist-main'><a className='afooter' href='#'>Shipping Policy</a></li>
                    <li className='footer-mainlist-main'><a className='afooter' href='#'>Return Policy</a></li>
                </ul>
            </div>
            <div>
                <ul className='footer-mainlist'>
                    <li className='footer-mainlist-heading'>ADDRESS</li>
                    <li className='footer-mainlist-main'>G 194-Sector 63</li> 
                    <li className='footer-mainlist-main'>Noida, Uttar Pardesh,</li> <li className='footer-mainlist-main'>India</li>
                </ul>
            </div>
        </div>
        <div className='subfooter'>
          <div className='subfooter-icon'>
          <i class="fa-brands fa-twitter fa-2xl"></i>
          <i class="fa-brands fa-facebook fa-2xl"></i>
          <i class="fa-solid fa-wifi fa-rotate-45 fa-2xl"></i>
          <i class="fa-brands fa-square-instagram fa-2xl"></i>
          </div>
          <div className='subfootertext'>
            <a className='afooter'  href='#'>COPYRIGHT@ZIP42LAB - TERMS & CONDITIONS PRIVACY POLICY</a>
          </div>
        </div>
    </div>
      
    </div>
  )
}

export default Footer
