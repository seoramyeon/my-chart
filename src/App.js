import React from "react";



const App= () => {
  
  const dummy_data = [
    { id: 'd1', value: 10, region: 'USA' },
    { id: 'd2', value: 11, region: 'Korea' },
    { id: 'd3', value: 12, region: 'China' },
    { id: 'd4', value: 13, region: 'Japan' },
    { id: 'd5', value: 14, region: 'India' },
  ];
  
  const container = d3
    .select('div')
    .classed('container', true)
    .style('border', '1px solid red');
  
  container
    .selectAll('.bar')
    .data(dummy_data)
    .enter()
    .append('div')
    .classed('bar', true)
    .style('width', '50px')
    .style('height', (data) => data.value * 5 + 'px');



  

  return (
    <div>
        Hello!
      {/* 기본 너비는 300임. 500으로 확장필요 */}
      {/* <svg width={500} height={300} /> */}
     
    </div>
  );
};

export default App;
