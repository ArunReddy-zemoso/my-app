import React from 'react'
import '../../styles/Footer.css'
import BlinkistLogoComponent from '../atoms/BlinkistLogoComponent'

function Footer() {
  return (
    <div className='footer'>
      {/* <BlinkistLogoComponent />
      <BlinkistLogoComponent></BlinkistLogoComponent>
      <BlinkistLogoComponent></BlinkistLogoComponent>
      <BlinkistLogoComponent></BlinkistLogoComponent> */}

      <div className="footer1">
        <div>
          <BlinkistLogoComponent />
          <p className="footerItems" style={{fontSize:'24px',fontWeight:'500',color:'#0365F2'}}>Big ideas in small packages
          Start learning now</p>
        </div>
        <div className="grid-container">
          <div className="footerItems heading">Editorial</div>
          <div className="footerItems heading">Useful links</div>
          <div className="footerItems heading">Company</div>
          <div className="footerItems ">Book lists</div>
          <div className="footerItems ">Pricing</div>
          <div className="footerItems ">About</div>
          <div className="footerItems ">What is Nonfiction?</div>
          <div className="footerItems ">Blinkist business</div>
          <div className="footerItems ">Careers</div>
          <div className="footerItems ">What to read next?</div>
          <div className="footerItems ">Gift cards</div>
          <div className="footerItems ">partners</div>
          <div className="footerItems ">Benefits of reading</div>
          <div className="footerItems ">Blinkist magaine</div>
          <div className="footerItems ">Code of Conduct</div>
          <div className="footerItems "></div>
          <div className="footerItems ">Contact & help</div>
          <div className="footerItems "></div>
        </div>
      </div>
      <div>
        <p className='footerItems' style={{fontSize:'14px',fontFamily:'Cera Pro'}}>@ Blinkist 2021 Sitemap | imprint | Terms of Service | Privacy Policies</p>
      </div>
    </div>
  )
}

export default Footer
