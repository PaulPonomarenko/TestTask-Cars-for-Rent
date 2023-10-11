import styled from '@emotion/styled';

export const CarItem = styled.li`
  width: 276px;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  //   display: flex;
  //   flex-direction: column;
  //   position: relative;
  //   overflow: hidden;
`;

export const MainTitleContainer = styled.div`
  margin-top: 14px;
  margin-bottom: 8px;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  display: flex;
  justify-content: space-between;
`;

export const MainInfo = styled.div``;

export const MainCarsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 50px 29px;
  justify-content: center;
`;

export const BtnLearnMore = styled.button`
  width: 100%;
  height: max-content;
  padding: 12px;
  border: none;
  border-radius: 12px;
  background: #3470ff;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
`;

export const DescriptionWrapper = styled.div`
  margin-top: auto;
  margin-bottom: 28px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  color: rgba(18, 20, 23, 0.5);
  overflow: hidden;
  & p {
    width: 100%;
    display: flex;
    gap: 6px;

    & span {
      white-space: nowrap;
    }
    & > span:not(:last-child):after {
      content: '|';

      margin-left: 6px;
      color: rgba(18, 20, 23, 0.1);
    }

    & span:last-child {
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`;
