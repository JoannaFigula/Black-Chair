import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const NavigationWrapper = styled.nav`
  position: absolute;
  top: 20px;
  left: 30px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-family: 'Montserrat';

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const Logo = styled.span`
  font-weight: 700;
  font-size: 20px;
  margin-right: 10px;
  span {
    color:#1ABC9C;
  }
`;

const NavigationList = styled.ul`
  list-style: none;
  display: flex;
`;

const NavigationListItem = styled.li`
  font-weight: 600;
  font-size: 15px;
  margin-left: 32px;
`;



const Navigation = () => (
  <NavigationWrapper>
    <Logo><Link to="/">SIT <span>ON</span> CHAIR</Link></Logo>
    <NavigationList>
      <NavigationListItem>
        <Link to="/articles">articles</Link>
      </NavigationListItem>
      <NavigationListItem>
        <Link to="/about">about</Link>
      </NavigationListItem>
      <NavigationListItem>
        <Link to="/gallery">gallery</Link>
      </NavigationListItem>
      <NavigationListItem>
        <Link to="/contact">contact</Link>
      </NavigationListItem>
    </NavigationList>
  </NavigationWrapper>
);

export default Navigation;
