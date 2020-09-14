import React, { useRef, useEffect } from 'react';
import { select } from 'd3';
import useResizeObserver from './useResizeObzerver';

const GeoChart = ({ data, property }) => {
  const svgRef = useRef();

  return (
    <div>
      <svg ref={svgRef}></svg>
    </div>
  );
};

export default GeoChart;
