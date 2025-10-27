import { GiNinjaStar } from 'react-icons/gi'
import React from 'react'
import ReactStars from 'react-rating-stars-component'
import {RiDeleteBin6Line} from 'react-icons/ri'
import { removeFromCart } from '../../../../slices/cartSlice'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

const RenderCartCourses = () => {
  const { cart } = useSelector((state) => state.cart)
  const dispatch = useDispatch();

  return (
    <div>
      {
        cart.map((course, index) => {
          <div>
            <div>
              <img src={course.thumbnail}></img>
              <div>
                <h1>{course?.courseName}</h1>
                <p>{course?.category?.name}</p>
                <div>
                  <span>4.8</span>
                  <ReactStars
                  count={5}
                  size={24}
                  value={4.8}
                  edit={false}
                  activeColor="#ffd700"
                  emptyIcon={<GiNinjaStar/>}
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<GiNinjaStar/>}
                  />         
                  <span>{course?.ratingAndReviews.length} Ratings</span>        
                </div>
              </div>

            </div>
            <div>
              <button onClick={() => dispatch(removeFromCart(course._id))}>
                <RiDeleteBin6Line/>
                <span>Remove</span>
              </button>
              <p>Rs {course?.price}</p>
            </div>
          </div>
        })
      }
    </div>
  )
}

export default RenderCartCourses