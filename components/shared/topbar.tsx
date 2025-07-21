"use client";
import { Bell, Search, Users, Settings, HelpCircle, LogIn, Menu } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AppSwitcher } from "./app-switcher";
import { ThemeToggle } from "@/components/theme-toggle";

interface TopbarProps {
	onMobileMenuClick?: () => void;
}

export function Topbar({ onMobileMenuClick }: TopbarProps) {
	return (
		<div className="flex h-14 items-center justify-between border-b px-4 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			{/* Mobile menu button */}
			<Button
				variant="ghost"
				size="icon"
				className="lg:hidden"
				onClick={onMobileMenuClick}
				aria-label="Open menu"
			>
				<Menu className="h-5 w-5" />
			</Button>

			{/* Search */}
			<div className="flex items-center max-w-xl flex-1">
				<div className="relative w-full max-w-sm">
					<Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
					<Input
						type="search"
						placeholder="Search..."
						className="pl-8 pr-4 bg-muted/50 border-none focus:bg-background focus:ring-2 focus:ring-ring transition-all"
					/>
				</div>
			</div>

			{/* Right Section */}
			<div className="flex items-center gap-4">
				{/* App Switcher */}
				<AppSwitcher />

				{/* Theme Toggle */}
				<ThemeToggle />

				{/* Notifications */}
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button
							variant="ghost"
							size="icon"
							className="relative hover:bg-accent"
							aria-label="Notifications"
						>
							<Bell className="h-5 w-5" />
							<span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-600 animate-pulse" />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent className="w-80" align="end" forceMount>
						<DropdownMenuLabel>Notifications</DropdownMenuLabel>
						<DropdownMenuSeparator />
						<div className="space-y-2 p-2">
							<div className="flex items-start gap-3 p-2 rounded-lg hover:bg-accent transition-colors cursor-pointer">
								<div className="w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
								<div className="flex-1">
									<p className="text-sm font-medium">New user registered</p>
									<p className="text-xs text-muted-foreground">John Doe joined your team</p>
									<p className="text-xs text-muted-foreground">2 minutes ago</p>
								</div>
							</div>
							<div className="flex items-start gap-3 p-2 rounded-lg hover:bg-accent transition-colors cursor-pointer">
								<div className="w-2 h-2 rounded-full bg-green-500 mt-2"></div>
								<div className="flex-1">
									<p className="text-sm font-medium">Project completed</p>
									<p className="text-xs text-muted-foreground">Website redesign finished</p>
									<p className="text-xs text-muted-foreground">5 minutes ago</p>
								</div>
							</div>
							<div className="flex items-start gap-3 p-2 rounded-lg hover:bg-accent transition-colors cursor-pointer">
								<div className="w-2 h-2 rounded-full bg-orange-500 mt-2"></div>
								<div className="flex-1">
									<p className="text-sm font-medium">Security alert</p>
									<p className="text-xs text-muted-foreground">New login from unknown device</p>
									<p className="text-xs text-muted-foreground">1 hour ago</p>
								</div>
							</div>
						</div>
						<DropdownMenuSeparator />
						<div className="p-2">
							<Button variant="ghost" className="w-full text-sm">
								View all notifications
							</Button>
						</div>
					</DropdownMenuContent>
				</DropdownMenu>

				{/* Profile */}
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="ghost" className="relative h-8 w-8 rounded-full">
							<Avatar className="h-8 w-8 ring-2 ring-offset-2 ring-offset-background hover:ring-ring transition-all">
								<AvatarImage src="/avatar.png" alt="User" />
								<AvatarFallback className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">JD</AvatarFallback>
							</Avatar>
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent className="w-56" align="end" forceMount>
						<DropdownMenuLabel className="font-normal">
							<div className="flex flex-col space-y-1">
								<p className="text-sm font-medium leading-none">John Doe</p>
								<p className="text-xs leading-none text-muted-foreground">
									john.doe@example.com
								</p>
							</div>
						</DropdownMenuLabel>
						<DropdownMenuSeparator />
						<DropdownMenuItem className="cursor-pointer">
							<Users className="mr-2 h-4 w-4" />
							Profile
						</DropdownMenuItem>
						<DropdownMenuItem className="cursor-pointer">
							<Settings className="mr-2 h-4 w-4" />
							Settings
						</DropdownMenuItem>
						<DropdownMenuItem className="cursor-pointer">
							<HelpCircle className="mr-2 h-4 w-4" />
							Help & Support
						</DropdownMenuItem>
						<DropdownMenuSeparator />
						<DropdownMenuItem className="text-red-600 cursor-pointer">
							<LogIn className="mr-2 h-4 w-4" />
							Log out
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
		</div>
	);
}
