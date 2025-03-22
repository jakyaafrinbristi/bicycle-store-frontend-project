import { ModeToggle } from "@/components/mode-toggle";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import Logo from "@/assets/Logo";
import { useAppDispatch,useAppSelector } from "@/redux/hooks";
import { logout } from "@/redux/features/auth/authSlice";
import { UserCircle } from "lucide-react"; 

export default function Navbar() {
    const dispatch = useAppDispatch()
    const {user}=useAppSelector((state)=>state.auth);
    const handleLogout =()=>{

        dispatch(logout())
    }
    return (
        <nav className="max-w-7xl mt-5 mx-auto h-16 flex items-center justify-between px-5 bg-white shadow-lg dark:bg-gray-900 dark:shadow-xl">
          {/* Logo */}
          <div className="flex items-center text-lg font-bold space-x-2">
            <Logo className="h-8 w-8" />
            <span>Bicycle</span>Store
          </div>
    
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {[
              { name: "Home", path: "/" },
              { name: "About Us", path: "/about" },
              { name: "All Bicycle", path: "/all-bicycle" },
              { name: "Contact Us", path: "/contact" },
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-gray-700 dark:text-gray-300 hover:underline hover:text-teal-500"
              >
                {item.name}
              </Link>
            ))}
          </div>
    
          {/* Right Section: Dark Mode & Auth Buttons */}
          <div className="flex items-center space-x-4">
            <ModeToggle />
    
            {user ? (
              // If user is logged in, show user icon with dropdown
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="focus:outline-none">
                    <UserCircle className="h-8 w-8 text-teal-500" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                  <Link to={user.role === 'admin' ? '/admin/dashboard' : '/customer/dashboard'}>
  Dashboard
</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              // If user is not logged in, show Login and Register buttons
              <>
                <Link to="/login">
                  <Button className="bg-teal-500 text-white hover:bg-teal-600">
                    Login
                  </Button>
                </Link>
                <Link to="/register">
                  <Button className="bg-teal-500 text-white hover:bg-teal-600">
                    Register
                  </Button>
                </Link>
              </>
            )}
          </div>
        </nav>
      );
}
