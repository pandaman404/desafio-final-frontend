import { FaBoxes } from "react-icons/fa";
import { IoLogOutOutline } from "react-icons/io5";
import { RiAddBoxFill } from "react-icons/ri";
import { ForkWhiteIcon } from "../icons";
import { useNavigate } from "react-router-dom";
import { LogOut, MenuElement, SideMenuContainer } from "./SideMenu.styles";

import useAdminContext from "../../hooks/useAdminContext";
import useAuthContext from "../../hooks/useAuthContext";

const menuItems = [
  {
    name: "Agregar producto",
    path: "/backoffice/agregar-producto",
    icon: <RiAddBoxFill />,
  },
  {
    name: "Inventario",
    path: "/backoffice/inventario",
    icon: <FaBoxes />,
  },
];

const SideMenu = () => {
  const { logOutUser, user } = useAuthContext();
  const navigate = useNavigate();
  console.log(user);
  const handleLogout = () => {
    logOutUser();
    navigate("/backoffice/login");
  };
  return (
    <SideMenuContainer>
      <ForkWhiteIcon />
      {menuItems.map((item) => {
        return (
          <MenuElement key={item.name} to={item.path}>
            {item.icon}
            <p>{item.name}</p>
          </MenuElement>
        );
      })}
      <LogOut onClick={handleLogout}>
        <IoLogOutOutline />
        <p>Cerrar sesión</p>
      </LogOut>
    </SideMenuContainer>
  );
};

export default SideMenu;
