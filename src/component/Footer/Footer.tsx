import React from 'react';

function Footer() {
    return (
        <footer className='my-[5%]' id='contact'>
    <div className="m-auto lg:max-w-[100%] xl:max-w-[80%] w-full grid grid-cols-1 lg:grid-cols-4 text-center">
      <div className="text-base px-8 lg:mr-5">
        <img src="https://img.icons8.com/external-flatart-icons-flat-flatarticons/48/000000/external-hotel-hotel-services-and-city-elements-flatart-icons-flat-flatarticons-1.png" />
        <p> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

        <p>Accepted payment methods</p>
        <div className="grid grid-cols-4 my-5 ml-8">
          <img src="https://img.icons8.com/color/48/000000/visa.png" />
          <img src="https://img.icons8.com/color/48/000000/mastercard.png" />
          <img src="https://img.icons8.com/color-glass/48/000000/paypal.png" />
          <img src="https://img.icons8.com/fluency/48/000000/amex.png" />
        </div>
      </div>
      <div className="md:grid md:grid-cols-3 lg:col-span-3">
      <div className="">
        <h3 className='text-3xl font-semibold pb-6'>Recent News</h3>

        <ul  className='text-base leading-10 lg:mr-10'>
          <li>Our Secret Island Boat Tour Is Just for You</li>
          <li>Chill and Escape in Our Natural Shelters</li>
          <li>September in Luviana Hotel</li>
          <li>Live Music Concerts at Luviana</li>
        </ul>
      </div>

      <div className="">
        <h3 className='text-3xl font-semibold pb-6'>For Customers</h3>
        <ul className='text-base leading-10'>
          <li>About Luviana</li>
          <li>Customer Care/Help</li>
          <li>Corporate Accounts</li>
          <li>Financial Information</li>
          <li>Terms & Conditions</li>
        </ul>
      </div>

      <div className="">
        <h3 className='text-3xl font-semibold pb-6'>Contact Us</h3>

        <ul  className='text-base leading-10'>
          <li className='px-10'>3015 Grand Ave, Cocount Grove, Merrick Way FL 123456</li>
          <li><i className="far fa-envelope"></i>demoexample@gmail.com </li>
          <li><i className="far fa-phone-alt"></i>123 456 7898 </li>
          <li><i className="far fa-phone-alt"></i>123 456 7898 </li>
          <li><i className="far fa-comments"></i>24/7 Customer Services </li>
        </ul>
      </div>
    </div>
    </div>
  </footer>
    );
}

export default Footer;