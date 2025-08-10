"use client";
import { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
	Search,
	Plus,
	MoreHorizontal,
	Mail,
	Phone,
	Filter,
	ArrowUpDown,
	ArrowUp,
	ArrowDown,
	ChevronLeft,
	ChevronRight,
	Download,
	UserPlus,
	Users,
} from "lucide-react";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
	DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

const users = [
	{
		id: 1,
		name: "John Doe",
		email: "john.doe@example.com",
		role: "Admin",
		status: "Active",
		avatar: "/avatar.png",
		lastSeen: "2 hours ago",
		joinDate: "2024-01-15",
		department: "Engineering",
	},
	{
		id: 2,
		name: "Jane Smith",
		email: "jane.smith@example.com",
		role: "User",
		status: "Active",
		avatar: "/avatar.png",
		lastSeen: "1 day ago",
		joinDate: "2024-02-20",
		department: "Marketing",
	},
	{
		id: 3,
		name: "Bob Johnson",
		email: "bob.johnson@example.com",
		role: "Moderator",
		status: "Inactive",
		avatar: "/avatar.png",
		lastSeen: "1 week ago",
		joinDate: "2024-01-10",
		department: "Support",
	},
	{
		id: 4,
		name: "Alice Brown",
		email: "alice.brown@example.com",
		role: "User",
		status: "Active",
		avatar: "/avatar.png",
		lastSeen: "3 hours ago",
		joinDate: "2024-03-05",
		department: "Sales",
	},
	{
		id: 5,
		name: "Charlie Wilson",
		email: "charlie.wilson@example.com",
		role: "User",
		status: "Pending",
		avatar: "/avatar.png",
		lastSeen: "Never",
		joinDate: "2024-03-20",
		department: "Engineering",
	},
	{
		id: 6,
		name: "Diana Prince",
		email: "diana.prince@example.com",
		role: "Admin",
		status: "Active",
		avatar: "/avatar.png",
		lastSeen: "5 minutes ago",
		joinDate: "2024-01-01",
		department: "Management",
	},
	{
		id: 7,
		name: "Mike Chen",
		email: "mike.chen@example.com",
		role: "User",
		status: "Active",
		avatar: "/avatar.png",
		lastSeen: "1 hour ago",
		joinDate: "2024-02-15",
		department: "Design",
	},
	{
		id: 8,
		name: "Sarah Johnson",
		email: "sarah.johnson@example.com",
		role: "Moderator",
		status: "Active",
		avatar: "/avatar.png",
		lastSeen: "4 hours ago",
		joinDate: "2024-01-25",
		department: "Support",
	},
];

type SortField = "name" | "email" | "role" | "status" | "joinDate";
type SortDirection = "asc" | "desc";

export default function UsersPage() {
	const [searchTerm, setSearchTerm] = useState("");
	const [roleFilter, setRoleFilter] = useState<string>("all");
	const [statusFilter, setStatusFilter] = useState<string>("all");
	const [sortField, setSortField] = useState<SortField>("name");
	const [sortDirection, setSortDirection] = useState<SortDirection>("asc");
	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 5;

	const filteredAndSortedUsers = useMemo(() => {
		let filtered = users.filter((user) => {
			const matchesSearch = 
				user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
				user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
				user.department.toLowerCase().includes(searchTerm.toLowerCase());
			const matchesRole = roleFilter === "all" || user.role === roleFilter;
			const matchesStatus = statusFilter === "all" || user.status === statusFilter;
			
			return matchesSearch && matchesRole && matchesStatus;
		});

		filtered.sort((a, b) => {
			let aValue = a[sortField];
			let bValue = b[sortField];
			
			if (typeof aValue === "string") {
				aValue = aValue.toLowerCase();
				bValue = bValue.toLowerCase();
			}
			
			if (sortDirection === "asc") {
				return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
			} else {
				return aValue > bValue ? -1 : aValue < bValue ? 1 : 0;
			}
		});

		return filtered;
	}, [searchTerm, roleFilter, statusFilter, sortField, sortDirection]);

	const totalPages = Math.ceil(filteredAndSortedUsers.length / itemsPerPage);
	const paginatedUsers = filteredAndSortedUsers.slice(
		(currentPage - 1) * itemsPerPage,
		currentPage * itemsPerPage
	);

	const handleSort = (field: SortField) => {
		if (field === sortField) {
			setSortDirection(sortDirection === "asc" ? "desc" : "asc");
		} else {
			setSortField(field);
			setSortDirection("asc");
		}
	};

	const getSortIcon = (field: SortField) => {
		if (sortField !== field) return <ArrowUpDown className="h-4 w-4" />;
		return sortDirection === "asc" ? 
			<ArrowUp className="h-4 w-4" /> : 
			<ArrowDown className="h-4 w-4" />;
	};

	return (
		<div className="space-y-6">
			<div className="flex items-center justify-between">
				<div>
					<h2 className="text-3xl font-bold tracking-tight">Users</h2>
					<p className="text-muted-foreground">
						Manage user accounts and permissions.
					</p>
				</div>
				<div className="flex items-center gap-2">
					<Button variant="outline" size="sm">
						<Download className="h-4 w-4 mr-2" />
						Export
					</Button>
					<Button className="flex items-center gap-2">
						<UserPlus className="h-4 w-4" />
						Add User
					</Button>
				</div>
			</div>

			{/* Stats Cards */}
			<div className="grid gap-4 md:grid-cols-4">
				<Card>
					<CardContent className="flex items-center p-6">
						<div className="flex items-center">
							<div className="p-2 bg-blue-50 rounded-lg mr-4">
								<Users className="h-6 w-6 text-blue-600" />
							</div>
							<div>
								<p className="text-2xl font-bold">{users.length}</p>
								<p className="text-xs text-muted-foreground">Total Users</p>
							</div>
						</div>
					</CardContent>
				</Card>
				<Card>
					<CardContent className="flex items-center p-6">
						<div className="flex items-center">
							<div className="p-2 bg-green-50 rounded-lg mr-4">
								<Users className="h-6 w-6 text-green-600" />
							</div>
							<div>
								<p className="text-2xl font-bold">{users.filter(u => u.status === "Active").length}</p>
								<p className="text-xs text-muted-foreground">Active Users</p>
							</div>
						</div>
					</CardContent>
				</Card>
				<Card>
					<CardContent className="flex items-center p-6">
						<div className="flex items-center">
							<div className="p-2 bg-purple-50 rounded-lg mr-4">
								<Users className="h-6 w-6 text-purple-600" />
							</div>
							<div>
								<p className="text-2xl font-bold">{users.filter(u => u.role === "Admin").length}</p>
								<p className="text-xs text-muted-foreground">Administrators</p>
							</div>
						</div>
					</CardContent>
				</Card>
				<Card>
					<CardContent className="flex items-center p-6">
						<div className="flex items-center">
							<div className="p-2 bg-orange-50 rounded-lg mr-4">
								<Users className="h-6 w-6 text-orange-600" />
							</div>
							<div>
								<p className="text-2xl font-bold">{users.filter(u => u.status === "Pending").length}</p>
								<p className="text-xs text-muted-foreground">Pending</p>
							</div>
						</div>
					</CardContent>
				</Card>
			</div>

			{/* Filters and Search */}
			<Card>
				<CardContent className="p-6">
					<div className="flex flex-col sm:flex-row items-center gap-4">
						<div className="relative flex-1">
							<Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
							<Input 
								placeholder="Search users, email, or department..." 
								className="pl-8" 
								value={searchTerm}
								onChange={(e) => setSearchTerm(e.target.value)}
							/>
						</div>
						<Select value={roleFilter} onValueChange={setRoleFilter}>
							<SelectTrigger className="w-[140px]">
								<SelectValue placeholder="All Roles" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="all">All Roles</SelectItem>
								<SelectItem value="Admin">Admin</SelectItem>
								<SelectItem value="User">User</SelectItem>
								<SelectItem value="Moderator">Moderator</SelectItem>
							</SelectContent>
						</Select>
						<Select value={statusFilter} onValueChange={setStatusFilter}>
							<SelectTrigger className="w-[140px]">
								<SelectValue placeholder="All Status" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="all">All Status</SelectItem>
								<SelectItem value="Active">Active</SelectItem>
								<SelectItem value="Inactive">Inactive</SelectItem>
								<SelectItem value="Pending">Pending</SelectItem>
							</SelectContent>
						</Select>
					</div>
				</CardContent>
			</Card>

			{/* Users Table */}
			<Card>
				<CardHeader>
					<div className="flex items-center justify-between">
						<CardTitle>All Users ({filteredAndSortedUsers.length})</CardTitle>
						<div className="text-sm text-muted-foreground">
							Showing {((currentPage - 1) * itemsPerPage) + 1} to {Math.min(currentPage * itemsPerPage, filteredAndSortedUsers.length)} of {filteredAndSortedUsers.length} users
						</div>
					</div>
				</CardHeader>
				<CardContent>
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead 
									className="cursor-pointer hover:bg-muted/50 select-none"
									onClick={() => handleSort("name")}
								>
									<div className="flex items-center gap-2">
										User
										{getSortIcon("name")}
									</div>
								</TableHead>
								<TableHead 
									className="cursor-pointer hover:bg-muted/50 select-none"
									onClick={() => handleSort("role")}
								>
									<div className="flex items-center gap-2">
										Role
										{getSortIcon("role")}
									</div>
								</TableHead>
								<TableHead 
									className="cursor-pointer hover:bg-muted/50 select-none"
									onClick={() => handleSort("status")}
								>
									<div className="flex items-center gap-2">
										Status
										{getSortIcon("status")}
									</div>
								</TableHead>
								<TableHead>Department</TableHead>
								<TableHead 
									className="cursor-pointer hover:bg-muted/50 select-none"
									onClick={() => handleSort("joinDate")}
								>
									<div className="flex items-center gap-2">
										Join Date
										{getSortIcon("joinDate")}
									</div>
								</TableHead>
								<TableHead className="text-right">Actions</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{paginatedUsers.length === 0 ? (
								<TableRow>
									<TableCell colSpan={6} className="text-center py-8">
										<div className="flex flex-col items-center gap-2">
											<Users className="h-8 w-8 text-muted-foreground" />
											<p className="text-muted-foreground">No users found matching your criteria</p>
										</div>
									</TableCell>
								</TableRow>
							) : (
								paginatedUsers.map((user) => (
									<TableRow key={user.id} className="hover:bg-muted/50">
										<TableCell>
											<div className="flex items-center gap-3">
												<Avatar className="h-9 w-9">
													<AvatarImage src={user.avatar} alt={user.name} />
													<AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm">
														{user.name
															.split(" ")
															.map((n) => n[0])
															.join("")}
													</AvatarFallback>
												</Avatar>
												<div>
													<div className="font-medium">{user.name}</div>
													<div className="text-sm text-muted-foreground">
														{user.email}
													</div>
												</div>
											</div>
										</TableCell>
										<TableCell>
											<Badge
												variant={user.role === "Admin" ? "default" : user.role === "Moderator" ? "secondary" : "outline"}
											>
												{user.role}
											</Badge>
										</TableCell>
										<TableCell>
											<div className="flex items-center gap-2">
												<div className={`w-2 h-2 rounded-full ${
													user.status === "Active" ? "bg-green-500" : 
													user.status === "Inactive" ? "bg-gray-400" : "bg-yellow-500"
												}`} />
												<Badge
													variant={
														user.status === "Active"
															? "default"
															: user.status === "Inactive"
																? "secondary"
																: "outline"
													}
												>
													{user.status}
												</Badge>
											</div>
										</TableCell>
										<TableCell className="text-sm text-muted-foreground">
											{user.department}
										</TableCell>
										<TableCell className="text-sm text-muted-foreground">
											{new Date(user.joinDate).toLocaleDateString()}
										</TableCell>
										<TableCell className="text-right">
											<DropdownMenu>
												<DropdownMenuTrigger asChild>
													<Button variant="ghost" size="icon">
														<MoreHorizontal className="h-4 w-4" />
													</Button>
												</DropdownMenuTrigger>
												<DropdownMenuContent align="end">
													<DropdownMenuItem className="flex items-center gap-2">
														<Mail className="h-4 w-4" />
														Send Email
													</DropdownMenuItem>
													<DropdownMenuItem className="flex items-center gap-2">
														<Phone className="h-4 w-4" />
														Call
													</DropdownMenuItem>
													<DropdownMenuSeparator />
													<DropdownMenuItem>Edit User</DropdownMenuItem>
													<DropdownMenuItem>View Profile</DropdownMenuItem>
													<DropdownMenuSeparator />
													<DropdownMenuItem className="text-red-600">
														Delete User
													</DropdownMenuItem>
												</DropdownMenuContent>
											</DropdownMenu>
										</TableCell>
									</TableRow>
								))
							)}
						</TableBody>
					</Table>
					
					{/* Pagination */}
					{totalPages > 1 && (
						<div className="flex items-center justify-between pt-4">
							<div className="text-sm text-muted-foreground">
								Page {currentPage} of {totalPages}
							</div>
							<div className="flex items-center gap-2">
								<Button
									variant="outline"
									size="sm"
									onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
									disabled={currentPage === 1}
								>
									<ChevronLeft className="h-4 w-4" />
									Previous
								</Button>
								<Button
									variant="outline"
									size="sm"
									onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
									disabled={currentPage === totalPages}
								>
									Next
									<ChevronRight className="h-4 w-4" />
								</Button>
							</div>
						</div>
					)}
				</CardContent>
			</Card>
		</div>
	);
}
