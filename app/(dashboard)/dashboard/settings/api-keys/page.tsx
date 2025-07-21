"use client";

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import { Plus, MoreHorizontal, Copy, Trash2, Eye } from "lucide-react";

const apiKeys = [
	{
		id: 1,
		name: "Production Key",
		token: "prod_sk_************************1234",
		created: "2023-10-21",
		lastUsed: "2 minutes ago",
		status: "Active",
	},
	{
		id: 2,
		name: "Staging Key",
		token: "stg_sk_************************5678",
		created: "2023-09-15",
		lastUsed: "3 days ago",
		status: "Active",
	},
	{
		id: 3,
		name: "Development Key",
		token: "dev_sk_************************abcd",
		created: "2023-08-01",
		lastUsed: "1 month ago",
		status: "Revoked",
	},
];

export default function ApiKeysPage() {
	return (
		<div className="space-y-6">
			<div>
				<h3 className="text-lg font-medium">API Keys</h3>
				<p className="text-sm text-muted-foreground">
					Manage API keys for your applications and services.
				</p>
			</div>
			<Separator />

			<Card>
				<CardHeader>
					<CardTitle>Create a new API key</CardTitle>
					<CardDescription>
						API keys are used to authenticate with the API.
					</CardDescription>
				</CardHeader>
				<CardContent>
					<div className="flex gap-4">
						<div className="flex-1 space-y-2">
							<Label htmlFor="keyName">Key Name</Label>
							<Input id="keyName" placeholder="e.g., My Awesome App" />
						</div>
						<div className="flex items-end">
							<Button>
								<Plus className="mr-2 h-4 w-4" />
								Create Key
							</Button>
						</div>
					</div>
				</CardContent>
			</Card>

			<Card>
				<CardHeader>
					<CardTitle>Your API Keys</CardTitle>
					<CardDescription>You have {apiKeys.length} API keys.</CardDescription>
				</CardHeader>
				<CardContent>
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead>Name</TableHead>
								<TableHead>Token</TableHead>
								<TableHead>Status</TableHead>
								<TableHead>Created</TableHead>
								<TableHead>Last Used</TableHead>
								<TableHead className="text-right">Actions</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{apiKeys.map((key) => (
								<TableRow key={key.id}>
									<TableCell className="font-medium">{key.name}</TableCell>
									<TableCell>
										<div className="flex items-center gap-2">
											<span className="font-mono">{key.token}</span>
											<Button variant="ghost" size="icon" className="h-6 w-6">
												<Copy className="h-4 w-4" />
											</Button>
										</div>
									</TableCell>
									<TableCell>
										<Badge
											variant={key.status === "Active" ? "default" : "outline"}
										>
											{key.status}
										</Badge>
									</TableCell>
									<TableCell>{key.created}</TableCell>
									<TableCell>{key.lastUsed}</TableCell>
									<TableCell className="text-right">
										<DropdownMenu>
											<DropdownMenuTrigger asChild>
												<Button variant="ghost" size="icon">
													<MoreHorizontal className="h-4 w-4" />
												</Button>
											</DropdownMenuTrigger>
											<DropdownMenuContent align="end">
												<DropdownMenuItem>
													<Eye className="mr-2 h-4 w-4" />
													View Details
												</DropdownMenuItem>
												<DropdownMenuItem className="text-red-500">
													<Trash2 className="mr-2 h-4 w-4" />
													Revoke Key
												</DropdownMenuItem>
											</DropdownMenuContent>
										</DropdownMenu>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</CardContent>
			</Card>
		</div>
	);
}
