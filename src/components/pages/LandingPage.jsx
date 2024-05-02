import React from "react";
import hero_img from "../../assets/images/hero-img.png";
import arrow from '../../assets/icons/arrow.svg'
import transparent_logo from "../../assets/icons/transparent-logo.png";
import SecondSection from "../landing-subcomponents/SecondSection";
import ThirdSection from "../landing-subcomponents/ThirdSection";
import FourthSection from "../landing-subcomponents/FourthSection";
import FifthSection from "../landing-subcomponents/FifthSection";
import SixthSection from "../landing-subcomponents/SixthSection";
import first_section from "../../mockapi/landingFirstSectionApi";
import landingSectionApiAtom from "../../recoil/atoms/landing-page/landingSectionApiAtom";
import { useRecoilState } from "recoil";
import { useEffect } from "react";
import axios from "axios";
import navApiAtom from "../../recoil/atoms/global/navApiAtom";
import { NavLink } from "react-router-dom";
import categoriesApiAtom from "../../recoil/atoms/products/categoriesApiAtom";


const LandingPage = () => {

  const [landingApiData, setLandingApiData] = useRecoilState(landingSectionApiAtom);

  const [categoryApiData, setCategoryApiData] = useRecoilState(categoriesApiAtom);

  const [mobileNav, setMobileNav] = useRecoilState(navApiAtom);
    

  return (
    <>
      <div className="w-full mx-auto">
        {/* desktop view */}
        <div className="w-[93%] hidden md:flex justify-around mt-[-25px] pb-[42px]">
            <div className="w-[8%] flex justify-center items-end pb-[200px]">
              <img src={arrow} className="" />
            </div>
            <div className="hidden flex-[0.9] md:flex items-center">
              <div className="flex w-[47%] flex-col justify-between items-center ">
                <div className="flex flex-1 flex-col items-start my-20 w-[80%] lora font-[16px] text-[#696969] text-[35px] leading-tight">
                  <div>
                    <p>{first_section?.section_data?.section_title?.first}</p>
                    <p>{first_section?.section_data?.section_title?.second}</p>
                    <p>{first_section?.section_data?.section_title?.third}</p>
                  </div>
                </div>
                <div className="w-[45rem] flex-1 font-golden_signature overflow-auto text-[140px] text-[#3EDCFF] translate-x-[240px] translate-y-[100px]">{first_section?.section_data?.section_sub_title}</div>
              </div>
              <div className=" w-[53%]">
                <img src={first_section?.section_data?.section_image} className="w-[1500px]" /> 
              </div>
            </div>
          </div>

        {/* mobile view */}
        <div className="md:hidden">
          <div className="w-[93%] mt-4 flex justify-between">
            <div className="flex flex-col justify-center pl-4 py-10 lora font-[16px] text-[#696969] w-max">
              <p className="text-[18px] sm:text-[23px] sm:pl-2" >{first_section?.section_data?.section_title?.first}</p>
              <p className="text-[18px] sm:text-[23px] sm:pl-2" >{first_section?.section_data?.section_title?.second}</p>
              <p className="text-[18px] sm:text-[23px] sm:pl-2" >{first_section?.section_data?.section_title?.third}</p>
            </div>
            <div className="w-min sm:w-auto"><img src={transparent_logo} className="" /></div>
          </div>
          <div className="w-full">
            <img src={hero_img} className="w-full" />
            <div className="h-[8px] w-full bg-[#696969]"></div>
            <div className="font-golden_signature text-[80px] text-center w-full mx-auto text-[#3EDCFF] -mt-32 mb-2">the beauty of simplicity</div>
          </div>
        </div>


        <SecondSection />
        <ThirdSection />
        <FourthSection />
        <FifthSection />
        <SixthSection />
      </div>
    </>
  );
};

export default LandingPage;
