"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
	Activity, 
	CreditCard, 
	DollarSign, 
	Users, 
	TrendingUp, 
	TrendingDown,
	BarChart3,
	PieChart,
	Calendar,
	Clock
} from "lucide-react";
import { AreaChart } from "@/components/charts/area-chart";
import { BarChart } from "@/components/charts/bar-chart";
import { DonutChart } from "@/components/charts/donut-chart";

const stats = [
	{
		title: "Total Revenue",
		value: "$45,231.89",
		icon: DollarSign,
		description: "+20.1% from last month",
		trend: "up",
		color: "text-emerald-600",
		bgColor: "bg-emerald-50",
	},
	{
		title: "Subscriptions",
		value: "+2,350",
		icon: Users,
		description: "+180.1% from last month",
		trend: "up",
		color: "text-blue-600",
		bgColor: "bg-blue-50",
	},
	{
		title: "Sales",
		value: "+12,234",
		icon: CreditCard,
		description: "+19% from last month",
		trend: "up",
		color: "text-purple-600",
		bgColor: "bg-purple-50",
	},
	{
		title: "Active Now",
		value: "+573",
		icon: Activity,
		description: "+201 since last hour",
		trend: "up",
		color: "text-orange-600",
		bgColor: "bg-orange-50",
	},
];

const recentActivities = [
	{ id: 1, user: "John Doe", action: "Created new project", time: "2 minutes ago" },
	{ id: 2, user: "Jane Smith", action: "Updated dashboard settings", time: "5 minutes ago" },
	{ id: 3, user: "Mike Johnson", action: "Uploaded 3 documents", time: "10 minutes ago" },
	{ id: 4, user: "Sarah Wilson", action: "Joined team meeting", time: "15 minutes ago" },
];

const projectProgress = [
	{ name: "Website Redesign", progress: 75, status: "In Progress", color: "bg-blue-500" },
	{ name: "Mobile App", progress: 45, status: "Development", color: "bg-orange-500" },
	{ name: "API Integration", progress: 90, status: "Review", color: "bg-emerald-500" },
	{ name: "Database Migration", progress: 30, status: "Planning", color: "bg-purple-500" },
];

const revenueData = [
	{ label: "Jan", value: 12000 },
	{ label: "Feb", value: 19000 },
	{ label: "Mar", value: 3000 },
	{ label: "Apr", value: 5000 },
	{ label: "May", value: 28000 },
	{ label: "Jun", value: 45000 },
];

const salesData = [
	{ label: "Mon", value: 120 },
	{ label: "Tue", value: 190 },
	{ label: "Wed", value: 300 },
	{ label: "Thu", value: 500 },
	{ label: "Fri", value: 280 },
	{ label: "Sat", value: 450 },
	{ label: "Sun", value: 320 },
];

const userDemographics = [
	{ label: "Desktop", value: 45, color: "#8b5cf6" },
	{ label: "Mobile", value: 35, color: "#3b82f6" },
	{ label: "Tablet", value: 20, color: "#10b981" },
];

export default function DashboardPage() {
	return (
		<div className="space-y-6">
			<div className="flex items-center justify-between">
				<h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
				<div className="flex items-center gap-2">
					<Badge variant="outline" className="flex items-center gap-1">
						<Calendar className="h-3 w-3" />
						Today
					</Badge>
					<Badge variant="outline" className="flex items-center gap-1">
						<Clock className="h-3 w-3" />
						Live Data
					</Badge>
				</div>
			</div>

			{/* Stats Cards */}
			<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
				{stats.map((stat) => {
					const Icon = stat.icon;
					const TrendIcon = stat.trend === "up" ? TrendingUp : TrendingDown;

					return (
						<Card key={stat.title} className="hover:shadow-md transition-shadow">
							<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
								<CardTitle className="text-sm font-medium">
									{stat.title}
								</CardTitle>
								<div className={`p-2 rounded-lg ${stat.bgColor}`}>
									<Icon className={`h-4 w-4 ${stat.color}`} />
								</div>
							</CardHeader>
							<CardContent>
								<div className="text-2xl font-bold">{stat.value}</div>
								<div className="flex items-center gap-1 text-xs text-muted-foreground">
									<TrendIcon className={`h-3 w-3 ${stat.color}`} />
									{stat.description}
								</div>
							</CardContent>
						</Card>
					);
				})}
			</div>

			<div className="grid gap-6 xl:grid-cols-3">
				{/* Recent Activity */}
				<Card className="xl:col-span-2">
					<CardHeader>
						<div className="flex items-center justify-between">
							<CardTitle className="flex items-center gap-2">
								<Activity className="h-5 w-5" />
								Recent Activity
							</CardTitle>
							<Badge variant="secondary">Live</Badge>
						</div>
					</CardHeader>
					<CardContent>
						<div className="space-y-4">
							{recentActivities.map((activity) => (
								<div key={activity.id} className="flex items-center justify-between p-3 rounded-lg bg-gray-50/50 hover:bg-gray-100/50 transition-colors">
									<div className="flex items-center gap-3">
										<div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-sm font-medium">
											{activity.user.split(' ').map(n => n[0]).join('')}
										</div>
										<div>
											<p className="text-sm font-medium">{activity.user}</p>
											<p className="text-xs text-muted-foreground">{activity.action}</p>
										</div>
									</div>
									<p className="text-xs text-muted-foreground">{activity.time}</p>
								</div>
							))}
						</div>
					</CardContent>
				</Card>

				{/* Project Progress */}
				<Card>
					<CardHeader>
						<CardTitle className="flex items-center gap-2">
							<BarChart3 className="h-5 w-5" />
							Project Progress
						</CardTitle>
					</CardHeader>
					<CardContent>
						<div className="space-y-4">
							{projectProgress.map((project) => (
								<div key={project.name} className="space-y-2">
									<div className="flex items-center justify-between text-sm">
										<span className="font-medium">{project.name}</span>
										<span className="text-muted-foreground">{project.progress}%</span>
									</div>
									<Progress value={project.progress} className="h-2" />
									<div className="flex items-center justify-between">
										<Badge variant="outline" className="text-xs">
											{project.status}
										</Badge>
									</div>
								</div>
							))}
						</div>
					</CardContent>
				</Card>
			</div>

			{/* Interactive Charts */}
			<div className="space-y-6">
				{/* Revenue Area Chart */}
				<Card>
					<CardHeader>
						<CardTitle className="flex items-center gap-2">
							<BarChart3 className="h-5 w-5" />
							Revenue Analytics
						</CardTitle>
					</CardHeader>
					<CardContent>
						<AreaChart 
							data={revenueData} 
							height={250} 
							color="#8b5cf6" 
							gradient={true} 
						/>
					</CardContent>
				</Card>

				<div className="grid gap-6 md:grid-cols-2">
					{/* Sales Bar Chart */}
					<Card>
						<CardHeader>
							<CardTitle className="flex items-center gap-2">
								<BarChart3 className="h-5 w-5" />
								Weekly Sales
							</CardTitle>
						</CardHeader>
						<CardContent>
							<BarChart data={salesData} height={250} />
						</CardContent>
					</Card>

					{/* User Demographics Donut Chart */}
					<Card>
						<CardHeader>
							<CardTitle className="flex items-center gap-2">
								<PieChart className="h-5 w-5" />
								User Demographics
							</CardTitle>
						</CardHeader>
						<CardContent className="flex justify-center">
							<DonutChart 
								data={userDemographics} 
								size={250} 
								innerRadius={70} 
							/>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	);
}
