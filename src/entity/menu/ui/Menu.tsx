import { Link } from "react-router-dom";

import { MenuItem } from "../model/types";

interface MenuProps {
  items: MenuItem[];
}

export const Menu = ({ items }: MenuProps) => {
  return (
    <ul className='flex'>
      {items.map((item) => (
        <li key={item.id} className="uppercase font-medium mr-4 hover:text-primary last:mr-0">
          <Link to={item.link}>{item.text}</Link>
        </li>
      ))}
    </ul>
  );
};
