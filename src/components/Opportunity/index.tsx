import {
  StyledContainer,
  StyledImg,
  StyledInfoDiv,
  StyledCondoName,
  StyledApartmentNumber,
  StyledApartmentPrice,
  StyledApartmentLocation
} from './styles';
import ApartmentImage from '../../resources/apartment-3598802.jpg';

type opportunityType = {
  id: number,
  picture: string,
  condominiumName: string,
  apartmentNumber: number,
  price: string,
  location: string
}

export default function Opportunity(opportunityInfo: opportunityType) {
  return (
    <>
      <StyledContainer>
        <StyledImg src={ApartmentImage} />
        <StyledInfoDiv>
          <StyledCondoName>{opportunityInfo.condominiumName}</StyledCondoName>
          <StyledApartmentNumber>Apartamento {opportunityInfo.apartmentNumber}</StyledApartmentNumber>
          <StyledApartmentPrice>R$ {opportunityInfo.price}</StyledApartmentPrice>
          <StyledApartmentLocation>📍 {opportunityInfo.location}</StyledApartmentLocation>
        </StyledInfoDiv>
      </StyledContainer>
    </>
  );
}
