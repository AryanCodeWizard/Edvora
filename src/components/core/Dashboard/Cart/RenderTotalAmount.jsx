import { useDispatch, useSelector } from 'react-redux'

import IconBtn from '../../../common/IconBtn'
import React from 'react'

const RenderTotalAmount = () => {
  const { total, cart } = useSelector((state) => state.cart)
  const dispatch = useDispatch()

  const handleBuyCourse = () => {
    const courseIds = cart.map((course) => course._id)
    console.log("Courses to buy:", courseIds)
    // TODO: Implement the buy course functionality that redirect to payment gateway
  }

  return (
    <div className="rounded-2xl border border-richblack-700 bg-richblack-800/50 p-6 space-y-6 sticky top-6">
      <h3 className="text-lg font-semibold text-richblack-5 border-b border-richblack-600 pb-4">
        Order Summary
      </h3>

      {/* Total Amount */}
      <div className="flex justify-between items-center">
        <span className="text-richblack-200 font-medium">Total:</span>
        <span className="text-2xl font-bold text-yellow-50">Rs {total}</span>
      </div>

      {/* Additional Info */}
      <div className="text-xs text-richblack-400 space-y-1">
        <p>• 30-day money-back guarantee</p>
        <p>• Full lifetime access</p>
        <p>• Certificate of completion</p>
      </div>

      {/* Buy Button */}
      <IconBtn
        text="Buy Now"
        onClick={handleBuyCourse}
        customClasses="w-full justify-center py-3 text-lg font-semibold bg-yellow-50 text-richblack-900 hover:bg-yellow-200 transition-all duration-300 hover:scale-105"
      />

      {/* Security Note */}
      <div className="text-center">
        <p className="text-xs text-richblack-400 flex items-center justify-center gap-1">
          🔒 Secure checkout
        </p>
      </div>
    </div>
  )
}

export default RenderTotalAmount