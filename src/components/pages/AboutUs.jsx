import React from "react";
import { useState } from "react";
import aboutus_img from "../../assets/images/about-us.svg";
import about_us from "../../mockapi/aboutUsApiData";

const AboutUs = () => {

  const [searchFilter, setSearchFilter] = useState('');


  return (
    <div className="">
      <div className="hidden md:block w-full text-center lora text-[32px] tracking-[2px] mt-14 mb-12">
        <h1>About Us</h1>
      </div>
      <div className="mt-5 md:mt-0 mb-32 flex flex-col md:flex-row justify-evenly md:justify-start gap-12 md:gap-2 items-center w-[95%] mx-auto">
        <div className="w-[95%] md:w-full md:max-w-[550px] mx-auto">
          <img src={aboutus_img} className="w-full md:max-w-[550px]" />
        </div>
        <div className="w-full max-w-[700px] px-4 mx-auto flex flex-col items-start gap-14 md:gap-7">
          {about_us?.about?.map((data, i) => (
            <React.Fragment key={i}>
              <p className="poppins text-[12px] md:text-[14px] tracking-[2px]">
                {data}
              </p>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
