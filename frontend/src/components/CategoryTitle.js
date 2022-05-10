import styled from 'styled-components';

const TitleBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 30px;
  font-weight: bold;
`;

const NumberOfProducts = styled.span`
  color: #6e6e70;
  font-size: 16px;
`;

function CategoryTitle() {
  return (
    <TitleBox>
      <Title>
        의류
        {/* props 받아서 카테고리 추가 필요 */}
      </Title>
      <NumberOfProducts>
        총 N개의 상품
        {/* props 받아서 N개 데이터 표기 필요 */}
      </NumberOfProducts>
    </TitleBox>
  );
}

export default CategoryTitle;
