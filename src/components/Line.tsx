import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const Line: React.FC<{ data: { x: number; y: number }[]; xScale: d3.ScaleLinear<number, number>; yScale: d3.ScaleLinear<number, number> }> = ({ data, xScale, yScale }) => {
  const lineRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (lineRef.current) {
      const lineGenerator = d3.line<{ x: number; y: number }>()
        .x(d => xScale(d.x))
        .y(d => yScale(d.y));

      d3.select(lineRef.current)
        .datum(data)
        .attr('d', lineGenerator);
    }
  }, [data, xScale, yScale]);

  return <path ref={lineRef} stroke="black" fill="none"></path>;
};

export default Line;
