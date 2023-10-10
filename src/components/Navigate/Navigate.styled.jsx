import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const MainNavigation = styled.nav`
  height: 50px;

  background-color: #3470ff;
  display: flex;
  align-items: center;
  gap: 20px;
  padding-left: 62px;

  @media screen and (min-width: 768px) {
    padding-left: 32px;
  }
  @media screen and (min-width: 1440px) {
    padding-left: 96px;
  }
`;

export const PageLink = styled(NavLink)`
  color: #ffffff;
  text-decoration: none;
`;
