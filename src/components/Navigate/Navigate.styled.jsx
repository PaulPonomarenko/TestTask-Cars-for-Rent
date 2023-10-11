import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const MainNavigation = styled.nav`
  height: 50px;
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const PageLink = styled(NavLink)`
  color: #ffffff;
  text-decoration: none;
`;

export const NavigationWrapper = styled.div`
  max-width: 375px;
  margin: 0 auto;
  padding-left: 62px;
  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding-left: 32px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    padding-left: 96px;
  }
`;
