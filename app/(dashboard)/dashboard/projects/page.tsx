"use client";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Plus, Calendar, Users, ArrowUpRight } from "lucide-react";

const projects = [
	{
		id: 1,
		name: "E-commerce Platform",
		description: "Building a modern e-commerce platform with React and Node.js",
		progress: 75,
		status: "In Progress",
		team: ["JD", "MK", "AL"],
		dueDate: "2024-04-15",
		priority: "High",
	},
	{
		id: 2,
		name: "Mobile App Redesign",
		description: "Redesigning the mobile app for better user experience",
		progress: 45,
		status: "In Progress",
		team: ["SM", "RK"],
		dueDate: "2024-05-01",
		priority: "Medium",
	},
	{
		id: 3,
		name: "API Integration",
		description: "Integrating third-party APIs for payment processing",
		progress: 90,
		status: "Almost Done",
		team: ["JD", "AL"],
		dueDate: "2024-03-30",
		priority: "High",
	},
	{
		id: 4,
		name: "Database Migration",
		description: "Migrating from MySQL to PostgreSQL",
		progress: 30,
		status: "In Progress",
		team: ["MK", "SM"],
		dueDate: "2024-06-15",
		priority: "Low",
	},
	{
		id: 5,
		name: "Security Audit",
		description: "Conducting comprehensive security audit",
		progress: 100,
		status: "Completed",
		team: ["RK", "AL"],
		dueDate: "2024-03-20",
		priority: "High",
	},
	{
		id: 6,
		name: "Performance Optimization",
		description: "Optimizing application performance and load times",
		progress: 60,
		status: "In Progress",
		team: ["JD", "MK", "SM"],
		dueDate: "2024-04-30",
		priority: "Medium",
	},
];

export default function ProjectsPage() {
	return (
		<div className="space-y-6">
			<div className="flex items-center justify-between">
				<div>
					<h2 className="text-3xl font-bold tracking-tight">Projects</h2>
					<p className="text-muted-foreground">
						Manage and track your project progress.
					</p>
				</div>
				<Button className="flex items-center gap-2">
					<Plus className="h-4 w-4" />
					New Project
				</Button>
			</div>

			<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
				{projects.map((project) => (
					<Card key={project.id} className="hover:shadow-lg transition-shadow">
						<CardHeader>
							<div className="flex items-start justify-between">
								<div>
									<CardTitle className="text-lg">{project.name}</CardTitle>
									<CardDescription className="mt-2">
										{project.description}
									</CardDescription>
								</div>
								<ArrowUpRight className="h-5 w-5 text-muted-foreground" />
							</div>
						</CardHeader>
						<CardContent className="space-y-4">
							<div className="flex items-center justify-between">
								<span className="text-sm text-muted-foreground">Progress</span>
								<span className="text-sm font-medium">{project.progress}%</span>
							</div>
							<Progress value={project.progress} className="h-2" />

							<div className="flex items-center justify-between">
								<Badge
									variant={
										project.status === "Completed"
											? "default"
											: project.status === "Almost Done"
												? "secondary"
												: "outline"
									}
								>
									{project.status}
								</Badge>
								<Badge
									variant={
										project.priority === "High"
											? "destructive"
											: project.priority === "Medium"
												? "default"
												: "secondary"
									}
								>
									{project.priority}
								</Badge>
							</div>

							<div className="flex items-center justify-between text-sm text-muted-foreground">
								<div className="flex items-center gap-1">
									<Calendar className="h-4 w-4" />
									<span>
										Due {new Date(project.dueDate).toLocaleDateString()}
									</span>
								</div>
								<div className="flex items-center gap-1">
									<Users className="h-4 w-4" />
									<span>{project.team.length} members</span>
								</div>
							</div>

							<div className="flex items-center gap-2">
								<div className="flex -space-x-2">
									{project.team.map((member) => (
										<Avatar
											key={member}
											className="h-8 w-8 border-2 border-background"
										>
											<AvatarFallback className="text-xs bg-blue-100 text-blue-600">
												{member}
											</AvatarFallback>
										</Avatar>
									))}
								</div>
							</div>
						</CardContent>
					</Card>
				))}
			</div>
		</div>
	);
}
