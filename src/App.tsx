import TodoBox from './components/TodoBox';
import styled from 'styled-components';
import GlobalStyle from './GlobalStyle';

const TodoContainer = styled.div`
  margin: 0 auto;
  margin-top: 3rem;
  background: rgba(189, 187, 187, 0.8);
  width: 30rem;
  height: 80vh;
  border-radius: 30px;
  box-shadow: 0 5px 18px -7px rgba(0, 0, 0, 1);
  padding: 30px;
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <TodoContainer>
        <TodoBox />
      </TodoContainer>
    </>
  );
};
export default App;
