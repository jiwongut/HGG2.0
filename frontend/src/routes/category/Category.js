import styled from 'styled-components';
import Backward from '../../components/Backward';
import Navigation from '../../Navigation';
import CategoryResult from './CategoryResult';
import CategoryTitle from './CategoryTitle';

const Container = styled.div`
  max-width: 480px;
  margin: 0 auto;
`;

function Category() {
  return (
    <Container>
      <Backward />
      <CategoryTitle />
      <CategoryResult />
      <CategoryResult />
      <CategoryResult />
      <Navigation />
    </Container>
  );
}
export default Category;
