"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const d3 = __importStar(require("d3"));
const react_use_gesture_1 = require("react-use-gesture");
const styled_components_1 = __importDefault(require("styled-components"));
const ChartContainer = styled_components_1.default.div `
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
`;
const Svg = styled_components_1.default.svg `
  width: 100%;
  height: 100%;
`;
const InteractiveChart = () => {
    const chartRef = (0, react_1.useRef)(null);
    const svgRef = (0, react_1.useRef)(null);
    const [transform, setTransform] = (0, react_1.useState)(d3.zoomIdentity);
    const bind = (0, react_use_gesture_1.useGesture)({
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
    (0, react_1.useEffect)(() => {
        if (chartRef.current && svgRef.current) {
            const svg = d3.select(svgRef.current);
            const g = svg.append('g');
            // Example: Adding a line to the SVG
            const data = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
            const line = d3.line()
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
    return (react_1.default.createElement(ChartContainer, Object.assign({}, bind()),
        react_1.default.createElement(Svg, { ref: svgRef },
            react_1.default.createElement("g", { transform: transform.toString() }))));
};
exports.default = InteractiveChart;
