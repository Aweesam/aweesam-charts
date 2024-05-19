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
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const d3 = __importStar(require("d3"));
const Line = ({ data, xScale, yScale }) => {
    const lineRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        if (lineRef.current) {
            const lineGenerator = d3.line()
                .x(d => xScale(d.x))
                .y(d => yScale(d.y));
            d3.select(lineRef.current)
                .datum(data)
                .attr('d', lineGenerator);
        }
    }, [data, xScale, yScale]);
    return react_1.default.createElement("path", { ref: lineRef, stroke: "black", fill: "none" });
};
exports.default = Line;
