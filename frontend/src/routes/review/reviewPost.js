import styled from 'styled-components';
import './reviewPost.css'
import Container from '../../components/Container';
import BackwardTitleBox from '../Mypage/Home/BackwardTitleBox';
import Header from '../../components/Header';
import Navigation from '../../components/Navigation';
import Form from '../Register/Form/index';


export const FormBox = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 120px;
`;

function ReviewPost() {
  return (
    <Container>
      <Header />
      <BackwardTitleBox title="후기게시판" />
      <Form placeholder={"제목"}/>
      <FormBox>
        <textarea placeholder='본문' />
      </FormBox>
      {/* <Button>제출하기</Button> */}
      <Navigation />
    </Container>
  );
  }

export default ReviewPost;


