import styled from '@emotion/styled';

export const MainContainer = styled.div`
  height: 100%;

  min-width: 320px;
  max-width: 375px;

  margin: 0 auto;
  padding: 20px 32px;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding: 40px 64px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    padding: 60px 128px;
  }
`;
