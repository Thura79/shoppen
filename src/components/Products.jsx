import React from "react";
import { StateCustom } from "../context/StateContext";
import SingleProduct from "./SingleProduct";
import Loading from "./Loading";

const Products = () => {
  const {
    state: { products },
  } = StateCustom();

  return (
    <div className=" flex flex-wrap gap-2 md:gap-5 items-center justify-around mt-5 md:mt-10">
      {products.length > 0 ? (
        products?.map((pd) => <SingleProduct key={pd?.id} {...pd} />)
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Products;
