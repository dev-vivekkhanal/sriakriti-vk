import React from "react";
import rings from "../../assets/images/rings.png";
import second_img_mobile from '../../assets/images/second-section-mobile.png'
import section_2 from '../../assets/images/section_2.svg'
import arrow from '../../assets/icons/arrow.svg'

const SecondSection = () => {
  return (
    <>
      {/* desktop view */}
      <div className=" hidden md:flex flex-col p-4 relative pt-10 lg:pt-0">
        <img src={section_2} className="max-h-screen" alt="" />
      </div>

      {/* mobile view */}
      <div className="md:hidden">
        <div className="w-full flex justify-end">
          <div className="" ><img src={second_img_mobile} className="" /></div>
        </div>
        <h1 className="lora pt-8 text-[20px] text-[#262626c2] italic pl-4">Sri Aakriti The Store</h1>
        <div className="flex px-10 pt-5 gap-3 justify-end items-end">
          <div className="pb-4">
            <p className="text-md poppins text-[14px] text-[#262626c2]">We specialize in Pt950 and Pt/K18 men's chains, bracelets and kada's. We use your Diamonds to create your dream designs into to live piece. A PGI authorized manufacturer. </p>
          </div>
          <div>
            <img src={arrow} className="w-[25px]" />
          </div>
        </div>
        <h1 className="py-4 font-golden_signature text-[#3EDCFF] text-[70px] text-center">A history made of Platinum</h1>
      </div>
    </>
  );
};

export default SecondSection;
