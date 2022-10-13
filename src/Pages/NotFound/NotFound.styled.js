import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Title = styled.h2`
  text-align: center;
  padding-top: 100px;
  font-size: 40px;
  margin-bottom: 20px;
`;

export const LinkToHome = styled(Link)`
  color: red;
  text-align: center;
  display: block;
  font-size: 20px;
  font-weight: 600;

  :hover,
  :focus {
    text-decoration: underline;
  }
`;
