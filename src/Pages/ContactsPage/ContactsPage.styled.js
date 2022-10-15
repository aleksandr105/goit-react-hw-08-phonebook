import styled from '@emotion/styled';
import IMG from 'Photo/Raznotsvetnye-diskovye-telefony.jpg';

export const SectionContacts = styled.section`
  background-image: url(${IMG});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const Container = styled.div`
  padding-top: 45px;
  padding-left: 8px;
  padding-right: 8px;
  padding-bottom: 8px;
  margin-left: auto;
  margin-right: auto;
  max-width: 420px;
  background-color: silver;
  opacity: 0.9;
`;

export const TitleLIstContacts = styled.h2`
  margin: 30px 0;
  text-align: center;
`;

export const Titel = styled.h1`
  margin-bottom: 40px;
  text-align: center;
`;

export const NoContactMessage = styled.p`
  text-align: center;
  font-size: 20px;
  color: red;
`;
