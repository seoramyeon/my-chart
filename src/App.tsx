import React, { useEffect, useState, useRef } from 'react';
import './App.css';
import BarChart from './Chart1';

const datas = [
	[10, 30, 40, 20],
	[10, 40, 30, 20, 50, 10],
	[60, 30, 40, 20, 30]
];
var i = 0;

const App: React.FC = () => {
	const svgRef = useRef<SVGSVGElement | null>(null);

	// const [data, setData] = useState([]);

	// useEffect(() => {
	// 	changeData();
	// }, []);

	// const changeData = () => {
	// 	setData(datas[i++]);
	// 	if (i === datas.length) i = 0;
	// };

	return (
		<div>
			<svg ref={svgRef} />
		</div>
	);
};

export default App;
