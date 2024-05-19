import * as d3 from 'd3';

const drawLine = (svg: d3.Selection<SVGGElement, unknown, null, undefined>, data: { x: number; y: number }[], xScale: d3.ScaleLinear<number, number>, yScale: d3.ScaleLinear<number, number>) => {
  const lineGenerator = d3.line<{ x: number; y: number }>()
    .x(d => xScale(d.x))
    .y(d => yScale(d.y));

  svg.append('path')
    .datum(data)
    .attr('d', lineGenerator)
    .attr('stroke', 'black')
    .attr('fill', 'none');
};

export default drawLine;
