import { ModeToggle } from "@/components/mode-toggle";
import { Link } from "react-router";



import { Button } from "@/components/ui/button"; // ShadCN Button
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList, NavigationMenuLink } from "@/components/ui/navigation-menu";
// Assuming ModeToggle is correctly imported

export default function Navbar() {
    return (
        <nav className="max-w-7xl mx-auto h-16 flex items-center gap-3 px-5 bg-white shadow-lg dark:bg-gray-900 dark:shadow-xl">
          {/* Logo */}
          <div className="flex items-center text-lg font-bold">
            <span className="mr-1">Task</span>Master
          </div>
    
          {/* Desktop Navigation */}
          <NavigationMenu>
            <NavigationMenuList className="hidden md:flex space-x-4">
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/" className="px-4 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800">
                    Task
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/users" className="px-4 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800">
                    Users
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
    
          {/* Dark Mode Toggle & Login Button */}
          <div className="ml-auto flex items-center space-x-4">
            <ModeToggle />
    
            {/* Login Button */}
            <Button variant="default" className="hidden md:block px-4 py-2 rounded-md bg-teal-500 text-white hover:bg-teal-600">
              Login
            </Button>
    
            {/* Mobile Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="md:hidden">☰</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link to="/">Task</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/users">Users</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Button variant="default" className="w-full">Login</Button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </nav>
      );
}

