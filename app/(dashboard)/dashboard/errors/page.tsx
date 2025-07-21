import Link from "next/link";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
	AlertTriangle,
	Search,
	Server,
	Shield,
	Lock,
	Wrench,
	ArrowRight,
} from "lucide-react";

const errorPages = [
	{
		title: "404 Not Found",
		description:
			"Automatically shown when users try to access a non-existent page",
		href: "/error/404",
		status: "Ready",
		icon: Search,
		color: "text-gray-500",
		bgColor: "bg-gray-100",
	},
	{
		title: "401 Unauthorized",
		description: "Authentication required - when users need to log in",
		href: "/error/401",
		status: "Ready",
		icon: Shield,
		color: "text-yellow-600",
		bgColor: "bg-yellow-100",
	},
	{
		title: "403 Forbidden",
		description: "Access denied - when users don't have permission",
		href: "/error/403",
		status: "Ready",
		icon: Lock,
		color: "text-red-500",
		bgColor: "bg-red-100",
	},
	{
		title: "500 Server Error",
		description: "Server-side error with unique design and support options",
		href: "/error/500",
		status: "Ready",
		icon: Server,
		color: "text-red-500",
		bgColor: "bg-red-100",
	},
	{
		title: "Maintenance",
		description: "Scheduled maintenance with downtime information",
		href: "/error/maintenance",
		status: "Ready",
		icon: Wrench,
		color: "text-blue-600",
		bgColor: "bg-blue-100",
	},
	{
		title: "Generic Error",
		description: "General error page - for unexpected client-side errors",
		href: "/dashboard/errors",
		status: "Ready",
		icon: AlertTriangle,
		color: "text-red-500",
		bgColor: "bg-red-100",
		note: "Triggered automatically by React error boundaries",
	},
];

export default function ErrorsPage() {
	return (
		<div className="space-y-6">
			<div>
				<h1 className="text-3xl font-bold">Error Pages</h1>
				<p className="text-muted-foreground">
					A collection of uniquely designed error pages for different scenarios.
					Each page has its own style and purpose.
				</p>
			</div>

			<Separator />

			<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
				{errorPages.map((page) => {
					const IconComponent = page.icon;
					return (
						<Card key={page.title} className="group">
							<CardHeader>
								<div className="flex items-start justify-between">
									<div
										className={`flex h-12 w-12 items-center justify-center rounded-lg ${page.bgColor}`}
									>
										<IconComponent className={`h-6 w-6 ${page.color}`} />
									</div>
									<Badge
										variant={page.status === "Ready" ? "default" : "secondary"}
									>
										{page.status}
									</Badge>
								</div>
								<CardTitle className="mt-4 text-lg">{page.title}</CardTitle>
								<CardDescription className="text-sm">
									{page.description}
								</CardDescription>
							</CardHeader>
							<CardContent>
								<div className="space-y-3">
									{page.note && (
										<p className="text-xs text-muted-foreground bg-muted p-2 rounded">
											{page.note}
										</p>
									)}
									{page.href !== "/dashboard/errors" ? (
										<Button asChild className="w-full" variant="outline">
											<Link href={page.href}>
												<ArrowRight className="mr-2 h-4 w-4" />
												View Error Page
											</Link>
										</Button>
									) : (
										<p className="text-xs text-muted-foreground text-center">
											Automatic - no manual testing needed
										</p>
									)}
								</div>
							</CardContent>
						</Card>
					);
				})}
			</div>

			<Separator />
		</div>
	);
}
