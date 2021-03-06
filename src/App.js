import React, { useState, useEffect } from 'react'
import * as api from './utils/api'
import styled, { ThemeProvider } from 'styled-components'
import { theme } from './theming/'
import './App.css';

import CountryInformation from './components/Country'
import MapComponent from './components/Map'

import { AppContainer, Header } from './styles/app'
import CaseInfo from './components/CaseInfo'

const AreaInfo = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 2em;

  @media(max-width: 768px) {
    flex-direction: column;
  }
`;

const caseTypes = {
  cases: {
    color: theme.primary1,
    size: 800,
  },
  recovered: {
    color: '#0E9F6E',
    size: 1200
  },
  deaths: {
    color: '#F05252',
    size: 2000
  }
};

function App() {
  const [globalData, setGlobalData] = useState({});
  const [countryData, setCountryData] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState({});
  
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const [type, setType] = useState("cases");
  const [position, setPosition] = useState([0,0]);
  const [zoom, setZoom] = useState(2);

  function getAllData() {
    api.getMainData()
    .then((res) => setGlobalData(res))
    .catch(err => setError(err));
  }
  function getAllCountryData() {
    api.getCountryData()
    .then((res) => setCountryData(res))
    .catch(err => setError(err));
  }

  useEffect(() => {
    getAllData();
    getAllCountryData();
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (selectedCountry.lat && selectedCountry.long) {
      setZoom(8);
      setPosition([selectedCountry.lat, selectedCountry.long]);
    }
  }, [selectedCountry])
  
  if (isLoading || globalData === {}) return <p>Loading . . .</p>;
  if (error) return <p data-testid="error">There has been an error</p>;

  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
          <Header>
            <h1>Covid Tracker</h1>
          </Header>

          <CaseInfo
            totalCases={selectedCountry.cases !== undefined ?  selectedCountry.cases : globalData.cases}
            totalDeaths={selectedCountry.deaths !== undefined ? selectedCountry.deaths : globalData.deaths}
            totalRecovered={selectedCountry.recovered !== undefined ? selectedCountry.recovered : globalData.recovered}

            newCases={selectedCountry.todayCases !== undefined ?  selectedCountry.todayCases : globalData.todayCases}
            newDeaths={selectedCountry.todayDeaths !== undefined ?  selectedCountry.todayDeaths : globalData.todayDeaths}
            newRecoveries={selectedCountry.todayRecovered !== undefined ?  selectedCountry.todayRecovered : globalData.todayRecovered}

            setType={setType}
          />

          <AreaInfo>
            <MapComponent position={position} zoom={zoom} countryData={countryData} type={type} caseTypes={caseTypes} />
            <CountryInformation countryData={countryData} selectedCountry={selectedCountry} setSelectedCountry={setSelectedCountry} />
          </AreaInfo>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
