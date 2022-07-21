import styled from 'styled-components';
// import PostButton from '../../components/Button';
import Container from '../../components/Container';
import BackwardTitleBox from '../Mypage/Home/BackwardTitleBox';
import Header from '../../components/Header';
import Navigation from '../../components/Navigation';
import Form from '../Register/Form/index';

function ReviewPost() {
  return (
    <Container>
      <Header />
      <BackwardTitleBox title="후기게시판" />
      <Form placeholder={"제목"}/>

      <Navigation />
    </Container>
  );
  }

export default ReviewPost;


