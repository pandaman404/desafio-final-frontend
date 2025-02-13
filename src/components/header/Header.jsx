import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { categoriesList, truncateString } from "../../utils/strings";
import { ForkIcon, LoginIcon, BagIcon } from "../icons";
import MainWrapper from "../layout/MainWrapper";
import { RiCloseLargeFill } from "react-icons/ri";

import {
  LoginContainerStyled,
  UserActionsContainerStyled,
  CartContainerStyled,
  FirstContainerStyled,
  SecondContainerStyled,
  MainWrapperContainer,
  CloseOverlay,
  CategoriesList,
  CategoriesOverlay,
} from "./Header.styles";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const handleOverlayToggle = () =>
    setIsOverlayOpen(() => (isOverlayOpen ? false : true));

  return (
    <header>
      <FirstContainerStyled>
        <MainWrapper>
          <Link to="/">
            <ForkIcon />
          </Link>

          <UserActionsContainerStyled>
            <LoginContainerStyled to="/mi-perfil">
              <LoginIcon />
              <div>
                <p>¡Hola!</p>
                <p>{truncateString("Rodrigo Valenzuela")}</p>
                <MdOutlineKeyboardArrowDown />
              </div>
            </LoginContainerStyled>
            <CartContainerStyled to="/carrito">
              <BagIcon />
              <span>{8}</span>
              <MdOutlineKeyboardArrowDown />
            </CartContainerStyled>
          </UserActionsContainerStyled>
        </MainWrapper>
      </FirstContainerStyled>
      <SecondContainerStyled>
        <MainWrapperContainer>
          <RxHamburgerMenu fontSize={30} onClick={handleOverlayToggle} />
          <p>Productos</p>
        </MainWrapperContainer>
        <CategoriesOverlay
          $isOverlayOpen={isOverlayOpen}
          onClick={handleOverlayToggle}
        >
          <CloseOverlay>
            <RiCloseLargeFill onClick={handleOverlayToggle} />
          </CloseOverlay>
          <CategoriesList onClick={(e) => e.stopPropagation()}>
            {categoriesList.map((item) => (
              <Link
                key={item.value}
                onClick={handleOverlayToggle}
                to={`/categoria/${item.value}`}
              >
                {item.label}
              </Link>
            ))}
          </CategoriesList>
        </CategoriesOverlay>
      </SecondContainerStyled>
    </header>
  );
};

export default Header;
