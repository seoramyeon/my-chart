import React, { useRef, useEffect, useState } from 'react';
import './App.css';
import {
  select,
  axisBottom,
  axisRight,
  scaleLinear,scaleBand
} from 'd3';

//useRef: DOM 을 직접 선택해야 하는 상황이 발생 할 때도 있습니다.
//ex)특정 엘리먼트의 크기를 가져와야 한다던지,

const App = () => {
  const [data, setData] = useState([25, 30, 45, 60, 20, 65, 80]);
  const svgRef = useRef()
   
  useEffect(() => {
    const svg = select(svgRef.current);
    const xScale = scaleBand()
      .domain(data.map((value, index) => index))
      .range([0, 300]);

    const yScale = scaleLinear()
      .domain([0, 150])
      .range([150, 0]);

    const colorScale = scaleLinear()
    .domain([75, 150])  
    .range([150, 0])   

    const xAxis = axisBottom(xScale)
      .ticks(data.length)
      .tickFormat((index) => index + 1);

    svg
      .select('.x-axis')
      .style('transform', 'translateY(150px)')
      .call(xAxis);

    const yAxis = axisRight(yScale);
    svg.select('.y-axis')
      .style('transform', 'translateX(300px)')
      .call(yAxis);

    svg
      .selectAll('.bar')
      .data(data)
      .join('rect')
      .attr('class', 'bar') 
      .attr('x', (value, index)=>xScale(index))
      .attr('y', -150)
      .attr('width', xScale.scaleBand)
  

  /*
    // 원 그래프
    svg
      .selectAll('circle')
      .data(data)
      .join('circle')
      .attr('r', (value) => value)
      .attr('cx', (value) => value * 2)
      .attr('cy', (value) => value * 2)
      .attr('stroke', 'pink');

    svg
      .selectAll('.line')
      .data([data])
      .join('path')
      .attr('class', 'line')
      .attr('d', myLine)
      .attr('fill', 'none')
      .attr('stroke', 'pink');
      */
  }, [data]);

  return (
    <React.Fragment>
      <svg ref={svgRef}>
        <g className='x-axis' />
        <g className='y-axis' />
      </svg>
  
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
