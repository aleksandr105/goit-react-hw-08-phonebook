import styled from '@emotion/styled';

export const ButtonLogout = styled.button`
  color: black;
  font-weight: 600;
  padding: 10px 40px;
  border-radius: 5px;
  background-color: #50ceff;
  font-size: 15px;
  border: none;
  @media screen and (min-width: 630px) {
    margin-left: 15px;
  }
`;

export const UserMenuContainer = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 630px) {
    flex-direction: column-reverse;
  }
`;

export const UserMenuText = styled.p`
  color: black;
  font-weight: 600;
  @media screen and (max-width: 840px) and (min-width: 630px) {
    width: 160px;
  }
  @media screen and (max-width: 630px) {
    margin-top: 10px;
  }
`;

export const UserMenuName = styled.span`
  color: red;
  font-weight: 600;
`;
