function Footer() {
  return (
    <footer className="bg-black text-white px-6 md:px-16 py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-bold">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Why AgroRed?</a></li>
            <li><a href="#">Purpose</a></li>
            <li><a href="#">About AgroRed</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold">Products</h3>
          <ul className="">
            <li><a href="#">Return</a></li>
            <li><a href="#">Deliveries</a></li>
            <li><a href="#">Quality</a></li>
            <li><a href="#">Order status</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold">Information</h3>
          <ul className="">
            <li><a href="#">How to buy</a></li>
            <li><a href="#">Contact us</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">FQAQS</a></li>
          </ul>
        </div>
        </div>
    </footer>
  );
};

export default Footer;