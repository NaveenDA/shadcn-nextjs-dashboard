"use client";

import { useState } from "react";

interface DataPoint {
	label: string;
	value: number;
	color?: string;
}

interface DonutChartProps {
	data: DataPoint[];
	size?: number;
	innerRadius?: number;
}

export function DonutChart({ 
	data, 
	size = 200, 
	innerRadius = 60 
}: DonutChartProps) {
	const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
	
	const colors = [
		"#8b5cf6", "#3b82f6", "#10b981", "#f59e0b", 
		"#ef4444", "#ec4899", "#06b6d4", "#84cc16"
	];
	
	const total = data.reduce((sum, item) => sum + item.value, 0);
	const center = size / 2;
	const radius = size / 2 - 20;
	
	let cumulativeAngle = 0;
	const segments = data.map((item, index) => {
		const percentage = item.value / total;
		const angle = percentage * 2 * Math.PI;
		const startAngle = cumulativeAngle;
		const endAngle = cumulativeAngle + angle;
		
		const x1 = center + Math.cos(startAngle) * radius;
		const y1 = center + Math.sin(startAngle) * radius;
		const x2 = center + Math.cos(endAngle) * radius;
		const y2 = center + Math.sin(endAngle) * radius;
		
		const x3 = center + Math.cos(startAngle) * innerRadius;
		const y3 = center + Math.sin(startAngle) * innerRadius;
		const x4 = center + Math.cos(endAngle) * innerRadius;
		const y4 = center + Math.sin(endAngle) * innerRadius;
		
		const largeArcFlag = angle > Math.PI ? 1 : 0;
		
		const pathData = [
			`M ${x1} ${y1}`,
			`A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2}`,
			`L ${x4} ${y4}`,
			`A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 0 ${x3} ${y3}`,
			`Z`
		].join(' ');
		
		cumulativeAngle = endAngle;
		
		return {
			...item,
			pathData,
			percentage,
			color: item.color || colors[index % colors.length],
			startAngle,
			endAngle,
			midAngle: (startAngle + endAngle) / 2
		};
	});
	
	const hoveredSegment = hoveredIndex !== null ? segments[hoveredIndex] : null;
	
	return (
		<div className="flex items-center gap-8">
			<div className="relative">
				<svg width={size} height={size}>
					{segments.map((segment, index) => (
						<path
							key={index}
							d={segment.pathData}
							fill={segment.color}
							className={`cursor-pointer transition-all duration-200 ${
								hoveredIndex === index 
									? 'opacity-90 drop-shadow-lg scale-105' 
									: 'opacity-80'
							}`}
							style={{
								transformOrigin: `${center}px ${center}px`
							}}
							onMouseEnter={() => setHoveredIndex(index)}
							onMouseLeave={() => setHoveredIndex(null)}
						/>
					))}
					
					{/* Center text */}
					<text
						x={center}
						y={center - 5}
						textAnchor="middle"
						className="text-2xl font-bold fill-foreground"
					>
						{hoveredSegment ? hoveredSegment.value : total}
					</text>
					<text
						x={center}
						y={center + 15}
						textAnchor="middle"
						className="text-xs fill-muted-foreground"
					>
						{hoveredSegment ? hoveredSegment.label : 'Total'}
					</text>
				</svg>
			</div>
			
			{/* Legend */}
			<div className="space-y-2">
				{segments.map((segment, index) => (
					<div
						key={index}
						className={`flex items-center gap-2 cursor-pointer p-2 rounded transition-colors ${
							hoveredIndex === index ? 'bg-muted/50' : ''
						}`}
						onMouseEnter={() => setHoveredIndex(index)}
						onMouseLeave={() => setHoveredIndex(null)}
					>
						<div
							className="w-3 h-3 rounded-full"
							style={{ backgroundColor: segment.color }}
						/>
						<div className="flex-1">
							<div className="text-sm font-medium">{segment.label}</div>
							<div className="text-xs text-muted-foreground">
								{segment.value} ({Math.round(segment.percentage * 100)}%)
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}