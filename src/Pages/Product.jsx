import React, { useContext } from "react";
import { ShopContext } from "../Components/Context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcurms from "../Components/Breadcrums/Breadcrums";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import DescriptionBox from "../Components/DescriptionBox/DescriptionBox";
import RelatedProducts from "../Components/RelatedProducts/RelatedProducts";
import Cart from "./Cart";

const Product = () =>{
    const {all_product}= useContext(ShopContext);
    const {productId} = useParams();
    const product = all_product.find((e) => e.id === Number(productId));
    return (
        <div>
            <Breadcurms product={product}/>
            <ProductDisplay product={product}/>
            <DescriptionBox product={product}/>
            <RelatedProducts product={product}/>
        </div>
    )
};

export default Product;