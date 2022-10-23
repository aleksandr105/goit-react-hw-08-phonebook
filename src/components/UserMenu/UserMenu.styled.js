import styled from '@emotion/styled';

export const ButtonLogout = styled.button`
  color: black;
  font-weight: 600;
  padding: 10px 40px;
  border-radius: 5px;
  background-color: #50ceff;
  font-size: 15px;
  border: none;
  @media screen and (min-width: 681px) {
    margin-left: 15px;
  }
`;

export const UserMenuContainer = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 680px) {
    flex-direction: column-reverse;
  }
`;

export const UserMenuText = styled.p`
  color: black;
  font-weight: 600;
  @media screen and (max-width: 920px) and (min-width: 681px) {
    width: 240px;
  }
  @media screen and (max-width: 680px) {
    margin-top: 10px;
  }
`;

export const UserMenuName = styled.span`
  color: red;
  font-weight: 600;
`;
