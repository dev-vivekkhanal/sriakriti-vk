import React, { useState, useEffect } from "react";
import search from "../../assets/icons/search.svg";
import collection_data from "../../mockapi/apiData.js";
import sort_data from "../../mockapi/allCollectionSortData.js";
import heart_outline from "../../assets/icons/heart-outline.svg";
import heart_filled from "../../assets/icons/heart-filled.svg";
import cross from '../../assets/icons/cross.svg';
import down_arrow from "../../assets/icons/Arrow-sort.svg";
import up_arrow from "../../assets/icons/up-arrow.svg";
import filter from "../../assets/icons/filter.svg";
import { Link, NavLink, useParams } from "react-router-dom";
import categoriesApiAtom from "../../recoil/atoms/products/categoriesApiAtom";
import { useRecoilState } from "recoil";
import singleProductApiAtom from "../../recoil/atoms/products/singleProductApiAtom";
import axios from "axios";
import wishlistApiAtom from "../../recoil/atoms/wishlist/wishlistApiAtom";
import ring from '../../assets/images/banners/ring_1.svg'
import bracelet from '../../assets/images/banners/bracelet_1.svg'
import earring from '../../assets/images/banners/earring_1.svg'
import necklace from '../../assets/images/banners/necklace_1.svg'
import collection from '../../assets/images/banners/collection_1.svg'
import { toast } from "react-toastify";


const CategoryPage = () => {

  const [searchItem, setSearchItem] = useState("");

  const [categoryApiData, setCategoryApiData] = useRecoilState(categoriesApiAtom);
  const [categoryApiDataLoader, setCategoryApiDataLoader] = useState(false);

  const [productApi, setProductApi] = useRecoilState(singleProductApiAtom)

  const [selectedFilters, setSelectedFilters] = useState({});

  const [sortToggle, setSortToggle] = useState(false);
  const [wishlistToggle, setWishlistToggle] = useRecoilState(wishlistApiAtom);
  const [filterToggle, setFilterToggle] = useState(false);
  const [desktopSort, setDesktopSort] = useState(false);
  const [filterDropDown, setFilterDropdown] = useState(false);

  const [filterSubCategory, setFilterSubCategory] = useState(null);
  const [filteredData, setFilteredData] = useState(categoryApiData);
  // const [filteredData, setFilteredData] = useState(collection_data.res_data);

  const params = useParams();

  window.addEventListener("click", (event) => {
    const sort = document?.getElementById("sort");

    if (sort) {
      if (!sort?.contains(event?.target)) {
        setSortToggle(false);
      }
    }
  });

  useEffect(() => {
    setCategoryApiDataLoader(true)
    let formdata = new FormData();
    formdata.append("category_name", params?.category_id);
    formdata.append("token", localStorage.getItem("token"));
    axios.post(import.meta.env.VITE_APP_BASE_API_LINK + 'categoryPageNew', formdata).then((response) => {
      setCategoryApiData(response)
      setFilteredData(response?.data)
      let wishlistFormdata = new FormData();
      wishlistFormdata.append("token", localStorage.getItem("token"));
      axios.post(import.meta.env.VITE_APP_BASE_API_LINK + 'getUserWishlist', wishlistFormdata).then((response) => {
        // setWishlistData(response?.data?.wishlist_data)
        console.log(response?.data?.wishlist_data)
        setWishlistToggle(response?.data?.wishlist_data)
        localStorage.setItem("wishlist_array", response?.data?.wishlist_data?.map((data) => data?.id)?.toString());
        setCategoryApiDataLoader(false);
      })
    })
  }, [params])



  const handleClick = () => {
    setFilterToggle(false);
    setFilterSubCategory(null);
  };

  const filter_options = [
    {
      id: 0,
      filter_name: 'diamond_quality',
      uiText: 'Diamond Quality',
      options: [
        'P', 'Q', 'EVS/EWS'
      ],
    },
    {
      id: 1,
      filter_name: 'diamond_size',
      uiText: 'Diamond Size',
      options: [
        '0.03', '0.06', '0.10'
      ],
    },
  ];

  const handleFilterSelect = (filterName, option) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: option,
    }));
  };

  const handleApplyFilters = () => {
    // Filter the data based on selected filters
    // const filteredArray = collection_data.res_data.filter((product) => {
    const filteredArray = categoryApiData.filter((product) => {
      // Apply filters based on selected filter values

      // Example: Filtering based on Diamond quality
      const diamondQualityFilter = selectedFilters['diamond_quality'];
      if (diamondQualityFilter && product.diamond_quality !== diamondQualityFilter) {
        return false;
      }

      // Example: Filtering based on Diamond size
      const diamondSizeFilter = selectedFilters['diamond_size'];
      if (diamondSizeFilter && !product.diamond_size.includes(diamondSizeFilter)) {
        return false;
      }

      // If the product passes all filters, include it in the filtered data
      return true;
    });
    setFilteredData(filteredArray);
    toast.success('Filter applied!', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      draggable: true,
      theme: "dark",
    });
    setFilterDropdown(false);
  }

  const handleRemoveFilters = () => {
    setSelectedFilters({});
    // setFilteredData(collection_data?.res_data);
    setFilteredData(categoryApiData?.data);
    setFilterDropdown(false);
    toast.success('Filters disabled!', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      draggable: true,
      theme: "dark",
    });
  };

  return (
    <div>
      <div className="w-full pb-[100px]">
        <div className={`w-full bg-cover bg-no-repeat bg-center h-[250px] md:h-[400px] flex`}
          style={{ backgroundImage: `url(${params?.category_id == 'necklace' ? necklace : params?.category_id == 'rings' ? ring : params?.category_id == 'bracelets' ? bracelet : params?.category_id == 'earrings' ? earring : params?.category_id == 'collection' ? collection : null})` }}
        >
          {/* <div className="w-full py-8 text-left sm:p-3 mb-10 md:p-6 md:py-32 bg-black bg-opacity-20 h-fit">
              <h1 className="lora text-[28px] md:text-[45px] tracking-[1px] font-[600] my-5 md:my-16 pl-10 w-full uppercase text-white">
                {params?.category_id == 'necklace' ? 'Necklaces' : params?.category_id == 'rings' ? 'Rings' : params?.category_id == 'bracelets' ? 'Bracelets' : params?.category_id == 'earrings' ? 'Earings' : params?.category_id == 'collection' ? 'Collection' : null}
              </h1>
            </div> */}
          <div className="w-full h-full flex justify-end items-end md:items-center bg-black bg-opacity-10">
            <h1 className="lora text-[28px] md:text-[45px] tracking-[1px] font-[600] mb-5 md:mb-0 md:my-16 pl-5 md:pl-10 w-full uppercase text-white">
              {params?.category_id == 'necklace' ? 'Necklaces' : params?.category_id == 'rings' ? 'Rings' : params?.category_id == 'bracelets' ? 'Bracelets' : params?.category_id == 'earrings' ? 'Earrings' : params?.category_id == 'collection' ? 'Collection' : null}
            </h1>
          </div>

        </div>

        {/* filter mobile */}
        <div
          className={`w-full sm:w-[80%] mx-auto px-2 sm:px-6 text-[#696969] text-[18px] sm:text-[20px] poppins lg:hidden flex justify-between`}
        >
        </div>

        {/* mobile filter pop up */}

        {/* overlay */}
        <div
          className={`fixed top-0 left-0 right-0 bottom-0 bg-[#00000071] z-[1004] transition-all ${filterToggle
            ? "h-full ease-in  duration-500"
            : "h-0 ease-out  duration-500"
            }`}
          onClick={() => handleClick()}
        ></div>

        {/* pop up */}
        <div
          className={`fixed lg:hidden flex flex-col justify-end bottom-0 overflow-scroll w-full bg-white z-[1005] transition-all duration-500 ${filterToggle ? "h-fit ease-in overflow-scroll" : "h-0 ease-out"
            }`}
        >
          <h1 className="text-center py-4 pt-5 tracking-[6px] text-[#00000088] poppins text-[20px]">
            FILTERS
          </h1>
          {sort_data?.filter.map((datas, index) => (
            <React.Fragment key={index}>
              <div
                className="flex justify-between list-none py-4 tracking-[3px] text-[#00000088] poppins mx-auto w-[90%]"
                key={index}
                onClick={() => {
                  if (filterSubCategory === datas?.name) {
                    setFilterSubCategory(null);
                  } else {
                    setFilterSubCategory(datas?.name);
                  }
                }}
              >
                <button>{datas?.name}</button>
                <li className="flex gap-4 justify-between items-center">
                  {" "}
                  <span>
                    <img
                      src={
                        filterSubCategory === datas?.name
                          ? up_arrow
                          : down_arrow
                      }
                      className="w-[19px] cursor-pointer"
                    />
                  </span>{" "}
                  <p className="w-[20px] text-left">{datas?.total_number}</p>
                </li>
              </div>
              <div
                className={`w-full overflow-hidden pl-2 bg-[#69696911] ${filterSubCategory === datas?.name
                  ? "max-h-[200px] overflow-y-scroll transition-all duration-500 ease-in py-2"
                  : "max-h-0 transition-all duration-500 ease-out"
                  } flex  flex-col justify-center items-start`}
              >
                {datas?.sub_filter.map((sub_data, sub_index) => (
                  <ul
                    className="py-2 cursor-pointer pl-4 poppins text-[15px] tracking-[2px] text-[#00000088]"
                    key={sub_index}
                  >
                    {" "}
                    <input type="checkbox" className="" name="" id="" />{" "}
                    {sub_data}
                  </ul>
                ))}
              </div>
            </React.Fragment>
          ))}
          <div className="flex justify-evenly w-full bg-[#b0b0b03f] py-[40px] ">
            <button className="border-2 p-4 bg-white tracking-[2px] px-6 text-[14px] ">
              CLEAR ALL
            </button>
            <button className="border-2 p-4 bg-[#3EDCFF] tracking-[2px] px-6 text-[14px] ">
              APPLY FILTER
            </button>
          </div>
        </div>

        <div className="w-[80%] md:w-[90%] mx-auto flex justify-between mt-10">
          <div className="relative w-full max-w-[110px] shadow-sm bg-white">
            <button onClick={() => setFilterDropdown(!filterDropDown)} className="w-full items-center p-2 active:bg-gray-200 flex justify-between">
              <h1>filter</h1>
              <img src={filterDropDown ? cross : down_arrow} className={`w-full ${filterDropDown ? 'max-w-[12px]' : 'max-w-[16px]'}`} alt="" />
            </button>
            <div className={`min-w-[270px] sm:min-w-[280px] md:min-w-[300px] absolute transition-all duration-150 ease-in-out top-[110%] left-0 shadow-md bg-white z-[100] ${filterDropDown ? 'h-[227px] p-2' : 'h-0 p-0 overflow-hidden'}`}>
              {/* <div className="relative w-full flex justify-end gap-4">
                <button onClick={handleRemoveFilters} className="top-0 right-0 bg-[#303030] text-white active:scale-95 transition-all duration-100 ease-in-out pb-0.5 pt-[1px] text-[15px] px-3 tracking-[1px]">
                  reset
                </button>
              </div> */}
              {
                filter_options?.map((data) => (
                  <div key={data?.id} className={`w-full mb-2 pb-4 p-2 ${data?.id === 0 ? 'border-b' : ''}`}>
                    <h1 className="mb-3">{data?.uiText}</h1>
                    <div className="w-full flex gap-6">
                      {
                        data?.options?.map((sub_data) => (
                          <div className="w-fit flex gap-1">
                            <label className="text-[14px]">{sub_data}</label>
                            <input type="checkbox" onChange={() => handleFilterSelect(data.filter_name, sub_data)} checked={selectedFilters[data.filter_name] === sub_data} name={sub_data} id="" />
                          </div>
                        ))
                      }
                    </div>
                  </div>
                ))
              }
              <div className="w-full flex justify-end gap-4">
                <button onClick={handleRemoveFilters} className="top-0 right-0 bg-[#303030] text-white active:scale-95 transition-all duration-100 ease-in-out pb-0.5 pt-[1px] text-[15px] px-3 tracking-[1px]">reset</button>
                <button onClick={handleApplyFilters} className="bg-[#3EDCFF] active:scale-95 transition-all duration-100 ease-in-out py-1 text-[15px] px-3 tracking-[1px]">apply</button>
              </div>
            </div>
          </div>
          {/* <div className="w-full max-w-[100px] flex justify-between p-2 border border-gray-300">
            <h1>sort</h1>
            <img src={down_arrow} className="max-w-[16px] w-full" alt="" />
          </div> */}
        </div>

        <div className="flex self-start w-[80%] md:w-[95%] gap-5 mx-auto mt-16 pt-5 h-full">
          {/* products */}
          {
            categoryApiDataLoader ? (
              <div className="flex-1 grid gap-7 lg:gap-16 justify-items-center  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
                {
                  Array(8).fill()?.map((skeleton) => (
                    <div key={skeleton} className="w-full h-[300px] md:h-[400px] lg:h-[450px] bg-gray-300 animate-pulse">

                    </div>
                  ))
                }
              </div>
            ) : (
              <div className="flex-1 grid gap-[8px] md:gap-8 justify-items-center  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 ">
                {
                  filteredData?.length > 0 ? (
                    <>
                      {filteredData?.map((data, i) => (
                        // {categoryApiData?.data?.map((data, i) => (
                        <div className="relative my-2 max-w-[350px] w-full" key={i}>
                          <div className=" absolute top-0 right-0 cursor-pointer mt-4 mr-5" onClick={() => {
                            let formdata = new FormData();
                            formdata.append("token", localStorage.getItem("token"));
                            formdata.append("product_id", data?.id);
                            axios.post(import.meta.env.VITE_APP_BASE_API_LINK + 'userWishlist', formdata).then((response) => {
                              console.log(response?.data?.wishlist_array)
                              localStorage.setItem("wishlist_array", response?.data?.wishlist_array?.toString())
                              setWishlistToggle(response?.data?.wishlist_array)
                            })
                          }}>
                            <img src={localStorage.getItem("wishlist_array")?.includes(data?.id) ? heart_filled : heart_outline} className="w-[25px]" />
                          </div>
                          <div className="shadow-md flex flex-col justify-between min-h-[300px] md:min-h-[400px] p-2">
                            <div className="w-full flex justify-center items-center">
                              <NavLink className={`w-fit bg-gray-300`} to={'/product-details' + '/' + data?.id}>
                                <img src={import.meta.env.VITE_APP_BASE_API_LINK + data?.image} className="w-[270px] md:w-[350px] h-[270px] md:h-[350px] object-cover" alt="" />
                              </NavLink>
                            </div>
                            <div className="w-full">
                              <p className="pl-2 pt-3 font-[300] poppins text-[0.9rem] md:text-[19px] tracking-[1.4px]">
                                {data?.name}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </>
                  ) : (
                    <>
                      {/* <div className='w-full hidden md:block'>
                    <SkeletonTheme baseColor="#f0f0f0" highlightColor="#d6d6d6">
                      <p>
                        <Skeleton width='100%' height='35vh' />
                      </p>
                    </SkeletonTheme>
                  </div> */}
                      {

                        <div className="w-full h-[60vh] flex justify-center items-center ">
                          <h1>No Products</h1>
                        </div>

                      }
                    </>
                  )
                }
              </div>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
