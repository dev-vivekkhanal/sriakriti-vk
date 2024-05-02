import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useGetAllProducts from "../../hooks/getAllProducts";
import ProductCard from "../global components/ProductCard";
import PageLoader from "../global components/PageLoader";
import filter from "../../assets/icons/filter.svg";
import sort from "../../assets/icons/sort.svg";
import ring from "../../assets/images/banners/ring_1.svg";
import bracelet from "../../assets/images/banners/bracelet_1.svg";
import earring from "../../assets/images/banners/earring_1.svg";
import necklace from "../../assets/images/banners/necklace_1.svg";
import collection from "../../assets/images/banners/collection_1.svg";
import ErrorPage from "../global components/PageErrorFile";
import collection_data from "../../mockapi/apiData";

const AllCollections = () => {
  const params = useParams();

  const [filterOptions, setFilterOptions] = useState({
    diamond_size: "",
    diamond_quality: "",
  });

  const [toggleFilterOpen, setToggleFilterOpen] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  // const { apiData, loading, error } = useGetAllProducts(params?.category_id);

  // if (loading) {
  //   return <PageLoader />;
  // }

  // if (error) {
  //   return <ErrorPage errorMessage={error?.message} />;
  // }
  const apiData = collection_data.res_data;

  const handleFilterChange = (key, value) => {
    setCurrentPage(1);
    setFilterOptions({ ...filterOptions, [key]: value });
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const filteredData = apiData.filter((data) => {
    // Check if the selected diamond size matches or if no size is selected
    const sizeCondition =
      !filterOptions.diamond_size ||
      data.diamond_size === filterOptions.diamond_size;

    // Check if the selected diamond quality matches or if no quality is selected
    const qualityCondition =
      !filterOptions.diamond_quality ||
      data.diamond_quality === filterOptions.diamond_quality;

    // Return true only if both conditions are met
    return sizeCondition && qualityCondition;
  });

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentData = filteredData.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(filteredData.length / productsPerPage);

  return (
    <div className="bg-gray-100 pb-10">
      <div
        className="w-full h-[30vh] lg:h-[45vh] relative bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: `url(${
            params?.category_id == "necklace"
              ? necklace
              : params?.category_id == "rings"
              ? ring
              : params?.category_id == "bracelets"
              ? bracelet
              : params?.category_id == "earrings"
              ? earring
              : params?.category_id == "collection"
              ? collection
              : null
          })`,
        }}
      >
        <div className="w-full absolute flex justify-start items-end inset-0 bg-black bg-opacity-20 pb-16 pl-10 lg:pl-20">
          <h1 className="lora text-[32px] md:text-[55px] tracking-[1px] font-[600] uppercase text-white bg-black bg-opacity-30 p-2 px-4">
            {params?.category_id == "necklace"
              ? "Necklaces"
              : params?.category_id == "rings"
              ? "Rings"
              : params?.category_id == "bracelets"
              ? "Bracelets"
              : params?.category_id == "earrings"
              ? "Earrings"
              : params?.category_id == "collection"
              ? "Collection"
              : null}
          </h1>
        </div>
      </div>
      <div className="w-full px-10 lg:px-20 ">
        {/* filter */}
        <div className="w-full  flex justify-between items-center h-[150px] ">
          {/* filter desktop */}
          <div className="w-fit px-3 md:px-4 py-1 md:py-1 border relative hidden md:flex justify-center items-center gap-4 rounded-[5px] bg-gray-200 cursor-pointer overflow-hidden">
            <span
              className="w-fit flex gap-3 py-2"
              onClick={() => setToggleFilterOpen(!toggleFilterOpen)}
            >
              <img src={filter} className="max-w-[16px]" alt="" />
              Filter
            </span>
            <div
              className={`${
                toggleFilterOpen ? "w-[300px]" : "w-0 p-0 overflow-hidden"
              } transition-all duration-200 ease-in-out rounded-[4px] border flex flex-col md:flex-row justify-center space-x-4 p-2 bg-white`}
            >
              <div
                className={`flex items-center ${
                  toggleFilterOpen ? "" : "hidden"
                }`}
              >
                <span className="mr-2 text-[14px]">Diamond Quality:</span>
                <select
                  value={filterOptions.diamond_quality}
                  onChange={(e) =>
                    handleFilterChange("diamond_quality", e.target.value)
                  }
                >
                  <option value="">All</option>
                  <option value="P">P</option>
                  <option value="Q">Q</option>
                  <option value="GH-VS/SI,EF-VVS">GH-VS/SI,EF-VVS</option>
                </select>
              </div>
            </div>
          </div>
          {/* filter mobile */}
          <div className="w-fit px-3 md:px-4 py-1 md:py-1 border relative flex md:hidden justify-center items-center gap-4 rounded-[5px] bg-gray-200 cursor-pointer overflow-hidden">
            <span
              className="w-fit flex gap-3 py-2"
              onClick={() => setToggleFilterOpen(!toggleFilterOpen)}
            >
              <img src={filter} className="max-w-[16px]" alt="" />
              filter
            </span>
            <div
              className={`w-[220px] ${
                toggleFilterOpen
                  ? "h-[90px] sm:h-[70px]"
                  : "h-0 w-0 p-0 overflow-hidden"
              } transition-all duration-200 ease-in-out rounded-[4px] border flex flex-col gap-2 justify-center  bg-white`}
            >
              <div
                className={`flex items-center bgs-green-500 ${
                  toggleFilterOpen ? "" : "hidden"
                }`}
              >
                <span className="ml-2 text-[13px] sm:text-[14px]">
                  Diamond Quality:
                </span>
                <select
                  value={filterOptions.diamond_quality}
                  onChange={(e) =>
                    handleFilterChange("diamond_quality", e.target.value)
                  }
                  className=" text-[13px] sm:text-[14px]"
                >
                  <option value="">All</option>
                  <option value="P">P</option>
                  <option value="Q">Q</option>
                  <option value="GH-VS/SI,EF-VVS">GH-VS/SI,EF-VVS</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full mb-10">
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 xl:gap-10">
            {currentData.map((data) => (
              <ProductCard
                key={data?.id}
                name={data?.name}
                category={data?.category}
                id={data?.id}
                image={data?.image}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-wrap gap-4 justify-center my-4 mt-16 w-full items-center">
          {/* Pagination buttons */}
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`${
                index + 1 > 9 ? "py-2 px-3" : "py-2 px-4"
              } rounded-full ${
                currentPage === index + 1
                  ? "bg-[#3EDCFF] text-white"
                  : "bg-gray-300"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllCollections;
