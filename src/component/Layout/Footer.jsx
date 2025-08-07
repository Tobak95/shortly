import React from "react";
import facebook from "../../assets/icon-facebook.svg";
import twitter from "../../assets/icon-twitter.svg";
import pinterest from "../../assets/icon-pinterest.svg";
import instagram from "../../assets/icon-instagram.svg";

const Footer = () => {
  return (
    <footer className="bg-[var(--Gray900)] text-white lg:h-[300px] flex  ">
      <div className="layout p-4">
        <div className="lg:grid lg:grid-cols-12 lg:py-8">
          <div className="col-span-4">
            <h1 className="font-bold text-[35px] text-center mt-9 lg:mt-0 lg:text-start">
              Shortly
            </h1>
          </div>

          <div className="col-span-2">
            <div className="flex flex-col mt-9 lg:mt-0">
              <div>
                <h1 className=" font-bold text-center lg:text-start">
                  Features
                </h1>
              </div>
              <div className="flex flex-col text-center lg:text-start mt-4 gap-2">
                <a href="#">Link Shortening</a>
                <a href="#">Branded Links</a>
                <a href="#">Analytics</a>
              </div>
            </div>
          </div>

          <div className="col-span-2 ">
            <div className="flex flex-col mt-9 lg:mt-0">
              <div>
                <h1 className=" font-bold text-center lg:text-start">
                  Resources
                </h1>
              </div>

              <div className="flex flex-col items-center lg:items-start mt-4 gap-2">
                <a href="#">Blog</a>
                <a href="#">Developers</a>
                <a href="#">Support</a>
              </div>
            </div>
          </div>

          <div className="col-span-2">
            <div className="flex flex-col mt-9 lg:mt-0">
              <div>
                <h1 className="font-bold text-center lg:text-start">Company</h1>
              </div>

              <div className="flex flex-col items-center lg:items-start mt-4 gap-2">
                <a href="#">About</a>
                <a href="#">Our Team</a>
                <a href="#">Careers</a>
                <a href="#">Contact</a>
              </div>
            </div>
          </div>

          <div className="col-span-2 ">
            <div className="flex justify-center lg:justify-between  mt-9 lg:mt-0 lg:items-start gap-5 font-bold">
              <img src={facebook} alt="...." />
              <img src={twitter} alt="...." />
              <img src={pinterest} alt="...." />
              <img src={instagram} alt="...." />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
