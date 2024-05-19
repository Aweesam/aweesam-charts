import React from 'react';
import * as d3 from 'd3';
interface AxisProps {
    scale: d3.AxisScale<d3.AxisDomain>;
    orient: 'bottom' | 'left';
}
declare const Axis: React.FC<AxisProps>;
export default Axis;
