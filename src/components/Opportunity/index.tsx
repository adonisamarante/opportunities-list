import { StyledContainer, StyledImg } from './styles';
import ApartmentImage from '../../resources/apartment-3598802.jpg';

type opportunityType = {
  id: number,
  picture: string,
  condominiumName: string,
  apartmentNumber: number,
  price: string,
  location: string
}

export default function Opportunity(opp: opportunityType) {
  return (
    <>
      <StyledContainer>
        <StyledImg src={ApartmentImage} />
      </StyledContainer>
    </>
  );
}
