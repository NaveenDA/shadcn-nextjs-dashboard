"use client";

import { useState } from "react";

interface DataPoint {
	label: string;
	value: number;
	color?: string;
}

interface BarChartProps {
	data: DataPoint[];
	height?: number;
	horizontal?: boolean;
}

export function BarChart({ 
	data, 
	height = 300, 
	horizontal = false 
}: BarChartProps) {
	const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
	
	const maxValue = Math.max(...data.map(d => d.value));
	const colors = [
		"#8b5cf6", "#3b82f6", "#10b981", "#f59e0b", 
		"#ef4444", "#ec4899", "#06b6d4", "#84cc16"
	];
	
	return (
		<div className="w-full">
			<svg width="100%" height={height} className="overflow-visible">
				{data.map((item, index) => {
					const barColor = item.color || colors[index % colors.length];
					const barHeight = (item.value / maxValue) * (height - 80);
					const barWidth = (400 - 80) / data.length - 10;
					const x = 40 + index * (barWidth + 10);
					const y = height - 40 - barHeight;
					
					return (
						<g key={index}>
							{/* Bar */}
							<rect
								x={x}
								y={y}
								width={barWidth}
								height={barHeight}
								fill={barColor}
								rx="4"
								className={`cursor-pointer transition-all duration-200 ${
									hoveredIndex === index ? 'opacity-80 drop-shadow-lg' : 'opacity-70'
								}`}
								onMouseEnter={() => setHoveredIndex(index)}
								onMouseLeave={() => setHoveredIndex(null)}
							/>
							
							{/* Value label on hover */}
							{hoveredIndex === index && (
								<g>
									<rect
										x={x + barWidth / 2 - 20}
										y={y - 25}
										width="40"
										height="20"
										rx="4"
										fill="hsl(var(--popover))"
										stroke="hsl(var(--border))"
										className="drop-shadow-md"
									/>
									<text
										x={x + barWidth / 2}
										y={y - 12}
										textAnchor="middle"
										className="text-xs font-medium fill-popover-foreground"
									>
										{item.value}
									</text>
								</g>
							)}
							
							{/* X-axis label */}
							<text
								x={x + barWidth / 2}
								y={height - 15}
								textAnchor="middle"
								className="text-xs fill-muted-foreground"
							>
								{item.label}
							</text>
						</g>
					);
				})}
				
				{/* Y-axis */}
				<line
					x1="40"
					y1="40"
					x2="40"
					y2={height - 40}
					stroke="hsl(var(--border))"
					strokeWidth="1"
				/>
				
				{/* X-axis */}
				<line
					x1="40"
					y1={height - 40}
					x2="360"
					y2={height - 40}
					stroke="hsl(var(--border))"
					strokeWidth="1"
				/>
				
				{/* Y-axis labels */}
				{[0, 0.25, 0.5, 0.75, 1].map((ratio) => {
					const value = Math.round(maxValue * ratio);
					const y = height - 40 - (ratio * (height - 80));
					return (
						<g key={ratio}>
							<line
								x1="35"
								y1={y}
								x2="40"
								y2={y}
								stroke="hsl(var(--border))"
								strokeWidth="1"
							/>
							<text
								x="30"
								y={y + 3}
								textAnchor="end"
								className="text-xs fill-muted-foreground"
							>
								{value}
							</text>
						</g>
					);
				})}
			</svg>
		</div>
	);
}