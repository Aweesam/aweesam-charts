import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as d3 from 'd3';
import { useGesture } from 'react-use-gesture';
import styled from 'styled-components';

const ChartContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
`;

const Svg = styled.svg`
  width: 100%;
  height: 100%;
`;

const InteractiveChart: React.FC = () => {
  const chartRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const [transform, setTransform] = useState<d3.ZoomTransform>(d3.zoomIdentity);

  const bind = useGesture({
	onWheel: ({ event }) => {
		event.preventDefault();
		if (chartRef.current) {
		  const point = d3.pointer(event, chartRef.current);
		  const t = transform
			.translate(point[0], point[1])
			.scale(event.deltaY > 0 ? 1.1 : 0.9)
			.translate(-point[0], -point[1]);
		  setTransform(t);
		}
	  },
	  onDrag: ({ offset: [dx, dy] }) => {
		if (chartRef.current) {
		  const t = transform.translate(dx, dy);
		  setTransform(t);
		}
	  },
	});
  
	useEffect(() => {
	  if (chartRef.current && svgRef.current) {
		const svg = d3.select(svgRef.current);
		const g = svg.append('g');
  
		// Example: Adding a line to the SVG
		const data = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
		const line = d3.line<number>()
		  .x((d, i) => i * 30)
		  .y(d => 100 - d);
  
		g.append('path')
		  .datum(data)
		  .attr('fill', 'none')
		  .attr('stroke', 'blue')
		  .attr('stroke-width', 1.5)
		  .attr('d', line);
  
		// Apply the initial transform
		g.attr('transform', transform.toString());
  
		// Cleanup on unmount
		return () => {
		  svg.selectAll('*').remove();
		};
	  }
	}, [transform]);
  
	return (
	  <ChartContainer {...bind()}>
		<Svg ref={svgRef}>
		  <g transform={transform.toString()} />
		</Svg>
	  </ChartContainer>
	);
  };

export default InteractiveChart;
