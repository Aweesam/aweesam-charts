import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import styled from 'styled-components';

const ChartContainer = styled.div`
  width: 600px;
  height: 400px;
  position: relative;
`;

const Chart: React.FC = () => {
  const chartRef = useRef<HTMLDivElement>(null);

  // Clear any existing SVG elements to avoid duplication
  d3.select(chartRef.current).selectAll('*').remove();

  useEffect(() => {
    if (chartRef.current) {
      const svg = d3.select(chartRef.current)
        .append('svg')
        .attr('width', '100%')
        .attr('height', '100%')
        .append('g');

      // Example: Adding a simple circle to the SVG
		svg.append('circle')
		.attr('cx', 50)
		.attr('cy', 50)
		.attr('r', 40)
		.style('fill', 'blue');

		console.log('SVG created:', svg);
    }
  }, []);

  return <ChartContainer ref={chartRef}></ChartContainer>;
};

export default Chart;
