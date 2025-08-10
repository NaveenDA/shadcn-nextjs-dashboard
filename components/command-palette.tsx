"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
	Command,
	CommandDialog,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from "@/components/ui/command";
import {
	Calculator,
	Calendar,
	CreditCard,
	Settings,
	Smile,
	User,
	BarChart3,
	Users,
	FolderKanban,
	FileText,
	Database,
	MessageSquare,
	Shield,
	HelpCircle,
	LogIn,
	AlertCircle,
	LayoutDashboard,
	Search,
} from "lucide-react";

interface CommandPaletteProps {
	open: boolean;
	onOpenChange: (open: boolean) => void;
}

const commands = [
	{
		group: "Navigation",
		items: [
			{
				icon: LayoutDashboard,
				label: "Dashboard",
				shortcut: "⌘D",
				href: "/dashboard",
			},
			{
				icon: BarChart3,
				label: "Analytics",
				shortcut: "⌘A",
				href: "/dashboard/analytics",
			},
			{
				icon: Users,
				label: "Users",
				shortcut: "⌘U",
				href: "/dashboard/users",
			},
			{
				icon: FolderKanban,
				label: "Projects",
				shortcut: "⌘P",
				href: "/dashboard/projects",
			},
			{
				icon: FileText,
				label: "Documents",
				shortcut: "⌘⇧D",
				href: "/dashboard/documents",
			},
			{
				icon: Calendar,
				label: "Calendar",
				shortcut: "⌘C",
				href: "/dashboard/calendar",
			},
			{
				icon: MessageSquare,
				label: "Messages",
				shortcut: "⌘M",
				href: "/dashboard/messages",
			},
		],
	},
	{
		group: "Settings",
		items: [
			{
				icon: Settings,
				label: "Account Settings",
				href: "/dashboard/settings/account",
			},
			{
				icon: Settings,
				label: "Appearance",
				href: "/dashboard/settings/appearance",
			},
			{
				icon: Shield,
				label: "Security",
				href: "/dashboard/security",
			},
		],
	},
	{
		group: "Help",
		items: [
			{
				icon: HelpCircle,
				label: "Help Center",
				href: "/dashboard/help",
			},
			{
				icon: AlertCircle,
				label: "Report Issue",
				action: "report",
			},
		],
	},
	{
		group: "Actions",
		items: [
			{
				icon: User,
				label: "Add New User",
				action: "add-user",
			},
			{
				icon: FolderKanban,
				label: "Create Project",
				action: "create-project",
			},
			{
				icon: FileText,
				label: "New Document",
				action: "new-document",
			},
		],
	},
];

export function CommandPalette({ open, onOpenChange }: CommandPaletteProps) {
	const [search, setSearch] = useState("");
	const router = useRouter();

	useEffect(() => {
		const down = (e: KeyboardEvent) => {
			if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
				e.preventDefault();
				onOpenChange(!open);
			}
		};

		document.addEventListener("keydown", down);
		return () => document.removeEventListener("keydown", down);
	}, [open, onOpenChange]);

	const runCommand = (href?: string, action?: string) => {
		onOpenChange(false);
		
		if (href) {
			router.push(href);
		} else if (action) {
			// Handle actions
			switch (action) {
				case "report":
					console.log("Opening report issue dialog");
					break;
				case "add-user":
					console.log("Opening add user dialog");
					break;
				case "create-project":
					console.log("Opening create project dialog");
					break;
				case "new-document":
					console.log("Opening new document dialog");
					break;
				default:
					break;
			}
		}
	};

	return (
		<CommandDialog open={open} onOpenChange={onOpenChange}>
			<CommandInput placeholder="Type a command or search..." />
			<CommandList>
				<CommandEmpty>No results found.</CommandEmpty>
				{commands.map((group) => (
					<CommandGroup key={group.group} heading={group.group}>
						{group.items.map((item) => (
							<CommandItem
								key={item.label}
								onSelect={() => runCommand(item.href, item.action)}
								className="cursor-pointer"
							>
								<item.icon className="mr-2 h-4 w-4" />
								<span>{item.label}</span>
								{item.shortcut && (
									<Badge variant="outline" className="ml-auto text-xs">
										{item.shortcut}
									</Badge>
								)}
							</CommandItem>
						))}
					</CommandGroup>
				))}
			</CommandList>
		</CommandDialog>
	);
}