import React, { useRef, useEffect } from 'react';
import { select } from 'd3';
import { geoPath, geoMercator } from 'd3-geo';
import useResizeObserver from 'resize-observer-polyfill';
// import { useResizeObserver } from "./useResizeObserver";


//render a map
const GeoChart = ({ data, property }) => {
  const svgRef = useRef();
  const wrapperRef = useRef();
  // const dimensions = new useResizeObserver(wrapperRef);

  //will be called initially and every data change
  useEffect(() => {
    const svg = select(svgRef.current);

    // const { width, height } =
    //   dimensions || wrapperRef.current.getBoundingClientRect();

    const projection = geoMercator().fitSize([400, 300], data);
    const pathGenerator = geoPath().projection(projection);

    svg
      .selectAll('.country')
      .data(data.features)
      .join('path')
      .attr('class', 'country')
      .attr('d', (feature) => pathGenerator(feature));
  }, [data, property]);

  return (
    <div ref={wrapperRef} style={{ marginBottom: '2rem' }}>
      <svg ref={svgRef}></svg>
    </div>
  );
};

export default GeoChart;
