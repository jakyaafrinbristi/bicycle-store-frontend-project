import { ModeToggle } from "@/components/mode-toggle";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import Logo from "@/assets/Logo";

export default function Navbar() {
    return (
        <nav className="max-w-7xl mt-5 mx-auto h-16 flex items-center justify-between px-5 bg-white shadow-lg dark:bg-gray-900 dark:shadow-xl">
            {/* Logo */}
            <div className="flex items-center text-lg font-bold space-x-2">
                <Logo className="h-8 w-8" />
                <span>Bicycle</span>Store
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6">
                {[{ name: "Home", path: "/" },
                 { name: "About Us", path: "about" }, 
                 { name: "All Bicycle", path: "all-bicycle" }].map((item) => (
                    <Link key={item.path} to={item.path} className="text-gray-700 dark:text-gray-300 hover:underline hover:text-teal-500">
                        {item.name}
                    </Link>
                ))}
            </div>
            
            {/* Dark Mode Toggle & Login/Register Buttons */}
            <div className="flex items-center space-x-4">
                <ModeToggle />
                
                {/* Login Button */}
                <Link to="/login">
                    <Button variant="default" className="px-4 py-2 rounded-md bg-teal-500 text-white hover:bg-teal-600">
                        Login
                    </Button>
                </Link>
                
                {/* Register Button */}
                <Link to="/register">
                    <Button variant="default" className="px-4 py-2 rounded-md bg-teal-500 text-white hover:bg-teal-600">
                        Register
                    </Button>
                </Link>
                
                {/* Mobile Menu */}
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="md:hidden">☰</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        {[{ name: "Home", path: "/" },
                         { name: "About Us", path: "/about" }, 
                         { name: "All Bicycle", path: "all-bicycle" }].map((item) => (
                            <DropdownMenuItem key={item.path}>
                                <Link to={item.path}>{item.name}</Link>
                            </DropdownMenuItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </nav>
    );
}
