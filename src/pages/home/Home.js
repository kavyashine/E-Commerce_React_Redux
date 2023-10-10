import React from "react"

import { Order } from "../../components/hero/Order"
import { Slider } from "../../components/hero/Slider"
import { Product } from "../../components/product/Product"
import { Category } from "../../components/category/Category";


export const Home = () => {
  return (
    <>
      <Slider />
      <Order />
     <Category/>
      <Product />
    </>
  )
}