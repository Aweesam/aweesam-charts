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
const styled_components_1 = __importDefault(require("styled-components"));
const ChartContainer = styled_components_1.default.div `
  width: 600px;
  height: 400px;
  position: relative;
`;
const Chart = () => {
    const chartRef = (0, react_1.useRef)(null);
    // Clear any existing SVG elements to avoid duplication
    d3.select(chartRef.current).selectAll('*').remove();
    (0, react_1.useEffect)(() => {
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
    return react_1.default.createElement(ChartContainer, { ref: chartRef });
};
exports.default = Chart;
