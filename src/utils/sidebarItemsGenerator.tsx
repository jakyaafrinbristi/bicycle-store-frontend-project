import { MenuProps } from "antd";
import { Link } from "react-router";
import { TUserPath } from "@/Types/sidebar.type";

type MenuItem = Required<MenuProps>["items"][number];

export const sidebarItemsGenerator = (items: TUserPath[], role: string): MenuItem[] => {
  return items.reduce((acc: MenuItem[], item) => {
    if (item.path && item.name) {
      acc.push({
        key: item.name,
        label: <Link to={`/${role}/${item.path}`}>{item.name}</Link>,

      });
    }

    if (item.children) {
      const children = item.children
        .filter(child => child.name)
        .map(child => ({
          key: child.name!,
          label: <Link to={`/${role}/${child.path}`}>{child.name}</Link>,
         
        }));

      if (children.length > 0) {
        acc.push({
          key: item.name || "default-key",
          label: item.name,
  
          children,
        });
      }
    }

    return acc;
  }, []);
};