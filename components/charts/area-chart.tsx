"use client";

import { useState } from "react";

interface DataPoint {
	label: string;
	value: number;
}

interface AreaChartProps {
	data: DataPoint[];
	height?: number;
	color?: string;
	gradient?: boolean;
}

export function AreaChart({ 
	data, 
	height = 300, 
	color = "#8b5cf6", 
	gradient = true 
}: AreaChartProps) {
	const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
	
	const maxValue = Math.max(...data.map(d => d.value));
	const minValue = Math.min(...data.map(d => d.value));
	const range = maxValue - minValue || 1;
	
	const width = 400;
	const padding = 40;
	const chartWidth = width - (padding * 2);
	const chartHeight = height - (padding * 2);
	
	const points = data.map((point, index) => ({
		x: padding + (index / (data.length - 1)) * chartWidth,
		y: padding + chartHeight - ((point.value - minValue) / range) * chartHeight,
		...point
	}));
	
	const pathData = points.reduce((path, point, index) => {
		const command = index === 0 ? 'M' : 'L';
		return path + `${command} ${point.x},${point.y}`;
	}, '');
	
	const areaPath = pathData + 
		`L ${points[points.length - 1].x},${height - padding}` +
		`L ${padding},${height - padding} Z`;
	
	return (
		<div className="relative w-full">
			<svg width={width} height={height} className="w-full">
				<defs>
					{gradient && (
						<linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
							<stop offset="0%" stopColor={color} stopOpacity="0.3" />
							<stop offset="100%" stopColor={color} stopOpacity="0.0" />
						</linearGradient>
					)}
				</defs>
				
				{/* Grid lines */}
				<g className="stroke-muted/20 stroke-1">
					{[0, 0.25, 0.5, 0.75, 1].map((ratio) => (
						<line
							key={ratio}
							x1={padding}
							y1={padding + ratio * chartHeight}
							x2={width - padding}
							y2={padding + ratio * chartHeight}
						/>
					))}
				</g>
				
				{/* Area fill */}
				<path
					d={areaPath}
					fill={gradient ? "url(#areaGradient)" : color}
					opacity={gradient ? 1 : 0.1}
				/>
				
				{/* Line */}
				<path
					d={pathData}
					fill="none"
					stroke={color}
					strokeWidth="2"
					className="drop-shadow-sm"
				/>
				
				{/* Data points */}
				{points.map((point, index) => (
					<circle
						key={index}
						cx={point.x}
						cy={point.y}
						r={hoveredIndex === index ? 6 : 4}
						fill={color}
						className="cursor-pointer transition-all duration-200 drop-shadow-sm"
						onMouseEnter={() => setHoveredIndex(index)}
						onMouseLeave={() => setHoveredIndex(null)}
					/>
				))}
				
				{/* Tooltip */}
				{hoveredIndex !== null && (
					<g>
						<rect
							x={points[hoveredIndex].x - 30}
							y={points[hoveredIndex].y - 35}
							width="60"
							height="25"
							rx="4"
							fill="hsl(var(--popover))"
							stroke="hsl(var(--border))"
							className="drop-shadow-md"
						/>
						<text
							x={points[hoveredIndex].x}
							y={points[hoveredIndex].y - 18}
							textAnchor="middle"
							className="text-xs font-medium fill-popover-foreground"
						>
							{points[hoveredIndex].value}
						</text>
					</g>
				)}
			</svg>
			
			{/* X-axis labels */}
			<div className="flex justify-between px-10 mt-2">
				{data.map((point, index) => (
					<span
						key={index}
						className="text-xs text-muted-foreground"
					>
						{point.label}
					</span>
				))}
			</div>
		</div>
	);
}