// Import Swiper styles
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"
import "../../App.css"

// Import required modules
import { Autoplay, FreeMode, Pagination } from "swiper"
import React, { useEffect, useState } from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Icons
import { FaStar } from "react-icons/fa"
import ReactStars from "react-rating-stars-component"
// Get apiFunction and the endpoint
import { apiConnector } from "../../services/apiConnector"
import { ratingsEndpoints } from "../../services/apis"

function ReviewSlider() {
  const [reviews, setReviews] = useState([])
  const truncateWords = 15

  useEffect(() => {
    ;(async () => {
      try {
        const { data } = await apiConnector("GET", ratingsEndpoints.REVIEWS_DETAILS_API)
        if (data?.success) {
          setReviews(data?.data)
        }
      } catch (error) {
        console.error("Error fetching reviews:", error)
      }
    })()
  }, [])

  return (
    <div className="text-white w-full">
      <div className="my-[50px] max-w-maxContentTab lg:max-w-maxContent">
        {reviews.length > 0 ? (
          <Swiper
            loop={true}
            freeMode={true}
            spaceBetween={25}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[FreeMode, Pagination, Autoplay]}
            className="w-full"
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
          >
            {reviews.map((review, i) => (
              <SwiperSlide key={i}>
                <div className="flex flex-col gap-3 bg-richblack-800 p-4 text-[14px] text-richblack-25 rounded-lg h-full">
                  <div className="flex items-center gap-4">
                    <img
                      src={
                        review?.user?.image
                          ? review?.user?.image
                          : `https://api.dicebear.com/5.x/initials/svg?seed=${review?.user?.firstName} ${review?.user?.lastName}`
                      }
                      alt="user"
                      className="h-10 w-10 rounded-full object-cover"
                    />
                    <div className="flex flex-col">
                      <h1 className="font-semibold text-richblack-5">
                        {`${review?.user?.firstName || ""} ${review?.user?.lastName || ""}`}
                      </h1>
                      <h2 className="text-[12px] font-medium text-richblack-500">
                        {review?.course?.courseName || "Unknown Course"}
                      </h2>
                    </div>
                  </div>

                  <p className="font-medium text-richblack-25 leading-5">
                    {review?.review
                      ? review.review.split(" ").length > truncateWords
                        ? `${review.review.split(" ").slice(0, truncateWords).join(" ")} ...`
                        : review.review
                      : "No review provided."}
                  </p>

                  <div className="flex items-center gap-2 mt-auto">
                    <h3 className="font-semibold text-yellow-100">
                      {review?.rating ? review.rating.toFixed(1) : "0.0"}
                    </h3>
                    <ReactStars
                      count={5}
                      value={review?.rating || 0}
                      size={18}
                      edit={false}
                      activeColor="#ffd700"
                      emptyIcon={<FaStar />}
                      fullIcon={<FaStar />}
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <p className="text-center text-richblack-400">No reviews available.</p>
        )}
      </div>
    </div>
  )
}

export default ReviewSlider
