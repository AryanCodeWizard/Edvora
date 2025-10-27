import { Outlet } from 'react-router-dom'
import React from 'react'
import Sidebar from '../components/core/Dashboard/Sidebar'
import { useSelector } from 'react-redux'

const Dashboard = () => {
  const { loading: authLoading } = useSelector((state) => state.auth)
  const { loading: profileLoading } = useSelector((state) => state.profile)

  if (authLoading || profileLoading) {
    return (
      <div className="min-h-[calc(100vh-3.5rem)] flex items-center justify-center bg-richblack-900">
        <div className="text-center space-y-6">
          {/* Animated Spinner */}
          <div className="relative">
            <div className="w-16 h-16 border-4 border-richblack-600 border-t-yellow-50 rounded-full animate-spin mx-auto"></div>
            <div className="w-16 h-16 border-4 border-transparent border-t-yellow-400 rounded-full animate-spin mx-auto absolute top-0 left-1/2 transform -translate-x-1/2"></div>
          </div>
          
          {/* Loading Text */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-richblack-100">
              Loading Dashboard
            </h3>
            <p className="text-richblack-400 text-sm">
              Preparing your workspace...
            </p>
          </div>

          {/* Progress Dots */}
          <div className="flex justify-center space-x-2">
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="relative flex min-h-[calc(100vh-3.5rem)] bg-richblack-900">
      {/* Sidebar with subtle shadow */}
      <div className="relative z-10">
        <Sidebar/>
      </div>
      
      {/* Main Content Area */}
      <div className="flex-1 h-[calc(100vh-3.5rem)] overflow-auto">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-richblack-800 via-richblack-900 to-richblack-800 opacity-50"></div>
        
        {/* Content Container */}
        <div className="relative z-1 mx-auto w-11/12 py-8 max-w-[1200px]">
          {/* Subtle top border and shadow */}
          <div className="rounded-2xl border border-richblack-700/50 bg-richblack-800/30 backdrop-blur-sm shadow-2xl shadow-richblack-900/50">
            <div className="p-8">
              <Outlet/>
            </div>
          </div>
          
          {/* Footer Note */}
          <div className="text-center mt-8">
            <p className="text-richblack-500 text-sm">
              Secure Dashboard • {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="fixed top-0 right-0 w-72 h-72 bg-yellow-400/5 rounded-full blur-3xl -translate-y-36 translate-x-36"></div>
      <div className="fixed bottom-0 left-0 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl translate-y-48 -translate-x-48"></div>
    </div>
  )
}

export default Dashboard


