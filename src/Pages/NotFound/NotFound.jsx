import { LinkToHome, Title } from './NotFound.styled';

const NotFound = () => {
  return (
    <>
      <Title>Sorry, page not found :-(</Title>
      <LinkToHome to="/">Return to the main page</LinkToHome>
    </>
  );
};
export default NotFound;
