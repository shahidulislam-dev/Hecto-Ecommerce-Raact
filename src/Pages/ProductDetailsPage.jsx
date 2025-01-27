import React from "react";
import Banner from "../Components/ComponentCommon/Banner";
import ExtraDetails from "../Components/ProductDetails/ExtraDetails";
import RelatedProducts from "../Components/ProductDetails/RelatedProducts";
import ProductDetails from "../Components/ProductDetails/ProductDetails";

const ProductDetailsPage = () => {
  return (
    <>
      <Banner title="Product Details" name="Product Details" />
      <ProductDetails/>
      <ExtraDetails />
      <RelatedProducts />
    </>
  );
};

export default ProductDetailsPage;
