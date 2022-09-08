import styled from 'styled-components';

export const StyledContainer = styled.div`
  margin: 0;
  width: 100%;
  height: 100vh;
`;

export const StyledHeader = styled.header`
  margin-top: 70px;
  margin-bottom: 70px;
  display: flex;
  flex-direction: row;
`;

export const StyledTitleSpan = styled.span`
  color: #FFFFFF;
  font: bold 40px 'Roboto', sans-serif;
  padding-right: 30px;
`;

export const StyledDash = styled.div`
  display: flex;
  width: 35px;
  border: 2px solid #FFFFFF;
  background-color: #FFFFFF;
  height: 0px;
  margin: 22px 45px 0 0;
  border-radius: 0 15px 15px 0;
`;

export const StyledBody = styled.body`
  padding: 50px;
  height: auto;
`;

export const StyledWrapper = styled.div`
  @media (max-width: 60em) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media (min-width: 60em) {
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 28%;
    overflow-x: auto;
    overscroll-behavior-inline: contain;
  }

  ::-webkit-scrollbar{
    height: 0.5em;
  }

  ::-webkit-scrollbar-track{
    background: #3F3F3F;
  }

  ::-webkit-scrollbar-thumb{
    background: #4F4F4F;
  }
`;