"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
	LayoutDashboard,
	Settings,
	Users,
	BarChart3,
	FolderKanban,
	ChevronLeft,
	ChevronRight,
	FileText,
	Calendar,
	Database,
	MessageSquare,
	Shield,
	HelpCircle,
	LogIn,
	AlertCircle,
	Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const sidebarGroups = [
	{
		title: "General",
		items: [
			{
				title: "Dashboard",
				href: "/dashboard",
				icon: LayoutDashboard,
				badge: null,
			},
			{
				title: "Analytics",
				href: "/dashboard/analytics",
				icon: BarChart3,
				badge: "New",
			},
			{
				title: "Settings",
				href: "/dashboard/settings",
				icon: Settings,
				badge: null,
			},
		],
	},
	{
		title: "Pages",
		items: [
			{
				title: "Users",
				href: "/dashboard/users",
				icon: Users,
				badge: "12",
			},
			{
				title: "Projects",
				href: "/dashboard/projects",
				icon: FolderKanban,
				badge: null,
			},
			{
				title: "Documents",
				href: "/dashboard/documents",
				icon: FileText,
				badge: null,
			},
			{
				title: "Calendar",
				href: "/dashboard/calendar",
				icon: Calendar,
				badge: "3",
			},
			{
				title: "Auth Pages",
				href: "/dashboard/auth",
				icon: LogIn,
				badge: null,
			},
			{
				title: "Error Pages",
				href: "/dashboard/errors",
				icon: AlertCircle,
				badge: null,
			},
		],
	},
	{
		title: "Others",
		items: [
			{
				title: "Messages",
				href: "/dashboard/messages",
				icon: MessageSquare,
				badge: "5",
			},
			{
				title: "Database",
				href: "/dashboard/database",
				icon: Database,
				badge: null,
			},
			{
				title: "Security",
				href: "/dashboard/security",
				icon: Shield,
				badge: "!",
			},
			{
				title: "Help",
				href: "/dashboard/help",
				icon: HelpCircle,
				badge: null,
			},
		],
	},
];

interface SidebarProps {
	onMobileClose?: () => void;
}

export function Sidebar({ onMobileClose }: SidebarProps) {
	const pathname = usePathname();
	const [isCollapsed, setIsCollapsed] = useState(false);

	const handleLinkClick = () => {
		if (onMobileClose) {
			onMobileClose();
		}
	};

	return (
		<div
			className={cn(
				"flex h-full flex-col border-r bg-card transition-all duration-300",
				isCollapsed ? "w-16" : "w-64",
			)}
		>
			{/* Logo */}
			<div className="flex h-14 items-center border-b px-4 justify-between">
				{!isCollapsed && (
					<Link href="/dashboard" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
						<div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
							<Sparkles className="w-4 h-4 text-white" />
						</div>
						<span className="text-xl font-bold">DashboardOS</span>
					</Link>
				)}
				{isCollapsed && (
					<Link href="/dashboard" className="flex items-center justify-center hover:opacity-80 transition-opacity">
						<div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
							<Sparkles className="w-4 h-4 text-white" />
						</div>
					</Link>
				)}
				<Button
					variant="ghost"
					size="icon"
					className="h-8 w-8 hover:bg-accent"
					onClick={() => setIsCollapsed(!isCollapsed)}
				>
					{isCollapsed ? (
						<ChevronRight className="h-4 w-4" />
					) : (
						<ChevronLeft className="h-4 w-4" />
					)}
				</Button>
			</div>

			{/* Navigation Groups */}
			<nav className="flex-1 space-y-6 p-4">
				{sidebarGroups.map((group) => (
					<div key={group.title} className="space-y-2">
						{/* Group Title */}
						{!isCollapsed && (
							<h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-3">
								{group.title}
							</h3>
						)}

						{/* Group Items */}
						<div className="space-y-1">
							{group.items.map((item) => {
								const isActive = pathname === item.href;
								const Icon = item.icon;

								return (
									<Link
										key={item.href}
										href={item.href}
										onClick={handleLinkClick}
										className={cn(
											"flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all hover:bg-accent hover:text-accent-foreground group",
											isActive ? "bg-accent text-accent-foreground" : "text-muted-foreground hover:text-foreground",
											isCollapsed && "justify-center px-2 py-3",
										)}
										title={isCollapsed ? item.title : undefined}
									>
										<Icon
											className={cn(
												"transition-all group-hover:scale-110",
												isCollapsed ? "h-6 w-6" : "h-4 w-4",
											)}
										/>
										{!isCollapsed && (
											<div className="flex items-center justify-between flex-1">
												<span>{item.title}</span>
												{item.badge && (
													<Badge 
														variant={item.badge === "!" ? "destructive" : item.badge === "New" ? "secondary" : "outline"} 
														className="text-xs px-1.5 py-0.5 min-w-[20px] h-5 flex items-center justify-center"
													>
														{item.badge}
													</Badge>
												)}
											</div>
										)}
									</Link>
								);
							})}
						</div>
					</div>
				))}
			</nav>
		</div>
	);
}
