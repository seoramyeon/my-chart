import React from "react";
// import { select, Selection } from "d3-selection";


// let dummyData = [
//   {
//     name: "foo",
//     unit: 32,
//   },
// ];



const App: React.FC = () => {
  
  // d3.select('div')


  

  return (
    <div>
        Hello!
      {/* 기본 너비는 300임. 500으로 확장필요 */}
      <svg width={500} height={300} />
  
    </div>
  );
};

export default App;
