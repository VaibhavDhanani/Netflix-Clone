import React from 'react';

const Bigfooter = () => {
  return (
    <footer className="bg-dark text-white py-8 mt-35 pt-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h5 className="text-lg font-bold mb-4">About Us</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit.</p>
          </div>
          <div>
            <h5 className="text-lg font-bold mb-4">Useful Links</h5>
            <ul className="list-none">
              <li><a href="#" className="hover:text-gray-300">Home</a></li>
              <li><a href="#" className="hover:text-gray-300">About Us</a></li>
              <li><a href="#" className="hover:text-gray-300">Services</a></li>
              <li><a href="#" className="hover:text-gray-300">Contact</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-lg font-bold mb-4">Contact Us</h5>
            <address className="not-italic">
              <strong>Your Company</strong><br />
              1234 Street Name, City Name<br />
              State, Country<br />
              <abbr title="Phone">P:</abbr> (123) 456-7890
            </address>
          </div>
        </div>
        <hr className="my-8 border-gray-700" />
        <div className="text-center">
          <ul className="list-none inline-block">
            <li className="inline-block mr-4"><a href="#" className="hover:text-gray-300">Privacy Policy</a></li>
            <li className="inline-block mr-4"><a href="#" className="hover:text-gray-300">Terms of Use</a></li>
            <li className="inline-block mr-4"><a href="#" className="hover:text-gray-300">Sitemap</a></li>
          </ul>
          <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} Your Website Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Bigfooter;
