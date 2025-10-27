import IconBtn from "../../common/IconBtn"
import { RiEditBoxLine } from "react-icons/ri"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"

export default function MyProfile() {
  const { user } = useSelector((state) => state.profile)
  const navigate = useNavigate()

  return (
    <div className="min-h-screen w-full px-6 py-10 bg-gradient-to-b from-richblack-900 to-richblack-800">
      {/* Header */}
      <h1 className="mb-10 text-4xl font-semibold text-richblack-5 tracking-wide">
        My <span className="text-yellow-50">Profile</span>
      </h1>

      {/* Profile Card */}
      <div className="flex items-center justify-between rounded-2xl border border-richblack-700 bg-richblack-800/60 p-8 shadow-lg backdrop-blur-md transition-all duration-300 hover:shadow-yellow-100/10">
        <div className="flex items-center gap-x-6">
          <img
            src={user?.image}
            alt={`profile-${user?.firstName}`}
            className="h-[90px] w-[90px] rounded-full border-2 border-yellow-50 object-cover shadow-md"
          />
          <div>
            <p className="text-2xl font-semibold text-richblack-5">
              {user?.firstName + " " + user?.lastName}
            </p>
            <p className="text-sm text-richblack-300">{user?.email}</p>
          </div>
        </div>
        <IconBtn
          text="Edit"
          onclick={() => navigate("/dashboard/settings")}
        >
          <RiEditBoxLine size={22} />
        </IconBtn>
      </div>

      {/* About Section */}
      <div className="my-10 rounded-2xl border border-richblack-700 bg-richblack-800/60 p-8 shadow-md backdrop-blur-sm transition duration-300 hover:shadow-yellow-100/10">
        <div className="flex w-full items-center justify-between mb-6">
          <p className="text-xl font-semibold text-richblack-5">About</p>
          <IconBtn
            text="Edit"
            onclick={() => navigate("/dashboard/settings")}
          >
            <RiEditBoxLine size={20} />
          </IconBtn>
        </div>
        <p
          className={`text-base ${
            user?.additionalDetails?.about
              ? "text-richblack-5"
              : "text-richblack-400 italic"
          }`}
        >
          {user?.additionalDetails?.about ?? "Write something about yourself..."}
        </p>
      </div>

      {/* Personal Details Section */}
      <div className="rounded-2xl border border-richblack-700 bg-richblack-800/60 p-8 shadow-md backdrop-blur-sm transition duration-300 hover:shadow-yellow-100/10">
        <div className="flex w-full items-center justify-between mb-6">
          <p className="text-xl font-semibold text-richblack-5">
            Personal Details
          </p>
          <IconBtn
            text="Edit"
            onclick={() => navigate("/dashboard/settings")}
          >
            <RiEditBoxLine size={20} />
          </IconBtn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Side */}
          <div className="space-y-5">
            <div>
              <p className="text-sm text-richblack-400">First Name</p>
              <p className="text-base font-medium text-richblack-5">
                {user?.firstName}
              </p>
            </div>
            <div>
              <p className="text-sm text-richblack-400">Email</p>
              <p className="text-base font-medium text-richblack-5">
                {user?.email}
              </p>
            </div>
            <div>
              <p className="text-sm text-richblack-400">Gender</p>
              <p className="text-base font-medium text-richblack-5">
                {user?.additionalDetails?.gender ?? "Add Gender"}
              </p>
            </div>
          </div>

          {/* Right Side */}
          <div className="space-y-5">
            <div>
              <p className="text-sm text-richblack-400">Last Name</p>
              <p className="text-base font-medium text-richblack-5">
                {user?.lastName}
              </p>
            </div>
            <div>
              <p className="text-sm text-richblack-400">Phone Number</p>
              <p className="text-base font-medium text-richblack-5">
                {user?.additionalDetails?.contactNumber ?? "Add Contact Number"}
              </p>
            </div>
            <div>
              <p className="text-sm text-richblack-400">Date of Birth</p>
              <p className="text-base font-medium text-richblack-5">
                {user?.additionalDetails?.dateOfBirth ?? "Add Date of Birth"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
