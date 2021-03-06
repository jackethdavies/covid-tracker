import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import numeral from 'numeral'

import { Container, Emphasis } from '../styles/ui'

const InfoContainers = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media(max-width: 630px) {
    flex-direction: column;
  }
`;
const InfoContainerItem = styled(Container)`
  width: calc(100% / 3);
  @media(max-width: 630px) {
    width: 100%;
    &:nth-of-type(2) {
      margin: 1em 0;
    }
  }
`;

function CaseInfo({
  totalCases,
  totalDeaths,
  totalRecovered,
  newCases,
  newDeaths,
  newRecoveries,
  setType
}) {
  return (
    <InfoContainers>
        <InfoContainerItem onClick={() => setType('cases')}>
          <h1>Cases</h1>
          <div data-testid="new-cases">+ <Emphasis>{numeral(newCases).format('0,0')}</Emphasis> today</div>
          <small data-testid="total-cases"><Emphasis>{numeral(totalCases).format(0,0)}</Emphasis> total</small>
        </InfoContainerItem>

        <InfoContainerItem onClick={() => setType('recovered')}>
          <h1>Recoveries</h1>
          <div data-testid="new-recoveries">+ <Emphasis>{numeral(newRecoveries).format('0,0')}</Emphasis> today</div>
          <small data-testid="total-recoveries"><Emphasis>{numeral(totalRecovered).format('0,0')}</Emphasis> total</small>
        </InfoContainerItem>

        <InfoContainerItem onClick={() => setType('deaths')}>
          <h1>Deaths</h1>
          <div data-testid="new-deaths">+ <Emphasis>{numeral(newDeaths).format('0,0')}</Emphasis> today</div>
          <small data-testid="total-deaths"><Emphasis>{numeral(totalDeaths).format('0,0')}</Emphasis> total</small>
        </InfoContainerItem>
    </InfoContainers>
  )
}

CaseInfo.propTypes = {
  totalCases: PropTypes.number,
  totalDeaths: PropTypes.number,
  totalRecovered: PropTypes.number,
  newCases: PropTypes.number,
  newDeaths: PropTypes.number,
  newRecoveries: PropTypes.number,
  setType: PropTypes.func
}

export default CaseInfo
