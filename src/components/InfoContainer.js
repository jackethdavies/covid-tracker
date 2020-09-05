import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import numeral from 'numeral';

import { Container } from '../styles/ui'

const InfoContainers = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const InfoContainerItem = styled(Container)`
  width: calc(100% / 3);
`;
const InfoLabel = styled.div``;

function InfoContainer({
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
          <InfoLabel>+ {numeral(newCases).format('0,0')} today</InfoLabel>
          <small>{numeral(totalCases).format(0,0)} total</small>
        </InfoContainerItem>

        <InfoContainerItem onClick={() => setType('recovered')}>
          <h1>Recoveries</h1>
          <InfoLabel>+ {numeral(newRecoveries).format('0,0')} today</InfoLabel>
          <small>{numeral(totalRecovered).format('0,0')} total</small>
        </InfoContainerItem>

        <InfoContainerItem onClick={() => setType('deaths')}>
          <h1>Deaths</h1>
          <InfoLabel>+ {numeral(newDeaths).format('0,0')} today</InfoLabel>
          <small>{numeral(totalDeaths).format('0,0')} total</small>
        </InfoContainerItem>
    </InfoContainers>
  )
}

InfoContainer.propTypes = {
  totalCases: PropTypes.number.isRequired,
  totalDeaths: PropTypes.number.isRequired,
  totalRecovered: PropTypes.number.isRequired,
  newCases: PropTypes.number.isRequired,
  newDeaths: PropTypes.number.isRequired,
  newRecoveries: PropTypes.number.isRequired,
  setType: PropTypes.func.isRequired
}

export default InfoContainer