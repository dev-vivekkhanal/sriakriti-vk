import React from "react";
import { Link } from "react-router-dom";
import heart_outline from "../../assets/icons/heart-outline.svg";
import heart_filled from "../../assets/icons/heart-filled.svg";
import useAddToWishlist from "../../hooks/addToWishlist";

const ProductCard = ({ name, category, id, image }) => {
  const { addToWishlist } = useAddToWishlist();

  return (
    <div className="w-full p-2 rounded-[4px] shadow-md relative z-[50]">
      {localStorage?.getItem("status") ? (
        <div
          className="absolute top-0 right-0 cursor-pointer mt-4 mr-5 z-[100]"
          onClick={() => addToWishlist(id)}
        >
          <img
            src={
              localStorage?.getItem("wishlist_array")?.includes(id)
                ? heart_filled
                : heart_outline
            }
            className="w-[25px]"
          />
        </div>
      ) : null}
      <Link to={`/product-details/${id}`}>
        <div className="w-full aspect-square bg-gray-200 rounded-[4px]">
          {/* <img src={import.meta.env.VITE_APP_BASE_API_LINK + image} className='w-full aspect-square h-full object-cover rounded-[4px]' /> */}
          <img
            src={image}
            className="w-full aspect-square h-full object-cover rounded-[4px]"
          />
        </div>
        <div className="w-full flex justify-between items-center mt-4 px-1">
          <h1 className="text-[15px] font-[600]">{name}</h1>
          <h1 className="text-[13px] font-[400] capitalize">{category}</h1>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
