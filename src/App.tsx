import React, { useEffect, useRef, useState } from "react";
import { select, Selection } from "d3-selection";
import { scaleLinear, scaleBand } from "d3-scale";
import { max } from "d3-array";
import randomstring from "randomstring";

let initialData = [
  {
    name: "foo",
    unit: 32,
  },
  {
    name: "bar",
    unit: 67,
  },
  {
    name: "bbb",
    unit: 81,
  },
  {
    name: "ccc",
    unit: 38,
  },
  {
    name: "ddd",
    unit: 28,
  },
  {
    name: "hordor",
    unit: 59,
  },
];

const dimensions = {
  width: 900,
  height: 600,
};

const App: React.FC = () => {
  const ref = useRef<SVGSVGElement | null>(null);
  const [selection, setSelection] = useState<null | Selection<
    SVGSVGElement | null,
    unknown,
    null,
    undefined
  >>(null);

  const [data, setData] = useState(initialData);

  let y = scaleLinear()
    .domain([0, max(data, (d) => d.unit)!])
    .range([dimensions.height, 0]);

  let x = scaleBand()
    .domain(data.map((d) => d.name))
    .range([0, dimensions.width])
    .paddingInner(0.05);

  useEffect(() => {
    if (!selection) {
      setSelection(select(ref.current));
    } else {
      selection
        .selectAll("rect")
        .data(data)
        .enter()
        .append("rect")
        .attr("width", x.bandwidth)
        .attr("height", (d) => dimensions.height - y(d.unit))
        .attr("x", (d) => x(d.name)!)
        .attr("y", (d) => y(d.unit))
        .attr("fill", "orange");
    }
  }, [selection]);

  useEffect(() => {
    if (selection) {
      y = scaleLinear()
        .domain([0, max(data, (d) => d.unit)!])
        .range([dimensions.height, 0]);

      x = scaleBand()
        .domain(data.map((d) => d.name))
        .range([0, dimensions.width])
        .paddingInner(0.05);

      const rects = selection.selectAll("rect").data(data);
      rects.exit().remove();

      rects
        .attr("width", x.bandwidth)
        .attr("height", (d) => dimensions.height - y(d.unit))
        .attr("x", (d) => x(d.name)!)
        .attr("y", (d) => y(d.unit))
        .attr("fill", "orange");

      rects
        .enter()
        .append("rect")
        .attr("width", x.bandwidth)
        .attr("height", (d) => dimensions.height - y(d.unit))
        .attr("x", (d) => x(d.name)!)
        .attr("y", (d) => y(d.unit))
        .attr("fill", "orange");
    }
  }, [data]);

  const addRandom = () => {
    const dataToBeAdded = {
      name: randomstring.generate(10),
      unit: Math.floor(Math.random() * 80 + 20),
    };
    setData([...data, dataToBeAdded]);
  };

  const removeLast = () => {
    if (data.length === 0) {
      return;
    }
    const slicedData = data.slice(0, data.length - 1);
    setData(slicedData);
  };

  return (
    <div>
      {/* 기본 너비는 300임. 500으로 확장필요 */}
      <svg ref={ref} width={dimensions.width} height={dimensions.height} />
      <button onClick={addRandom}>addRandom</button>
      <button onClick={removeLast}>removeLast</button>
    </div>
  );
};

export default App;
