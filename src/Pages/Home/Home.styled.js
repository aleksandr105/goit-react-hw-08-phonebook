import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import IMG from '../../Photo/pile-of-mobile-phones-CBY5AF.jpg';

export const HomeSection = styled.section`
  background-image: url(${IMG});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 91vh;
`;

export const MainTitle = styled.h1`
  text-transform: uppercase;
  padding-top: 90px;
  display: flex;
  justify-content: center;
`;

export const TextWelcome = styled.h2`
  margin-top: 100px;
  text-align: center;
  color: #676767;
  background-color: silver;
  border-radius: 10px;
  padding: 8px;
  font-size: 25px;
  font-weight: 800;
`;

export const TextLink = styled(Link)`
  color: tomato;
`;

export const Name = styled.span`
  color: tomato;
  text-transform: uppercase;
`;

export const MainTitleCottainer = styled.span`
  color: blue;
  background-color: silver;
  font-weight: 900;
  text-align: center;
  padding: 10px;
  border-radius: 10px;
  max-width: 600px;
  display: block;
`;
