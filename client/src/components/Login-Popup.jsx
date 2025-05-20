"use client"

import { useState, useEffect } from "react"
import { FileText, LogIn, X } from "lucide-react"


export default function LoginPopup({ isOpen, onClose, onLogin, onContinueAsGuest }) {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/80 backdrop-blur-sm">
      <div className="relative w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
        <button onClick={onClose} className="absolute right-4 top-4 text-gray-500 hover:text-gray-700">
          <X className="h-5 w-5" />
        </button>

        <div className="mb-6 flex items-center justify-center">
          <div className="mr-2 flex h-10 w-10 items-center justify-center rounded-full bg-gray-200">
            <FileText className="h-5 w-5 text-orange-500" />
          </div>
          <h2 className="text-xl font-semibold text-slate-800">Go Tiny</h2>
        </div>

        <h3 className="mb-4 text-center text-lg font-medium text-slate-800">Save Your Shortened URLs</h3>

        <p className="mb-6 text-center text-sm text-slate-600">
          Login to save your shortened URLs for future access or continue as a guest.
          <span className="block font-medium text-orange-500 mt-1">
            Note: URLs created as a guest will not be saved.
          </span>
        </p>


        <div className="flex flex-col space-y-3">
          <button
            onClick={onLogin}
            className="flex w-full items-center justify-center rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            <LogIn className="mr-2 h-4 w-4" />
            Login to Save URLs
          </button>

          <button
            onClick={onContinueAsGuest}
            className="flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Continue as Guest
          </button>
        </div>
      </div>
    </div>
  )
}
