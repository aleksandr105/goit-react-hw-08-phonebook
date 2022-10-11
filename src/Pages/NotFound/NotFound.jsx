import { LinkToHome } from './NotFound.stuled';
import { Title } from './NotFound.stuled';

const NotFound = () => {
  return (
    <>
      <Title>Sorry, page not found :-(</Title>
      <LinkToHome to="/">Return to the main page</LinkToHome>
    </>
  );
};
export default NotFound;
