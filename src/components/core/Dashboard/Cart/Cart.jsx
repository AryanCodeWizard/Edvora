import React from 'react'
import RenderCartCourses from './RenderCartCourses'
import RenderTotalAmount from './RenderTotalAmount'
import { useSelector } from 'react-redux'

const Cart = () => {
  const { total, totalItems } = useSelector((state) => state.cart)

  return (
    <div>
      <h1 className="text-2xl font-bold text-richblack-5 mb-2">Your Cart</h1>
      <p className="text-richblack-200 mb-4">{totalItems} Courses in the cart</p>

      {total > 0 ? (
        <div className="space-y-6">
          <RenderCartCourses />
          <RenderTotalAmount />
        </div>
      ) : (
        <div className="text-richblack-200">
          <p>No courses in the cart</p>
        </div>
      )}
    </div>
  )
}

export default Cart
