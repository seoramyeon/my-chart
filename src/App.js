import React, { useRef, useEffect, useState } from 'react';
import './App.css';
import { select } from 'd3';

//useRef: DOM 을 직접 선택해야 하는 상황이 발생 할 때도 있습니다.
//ex)특정 엘리먼트의 크기를 가져와야 한다던지,
//스크롤바 위치를 가져오거나 설정해야된다던지, 또는 포커스를 설정해줘야된다던지 등

const App = () => {
  const [data, setData] = useState([25, 30, 45, 60, 20, 80]);
  const svgRef = useRef();

  useEffect(() => {
    const svg = select(svgRef.current);
    svg
      .selectAll('circle')
      .data(data)
      .join('circle')
      .attr('r', (value) => value)
      .attr('cx', (value) => value * 2)
      .attr('cy', (value) => value * 2)
      .attr('stroke', 'pink');
  }, [data]);

  return (
    <React.Fragment>
      <svg ref={svgRef} width={800} height={500}></svg>
      <br />
      <button onClick={() => setData(data.map((value) => value + 5))}>
        Update data
      </button>
      <button onClick={() => setData(data.filter((value) => value < 55))}>
        Filter data
      </button>
    </React.Fragment>
  );
};

export default App;
