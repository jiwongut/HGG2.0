import Backward from '../../components/Backward';
// import PostButton from '../../components/Button';
import Container from '../../components/Container';
// import BackwardTitle from '../Mypage/Home/BackwardTitle';
import BackwardTitleBox from '../Mypage/Home/BackwardTitleBox';
import Header from '../../components/Header';
import Navigation from '../../components/Navigation';
import CategoryResult from '../Category';

function ReviewPost() {
  return (
    <Container>
      <Header />
      <BackwardTitleBox title="후기게시판" />
      <Navigation />
    </Container>
  );
  }

export default ReviewPost;
