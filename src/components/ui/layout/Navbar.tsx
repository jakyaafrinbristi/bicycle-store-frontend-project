import { useState } from "react";
import { ModeToggle } from "@/components/mode-toggle";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import Logo from "@/assets/Logo";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { logout } from "@/redux/features/auth/authSlice";
import { UserCircle, Menu } from "lucide-react";

export default function Navbar() {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);  
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "All Bicycle", path: "/all-bicycle" },
    // { name: "Order", path: "/order" },
    { name: "Reviews", path: "/testimonial" },
    { name: "Blogs", path: "/blog" },
    { name: "Contact", path: "/contact-us" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-teal-50 dark:bg-teal-900 shadow-md max-w-7xl mx-auto px-5">
  <div className="h-16 flex items-center justify-between">
    <div className="flex items-center text-lg font-bold space-x-2">
      <Logo className="h-8 w-8 text-teal-600 dark:text-teal-300" />
      <span className="text-gray-700 dark:text-gray-200">BicycleStore</span>
    </div>

    <div className="md:hidden">
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="text-gray-700 dark:text-gray-200 focus:outline-none"
      >
        <Menu className="h-6 w-6" />
      </button>
    </div>

    <div className="hidden md:flex space-x-6 items-center">
      {navItems.map((item) =>
        item.name === "All Bicycle" ? (
          // ✅ Mega Menu
          <DropdownMenu key={item.name}>
            <DropdownMenuTrigger className="text-gray-700 dark:text-gray-300 hover:text-teal-600">
              {item.name}
            </DropdownMenuTrigger>
            <DropdownMenuContent className="grid grid-cols-1 gap-4 p-4 w-40">
              <DropdownMenuItem><Link to="/all-bicycle?type=mountain">Mountain Bike</Link></DropdownMenuItem>
              <DropdownMenuItem><Link to="/all-bicycle?type=road">Road Bike</Link></DropdownMenuItem>
              <DropdownMenuItem><Link to="/all-bicycle?type=hybrid">Hybrid Bike</Link></DropdownMenuItem>
              <DropdownMenuItem><Link to="/all-bicycle?type=electric">Electric Bike</Link></DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Link
            key={item.path}
            to={item.path}
            className="text-gray-700 dark:text-gray-300 hover:underline hover:text-teal-500"
          >
            {item.name}
          </Link>
        )
      )}
    </div>

    <div className="hidden md:flex items-center space-x-4">
      <ModeToggle />
      {user ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="focus:outline-none relative">
              <div className="relative group">
                <UserCircle className="h-8 w-8 text-teal-500" />
                {user.image && (
                  <img
                    src={user.image}
                    alt={user.name}
                    className="absolute bottom-0 right-0 h-8 w-8 rounded-full border-2 border-white"
                  />
                )}
                <div className="absolute top-10 left-0 bg-black text-white text-xs p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  {user.name}
                </div>
              </div>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <Link
                to={
                  user.role === "admin"
                    ? "/admin/dashboard"
                    : "/customer/dashboard"
                }
              >
                Dashboard
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
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
  </div>

  {/* Mobile Menu */}
  {menuOpen && (
    <div className="flex flex-col space-y-2 mt-4 md:hidden">
      {navItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className="text-gray-700 dark:text-gray-300 px-2 py-1 hover:bg-gray-200 dark:hover:bg-gray-800 rounded"
          onClick={() => setMenuOpen(false)}
        >
          {item.name}
        </Link>
      ))}
      <div className="flex items-center justify-between px-2">
        <ModeToggle />
        {user ? (
          <button
            onClick={handleLogout}
            className="text-red-500 font-semibold"
          >
            Logout
          </button>
        ) : (
          <>
            <Link to="/login">
              <Button className="bg-teal-500 text-white hover:bg-teal-600 w-full mt-2">
                Login
              </Button>
            </Link>
            <Link to="/register">
              <Button className="bg-teal-500 text-white hover:bg-teal-600 w-full mt-2">
                Register
              </Button>
            </Link>
          </>
        )}
      </div>
    </div>
  )}
</nav>

  
  );
}
{/* <nav className="sticky top-0 z-50 bg-white shadow-lg mt-2 dark:bg-gray-900 dark:shadow-xl max-w-7xl mx-auto px-5">
<div className="h-16 flex items-center justify-between">
  <div className="flex items-center text-lg font-bold space-x-2">
    <Logo className="h-8 w-8" />
    <span>Bicycle</span>Store
  </div>

  <div className="md:hidden">
    <button
      onClick={() => setMenuOpen(!menuOpen)}
      className="text-gray-700 dark:text-gray-200 focus:outline-none"
    >
      <Menu className="h-6 w-6" />
    </button>
  </div>

  <div className="hidden md:flex space-x-6">
    {navItems.map((item) => (
      <Link
        key={item.path}
        to={item.path}
        className="text-gray-700 dark:text-gray-300 hover:underline hover:text-teal-500"
      >
        {item.name}
      </Link>
    ))}
  </div>

  <div className="hidden md:flex items-center space-x-4">
    <ModeToggle />
    {user ? (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="focus:outline-none relative">
           
            <div className="relative group">
              <UserCircle className="h-8 w-8 text-teal-500" />
              {user.image && (
                <img
                  src={user.image}
                  alt={user.name}
                  className="absolute bottom-0 right-0 h-8 w-8 rounded-full border-2 border-white"
                />
              )}
              <div className="absolute top-10 left-0 bg-black text-white text-xs p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                {user.name} 
              </div>
            </div>
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <Link
              to={
                user.role === "admin"
                  ? "/admin/dashboard"
                  : "/customer/dashboard"
              }
            >
              Dashboard
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={handleLogout}>
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ) : (
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
</div>

{menuOpen && (
  <div className="flex flex-col space-y-2 mt-4 md:hidden">
    {navItems.map((item) => (
      <Link
        key={item.path}
        to={item.path}
        className="text-gray-700 dark:text-gray-300 px-2 py-1 hover:bg-gray-200 dark:hover:bg-gray-800 rounded"
        onClick={() => setMenuOpen(false)}
      >
        {item.name}
      </Link>
    ))}
    <div className="flex items-center justify-between px-2">
      <ModeToggle />
      {user ? (
        <button
          onClick={handleLogout}
          className="text-red-500 font-semibold"
        >
          Logout
        </button>
      ) : (
        <>
          <Link to="/login">
            <Button className="bg-teal-500 text-white hover:bg-teal-600 w-full mt-2">
              Login
            </Button>
          </Link>
          <Link to="/register">
            <Button className="bg-teal-500 text-white hover:bg-teal-600 w-full mt-2">
              Register
            </Button>
          </Link>
        </>
      )}
    </div>
  </div>
)}
</nav> */}