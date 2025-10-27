import { useDispatch, useSelector } from 'react-redux'

import IconBtn from '../../../common/IconBtn'
import React from 'react'

const RenderTotalAmount = () => {
  const {total,cart} = useSelector((state) => state.cart)
  
  const dispatch = useDispatch();

  const handleBuyCourse = () => {
    // Logic for buying the course
    console.log("Buy course functionality to be implemented");
    const courseIds = cart.map((course) => course._id);
    console.log("Courses to buy:", courseIds);
//TODO: Implement the buy course functionality that redirect to paynment gateway

  }
  return (
    <div>
      <div>
        <p>Total: </p>
        <p>Rs {total}</p>
        <IconBtn
        text="Buy Now"
        onClick={handleBuyCourse}
        customClasses={"w-full text-center justify-center"}
        />
      </div>
    </div>
  )
}

export default RenderTotalAmount;