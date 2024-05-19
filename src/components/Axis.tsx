import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

interface AxisProps {
  scale: d3.AxisScale<d3.AxisDomain>;
  orient: 'bottom' | 'left';
}

const Axis: React.FC<AxisProps> = ({ scale, orient }) => {
  const axisRef = useRef<SVGGElement>(null);

  useEffect(() => {
    if (axisRef.current) {
      const axis = orient === 'bottom' ? d3.axisBottom(scale) : d3.axisLeft(scale);
      d3.select(axisRef.current).call(axis);
    }
  }, [scale, orient]);

  return <g ref={axisRef}></g>;
};

export default Axis;
