import React from 'react';
import * as d3 from 'd3';
declare const Line: React.FC<{
    data: {
        x: number;
        y: number;
    }[];
    xScale: d3.ScaleLinear<number, number>;
    yScale: d3.ScaleLinear<number, number>;
}>;
export default Line;
