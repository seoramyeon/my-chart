import React, { useEffect, useRef, useState } from 'react';
import { select, Selection, selectAll } from 'd3-selection';

const data = [
	{
		unit: 150,
		color: 'yellow'
	},
	{
		unit: 100,
		color: 'orange'
	},
	{
		unit: 50,
		color: 'red'
	},
	{
		unit: 70,
		color: 'teal'
	},
	{
		unit: 120,
		color: 'pink'
	}
];

const App: React.FC = () => {
	const ref = useRef(null);
	const [selection, setSelection] = useState<null | Selection<
		null,
		unknown,
		null,
		undefined
	>>(null);

	useEffect(() => {
		if (!selection) {
			setSelection(select(ref.current));
		} else {
			const rects = selection
				.selectAll('rect')
				.data(data)
				.attr('width', 100)
				.attr('height', d => d.unit)
				.attr('fill', d => d.color)
				.attr('x', (_, i) => i * 100);

			rects
				.enter()
				.append('rect')
				.attr('width', 100)
				.attr('height', d => d.unit)
				.attr('fill', d => d.color)
				.attr('x', (_, i) => i * 100);
			console.log(rects);
		}
	}, [selection]);

	/*
	useEffect(() => {
		console.log(select(svgRef.current));
		// select(svgRef.current)
		// 	.append('rect')
		// 	.attr('width', 100)
		// 	.attr('height', 100)
		//   .attr('fill', 'red')
		selectAll('rect')
			.attr('width', 100)
			.attr('height', 100)
			.attr('fill', 'blue')
			.attr('x', (_, i) => i * 100);
	}); */

	return (
		<div>
			{/* 기본 너비는 300임. 500으로 확장필요 */}
			<svg ref={ref} width={500}>
				<rect />
			</svg>
		</div>
	);
};

export default App;
