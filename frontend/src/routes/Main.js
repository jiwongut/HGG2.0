import Header from '../Header';
import Navigation from '../Navigation';
import MainContent from '../contents/MainContent';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 480px;
  margin: 0 auto;
`;

function Main() {
  return (
    <Container>
      <Header />
      <Navigation />
      <MainContent />
    </Container>
  );
}

export default Main;
