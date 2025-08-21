import { Instagram, Facebook, Linkedin, Globe, MapPin } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-black text-white w-full py-8">
      <div className="px-20">

        <div className="flex items-center">
          <img src="Logo_Blanco.svg" alt="Logo" className="w-40 h-40 inline-block -ml-10"/>
        </div>
          
        <div className="grid grid-cols-3 gap-64 mb-8">
          <div  className="flex flex-col items-start">
            <h3 className="font-bold mb-6" >Company</h3>
            <ul className="space-y-2">
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Why AgroRed?</a></li>
              <li><a href="#">Purpose</a></li>
              <li><a href="#">About AgroRed</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-6">Products</h3>
              <ul className="space-y-2">
                <li><a href="#">Return</a></li>
                <li><a href="#">Deliveries</a></li>
                <li><a href="#">Quality</a></li>
                <li><a href="#">Order status</a></li>
              </ul>
          </div>

          <div>
            <h3 className="font-bold mb-6">Information</h3>
              <ul className="space-y-2">
                <li><a href="#">How to buy</a></li>
                <li><a href="#">Contact us</a></li>
                <li><a href="#">About us</a></li>
                <li><a href="#">FQAQS</a></li>
            </ul>
          </div>
      </div>

      <hr className="border-t-4 border-white w-full mx-auto my-6" />

      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="flex space-x-6 text-2xl">
          <a href=""><Instagram/></a>
          <a href=""><Facebook /></a>
          <a href=""><Linkedin /></a>
        </div>

        <div className="flex space-x-8 mt-4 md:mt-0 text-white">
          <div className="flex items-center space-x-2">
            <Globe className="w-5 h-5" />
            <span>United States</span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="w-5 h-5" />
            <span>El Salvador</span>
          </div>
        </div>
      </div>
    </div>
    </footer>
  );
};

export default Footer;