import styled from 'styled-components';

const NavBox = styled.div`
  height: 52px;
  width: 100%;
  padding: 4px 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function Backward() {
  return (
    <NavBox>
      <span class="material-symbols-outlined">arrow_back</span>
      <span class="material-symbols-outlined">search</span>
    </NavBox>
  );
}

export default Backward;
