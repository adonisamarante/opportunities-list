import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #FFFFFF;
  width: 230px;
  height: 333px;
  border-radius: 15px;
  margin-bottom: 20px;
`;

export const StyledImg = styled.img`
  height: 220px;
  overflow: hidden;
  border-radius: 15px 15px 0 0;
`;

export const StyledInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 18px;
`;

export const StyledCondoName = styled.span`
  font: bold 12px 'Roboto', sans-serif;
`;

export const StyledApartmentNumber = styled.span`
  font: 100 12px 'Roboto', sans-serif;
  padding: 2px 0 2px 0;
`;

export const StyledApartmentPrice = styled.span`
  font: bold 14px 'Roboto', sans-serif;
  color: #28B15C;
  align-self: flex-end;
  padding: 4px 0 4px 0;
`;

export const StyledApartmentLocation = styled.span`
  font: 100 10px 'Roboto', sans-serif;
  padding: 2px 0 2px 0;
`;