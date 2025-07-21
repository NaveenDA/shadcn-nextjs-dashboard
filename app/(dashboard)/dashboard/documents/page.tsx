"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
	FileText,
	Folder,
	Search,
	MoreHorizontal,
	Download,
	Trash2,
	Share2,
} from "lucide-react";

const documents = [
	{
		id: 1,
		name: "Project Proposal.pdf",
		type: "PDF",
		size: "2.4 MB",
		lastModified: "2 hours ago",
		folder: "Projects",
	},
	{
		id: 2,
		name: "User Research Data.xlsx",
		type: "Excel",
		size: "1.8 MB",
		lastModified: "1 day ago",
		folder: "Research",
	},
	{
		id: 3,
		name: "Design Mockups.sketch",
		type: "Sketch",
		size: "15.2 MB",
		lastModified: "3 days ago",
		folder: "Design",
	},
	{
		id: 4,
		name: "Meeting Notes.docx",
		type: "Word",
		size: "0.8 MB",
		lastModified: "1 week ago",
		folder: "Meetings",
	},
	{
		id: 5,
		name: "Budget Report.pdf",
		type: "PDF",
		size: "3.1 MB",
		lastModified: "2 weeks ago",
		folder: "Finance",
	},
];

const folders = [
	{ name: "Projects", count: 12 },
	{ name: "Research", count: 8 },
	{ name: "Design", count: 15 },
	{ name: "Meetings", count: 6 },
	{ name: "Finance", count: 4 },
];

export default function DocumentsPage() {
	return (
		<div className="space-y-6">
			<div>
				<h1 className="text-3xl font-bold">Documents</h1>
				<p className="text-muted-foreground">
					Manage and organize your documents and files.
				</p>
			</div>

			<div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
				<div className="relative flex-1 max-w-sm">
					<Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
					<Input placeholder="Search documents..." className="pl-10" />
				</div>
				<Button>
					<FileText className="mr-2 h-4 w-4" />
					Upload Document
				</Button>
			</div>

			<div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
				<div className="lg:col-span-1">
					<Card>
						<CardContent className="p-4">
							<h3 className="font-semibold mb-4">Folders</h3>
							<div className="space-y-2">
								{folders.map((folder) => (
									<div
										key={folder.name}
										className="flex items-center justify-between p-2 rounded-lg hover:bg-muted cursor-pointer"
									>
										<div className="flex items-center gap-2">
											<Folder className="h-4 w-4 text-blue-500" />
											<span className="text-sm">{folder.name}</span>
										</div>
										<Badge variant="secondary" className="text-xs">
											{folder.count}
										</Badge>
									</div>
								))}
							</div>
						</CardContent>
					</Card>
				</div>

				<div className="lg:col-span-3">
					<Card>
						<CardContent className="p-6">
							<h3 className="font-semibold mb-4">Recent Documents</h3>
							<div className="space-y-4">
								{documents.map((doc) => (
									<div key={doc.id}>
										<div className="flex items-center justify-between p-3 rounded-lg hover:bg-muted">
											<div className="flex items-center gap-3">
												<div className="p-2 rounded-lg bg-blue-100">
													<FileText className="h-5 w-5 text-blue-600" />
												</div>
												<div>
													<p className="font-medium">{doc.name}</p>
													<div className="flex items-center gap-4 text-sm text-muted-foreground">
														<span>{doc.type}</span>
														<span>{doc.size}</span>
														<span>{doc.lastModified}</span>
														<span className="text-blue-600">{doc.folder}</span>
													</div>
												</div>
											</div>
											<DropdownMenu>
												<DropdownMenuTrigger asChild>
													<Button variant="ghost" size="icon">
														<MoreHorizontal className="h-4 w-4" />
													</Button>
												</DropdownMenuTrigger>
												<DropdownMenuContent align="end">
													<DropdownMenuItem>
														<Download className="mr-2 h-4 w-4" />
														Download
													</DropdownMenuItem>
													<DropdownMenuItem>
														<Share2 className="mr-2 h-4 w-4" />
														Share
													</DropdownMenuItem>
													<DropdownMenuItem className="text-red-600">
														<Trash2 className="mr-2 h-4 w-4" />
														Delete
													</DropdownMenuItem>
												</DropdownMenuContent>
											</DropdownMenu>
										</div>
										<Separator className="mt-4" />
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
