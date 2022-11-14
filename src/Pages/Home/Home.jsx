import { useSelector } from 'react-redux';
import { getIsLoggedIn, getUserName } from 'redux/auth/auth-selectors';
import { Container } from 'components/Layout/Layout.styled';
import {
  MainTitle,
  HomeSection,
  TextWelcome,
  TextLink,
  Name,
  MainTitleCottainer,
} from './Home.styled';

const Home = ({ refHeader }) => {
  const IsLoggedIn = useSelector(getIsLoggedIn);
  const { name } = useSelector(getUserName);

  const textRender = !IsLoggedIn ? (
    <>
      Congratulations, to start using the phone book,
      <TextLink to="/register"> register </TextLink> or
      <TextLink to="/login"> log in</TextLink>
    </>
  ) : (
    <>
      Welcome <Name> {name} </Name> to the application now you can use the
      application
    </>
  );

  return (
    <main>
      <HomeSection
        refHeader={refHeader.current?.getBoundingClientRect().height && 64}
      >
        <Container>
          <MainTitle>
            <MainTitleCottainer>Welcome to Phone book</MainTitleCottainer>
          </MainTitle>
          <TextWelcome>{textRender}</TextWelcome>
        </Container>
      </HomeSection>
    </main>
  );
};

export default Home;
