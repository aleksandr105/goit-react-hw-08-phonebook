import styled from '@emotion/styled';
import IMG from 'Photo/Raznotsvetnye-diskovye-telefony.jpg';

export const SectionContacts = styled.section`
  background-image: url(${IMG});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding-top: 1vh;
  padding-left: 8px;
  padding-right: 8px;
  min-height: 100vh;
`;

export const Container = styled.div`
  padding: 5px 5px;
  margin-left: auto;
  margin-right: auto;
  max-width: 460px;
  background-color: silver;
  opacity: 0.9;
  border-radius: 15px;
  height: calc(98vh - ${props => props.headerHeight}px);
`;

export const TitleLIstContacts = styled.h2`
  margin: 10px 0;
  text-align: center;
`;

export const Titel = styled.h1`
  margin-bottom: 10px;
  text-align: center;
  color: blue;
`;

export const NoContactMessage = styled.p`
  text-align: center;
  font-size: 20px;
  color: red;
`;
