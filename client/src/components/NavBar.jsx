import { useSelector, useDispatch } from "react-redux"
import {  LogIn, LogOut, Link } from "lucide-react"
import { useNavigate } from "@tanstack/react-router"
import { logout } from "../store/slice/authSlice"
import { logoutUser } from "../api/user.api"

const Navbar = () => {
  const { isAuthenticated } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleAuthClick = async () => {
    if (isAuthenticated) {
      try {
        await logoutUser()
        dispatch(logout())
        navigate({ to: "/" })
      } catch (error) {
        console.error('Logout failed:', error)
      }
    } else {
      navigate({ to: "/auth" })
    }
  }

  return (
    <div className="w-full bg-slate-900 flex items-center justify-center p-4">
      <nav className="w-full z-50 max-w-6xl bg-gray-200 rounded-full px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div 
            onClick={() => navigate({ to: "/" })}
            className="flex items-center justify-center bg-white rounded-full p-1.5 cursor-pointer hover:bg-gray-100"
          >
            <Link className="h-5 w-5 text-orange-500" />
          </div>
        </div>

        <div 
          onClick={() => navigate({ to: "/" })}
          className="text-slate-800 text-lg font-medium cursor-pointer hover:text-slate-600"
        >
          Go Tiny
        </div>

        <button
          onClick={handleAuthClick}
          className="flex items-center justify-center bg-white rounded-full p-2 hover:bg-gray-100 transition-colors"
          title={isAuthenticated ? "Logout" : "Login"}
        >
          {isAuthenticated ? <LogOut className="h-4 w-4 text-slate-800" /> : <LogIn className="h-4 w-4 text-slate-800" />}
        </button>
      </nav>
    </div>
  );
};

export default Navbar;