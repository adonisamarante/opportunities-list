import Opportunity from '../../components/Opportunity';
import OpportunityListMock from '../../mock/OpportunityListMock';

import {
  StyledContainer,
  StyledHeader,
  StyledTitleSpan,
  StyledDash,
  StyledBody,
  StyledWrapper
} from './styles';

const OpportunitiesList = () => {
  const list = OpportunityListMock;

  return (
    <StyledContainer>
      <StyledHeader>
        <StyledDash />
        <StyledTitleSpan>Oportunidades de Terceiros</StyledTitleSpan>
      </StyledHeader>
      <StyledBody>
        <StyledWrapper>
          {list.map((item) => (
            <Opportunity {...item} key={item.id} />
          ))}
        </StyledWrapper>
      </StyledBody>
    </StyledContainer>
  )
}

export default OpportunitiesList;