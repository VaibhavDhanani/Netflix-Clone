import React from 'react';
import { Link } from 'react-router-dom';

const Bigfooter = () => {
  return (
    <footer className="bg-dark text-white py-8 pt-20 flex">
      <div className="mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h5 className="text-lg font-bold mb-4">About Us</h5>
            <p>Netflix Clone made by us using MERN Stack</p>
            <div className="flex justify-center items-center space-x-4">
              <a
                href="https://www.linkedin.com/in/vaibhav-dhanani-01bb46256/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 transition-colors duration-300"
              >
                Vaibhav Dhanani
              </a>
              <a
                href="https://www.linkedin.com/in/yash-gabani-527886258/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 transition-colors duration-300"
              >
                Yash Gabani
              </a>
            </div>
          </div>
          <div>
          </div>
          <div>
            <h5 className="text-lg font-bold mb-4">Contact Us</h5>
            <address className="not-italic">
              <strong>Flixify</strong><br />
              Surat<br />
              Gujrat, India<br />
              <abbr title="Phone">P :</abbr> (+91) 78619 79302 <br/>
              <abbr title="Phone">P :</abbr> (+91) 70469 96816
            </address>
          </div>
        </div>
        <hr className="my-8 border-gray-700" />
        <div className="text-center">
          <ul className="list-none inline-block">
            <li className="inline-block mr-4"><a href="" className="hover:text-gray-300">Privacy Policy</a></li>
            <li className="inline-block mr-4"><a href="" className="hover:text-gray-300">Terms of Use</a></li>
            <li className="inline-block mr-4"><a href="" className="hover:text-gray-300">Sitemap</a></li>
          </ul>
          <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} Flixify.com  All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Bigfooter;
