import * as d3 from 'd3';
declare const drawLine: (svg: d3.Selection<SVGGElement, unknown, null, undefined>, data: {
    x: number;
    y: number;
}[], xScale: d3.ScaleLinear<number, number>, yScale: d3.ScaleLinear<number, number>) => void;
export default drawLine;
