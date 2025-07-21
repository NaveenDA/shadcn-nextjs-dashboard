"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import {
	TrendingUp,
	TrendingDown,
	Users,
	DollarSign,
	Activity,
	BarChart3,
	PieChart,
	Download,
	Filter,
	Calendar,
} from "lucide-react";

const metrics = [
	{
		title: "Total Revenue",
		value: "$45,231.89",
		change: "+20.1%",
		trend: "up",
		icon: DollarSign,
		color: "text-emerald-600",
		bgColor: "bg-emerald-50",
	},
	{
		title: "Active Users",
		value: "2,350",
		change: "+180.1%",
		trend: "up",
		icon: Users,
		color: "text-blue-600",
		bgColor: "bg-blue-50",
	},
	{
		title: "Sales",
		value: "12,234",
		change: "+19%",
		trend: "up",
		icon: Activity,
		color: "text-purple-600",
		bgColor: "bg-purple-50",
	},
	{
		title: "Conversion Rate",
		value: "2.4%",
		change: "-4.3%",
		trend: "down",
		icon: TrendingDown,
		color: "text-orange-600",
		bgColor: "bg-orange-50",
	},
];

const topSources = [
	{ name: "Organic Search", value: 45, count: "4,521" },
	{ name: "Direct Traffic", value: 30, count: "3,012" },
	{ name: "Social Media", value: 15, count: "1,508" },
	{ name: "Email Campaign", value: 10, count: "1,005" },
];

const topPages = [
	{ page: "/dashboard", views: "12,453", bounce: "24%", time: "3:42" },
	{ page: "/analytics", views: "8,921", bounce: "18%", time: "4:15" },
	{ page: "/projects", views: "6,782", bounce: "32%", time: "2:38" },
	{ page: "/settings", views: "4,321", bounce: "28%", time: "2:12" },
];

export default function AnalyticsPage() {
	return (
		<div className="space-y-6">
			<div className="flex items-center justify-between">
				<div>
					<h2 className="text-3xl font-bold tracking-tight">Analytics</h2>
					<p className="text-muted-foreground">
						View detailed analytics and insights about your business
						performance.
					</p>
				</div>
				<div className="flex items-center gap-2">
					<Button variant="outline" size="sm">
						<Filter className="h-4 w-4 mr-2" />
						Filter
					</Button>
					<Button variant="outline" size="sm">
						<Calendar className="h-4 w-4 mr-2" />
						Last 30 days
					</Button>
					<Button variant="outline" size="sm">
						<Download className="h-4 w-4 mr-2" />
						Export
					</Button>
				</div>
			</div>

			{/* Metrics Cards */}
			<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
				{metrics.map((metric) => {
					const Icon = metric.icon;
					const TrendIcon = metric.trend === "up" ? TrendingUp : TrendingDown;

					return (
						<Card
							key={metric.title}
							className="hover:shadow-md transition-shadow"
						>
							<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
								<CardTitle className="text-sm font-medium">
									{metric.title}
								</CardTitle>
								<div className={`p-2 rounded-lg ${metric.bgColor}`}>
									<Icon className={`h-4 w-4 ${metric.color}`} />
								</div>
							</CardHeader>
							<CardContent>
								<div className="text-2xl font-bold">{metric.value}</div>
								<div className="flex items-center text-xs">
									<TrendIcon
										className={cn(
											"mr-1 h-3 w-3",
											metric.trend === "up" ? "text-green-600" : "text-red-600",
										)}
									/>
									<span
										className={
											metric.trend === "up" ? "text-green-600" : "text-red-600"
										}
									>
										{metric.change}
									</span>
									<span className="text-muted-foreground ml-1">
										from last month
									</span>
								</div>
							</CardContent>
						</Card>
					);
				})}
			</div>

			{/* Analytics Content */}
			<div className="grid gap-6 lg:grid-cols-3">
				<div className="lg:col-span-2">
					<Tabs defaultValue="overview" className="space-y-4">
						<TabsList className="grid w-full grid-cols-3">
							<TabsTrigger value="overview">Overview</TabsTrigger>
							<TabsTrigger value="revenue">Revenue</TabsTrigger>
							<TabsTrigger value="users">Users</TabsTrigger>
						</TabsList>
						<TabsContent value="overview" className="space-y-4">
							<Card>
								<CardHeader>
									<div className="flex items-center justify-between">
										<CardTitle className="flex items-center gap-2">
											<BarChart3 className="h-5 w-5" />
											Overview Analytics
										</CardTitle>
										<Badge variant="secondary">Live Data</Badge>
									</div>
								</CardHeader>
								<CardContent>
									<div className="h-[300px] flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg border-2 border-dashed border-gray-200">
										<div className="text-center">
											<BarChart3 className="h-12 w-12 text-gray-400 mx-auto mb-2" />
											<p className="text-sm font-medium text-muted-foreground">
												Chart Integration Ready
											</p>
											<p className="text-xs text-muted-foreground">
												Connect your analytics provider
											</p>
										</div>
									</div>
								</CardContent>
							</Card>
						</TabsContent>
						<TabsContent value="revenue" className="space-y-4">
							<Card>
								<CardHeader>
									<div className="flex items-center justify-between">
										<CardTitle className="flex items-center gap-2">
											<DollarSign className="h-5 w-5" />
											Revenue Trends
										</CardTitle>
										<Badge variant="secondary">Updated</Badge>
									</div>
								</CardHeader>
								<CardContent>
									<div className="h-[300px] flex items-center justify-center bg-gradient-to-br from-emerald-50 to-blue-50 rounded-lg border-2 border-dashed border-gray-200">
										<div className="text-center">
											<DollarSign className="h-12 w-12 text-gray-400 mx-auto mb-2" />
											<p className="text-sm font-medium text-muted-foreground">
												Revenue Analytics
											</p>
											<p className="text-xs text-muted-foreground">
												Integrate with your billing system
											</p>
										</div>
									</div>
								</CardContent>
							</Card>
						</TabsContent>
						<TabsContent value="users" className="space-y-4">
							<Card>
								<CardHeader>
									<div className="flex items-center justify-between">
										<CardTitle className="flex items-center gap-2">
											<Users className="h-5 w-5" />
											User Analytics
										</CardTitle>
										<Badge variant="secondary">Real-time</Badge>
									</div>
								</CardHeader>
								<CardContent>
									<div className="h-[300px] flex items-center justify-center bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg border-2 border-dashed border-gray-200">
										<div className="text-center">
											<Users className="h-12 w-12 text-gray-400 mx-auto mb-2" />
											<p className="text-sm font-medium text-muted-foreground">
												User Behavior Analytics
											</p>
											<p className="text-xs text-muted-foreground">
												Connect user tracking service
											</p>
										</div>
									</div>
								</CardContent>
							</Card>
						</TabsContent>
					</Tabs>
				</div>

				<div className="space-y-6">
					{/* Traffic Sources */}
					<Card>
						<CardHeader>
							<CardTitle className="flex items-center gap-2">
								<PieChart className="h-5 w-5" />
								Traffic Sources
							</CardTitle>
						</CardHeader>
						<CardContent className="space-y-4">
							{topSources.map((source) => (
								<div key={source.name} className="space-y-2">
									<div className="flex items-center justify-between text-sm">
										<span className="font-medium">{source.name}</span>
										<span className="text-muted-foreground">
											{source.count}
										</span>
									</div>
									<Progress value={source.value} className="h-2" />
									<div className="text-right text-xs text-muted-foreground">
										{source.value}%
									</div>
								</div>
							))}
						</CardContent>
					</Card>

					{/* Top Pages */}
					<Card>
						<CardHeader>
							<CardTitle>Top Pages</CardTitle>
						</CardHeader>
						<CardContent>
							<div className="space-y-3">
								{topPages.map((page) => (
									<div
										key={page.page}
										className="flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
									>
										<div className="flex-1">
											<p className="text-sm font-medium">{page.page}</p>
											<div className="flex items-center gap-4 text-xs text-muted-foreground mt-1">
												<span>{page.views} views</span>
												<span>{page.bounce} bounce</span>
												<span>{page.time} avg</span>
											</div>
										</div>
									</div>
								))}
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	);
}
