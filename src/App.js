import React, { useState } from 'react';
import data from './custom.geo.json';
import './App.css';
import GeoChart from './GeoChart';

//useRef: DOM 을 직접 선택해야 하는 상황이 발생 할 때도 있습니다.
//ex)특정 엘리먼트의 크기를 가져와야 한다던지,

const App = () => {
  const [property, setProperty] = useState('pop_est');

  return (
    <React.Fragment>
      <h2>World Map with d3-geo!</h2> to highlight
      <GeoChart data={data} property={property} />
      <h2> Select property</h2>
      <select
        value={property}
        onChange={(event) => setProperty(event.target.value)}
      >
        <option value='pop_est'>Population</option>
        <option value='name_len'>Name length</option>
        <option value='gdp_md_est'>GDP</option>
      </select>
    </React.Fragment>
  );
};

export default App;
