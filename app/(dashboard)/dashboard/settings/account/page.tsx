"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { 
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { 
	Upload, 
	User, 
	Mail, 
	Phone, 
	Globe, 
	Calendar,
	CheckCircle,
	AlertCircle
} from "lucide-react";

const accountFormSchema = z.object({
	firstName: z.string().min(2, "First name must be at least 2 characters").max(30),
	lastName: z.string().min(2, "Last name must be at least 2 characters").max(30),
	email: z.string().email("Please enter a valid email address"),
	phone: z.string().optional(),
	bio: z.string().max(500, "Bio must be less than 500 characters").optional(),
	website: z.string().url("Please enter a valid URL").optional().or(z.literal("")),
	company: z.string().optional(),
	location: z.string().optional(),
	timezone: z.string(),
});

type AccountFormValues = z.infer<typeof accountFormSchema>;

const defaultValues: Partial<AccountFormValues> = {
	firstName: "John",
	lastName: "Doe",
	email: "john.doe@example.com",
	phone: "+1 (555) 123-4567",
	bio: "Software engineer passionate about creating great user experiences.",
	website: "https://johndoe.dev",
	company: "Acme Corp",
	location: "San Francisco, CA",
	timezone: "America/Los_Angeles",
};

export default function SettingsAccountPage() {
	const [isLoading, setIsLoading] = useState(false);
	
	const form = useForm<AccountFormValues>({
		resolver: zodResolver(accountFormSchema),
		defaultValues,
	});

	async function onSubmit(data: AccountFormValues) {
		setIsLoading(true);
		// Simulate API call
		await new Promise(resolve => setTimeout(resolve, 2000));
		setIsLoading(false);
		console.log(data);
	}

	return (
		<div className="space-y-6">
			<div>
				<h3 className="text-lg font-medium">Account</h3>
				<p className="text-sm text-muted-foreground">
					Manage your account settings and profile information.
				</p>
			</div>
			<Separator />
			
			<div className="grid gap-6">
				{/* Profile Photo Section */}
				<Card>
					<CardHeader>
						<CardTitle className="flex items-center gap-2">
							<User className="h-5 w-5" />
							Profile Photo
						</CardTitle>
						<CardDescription>
							Upload a photo to personalize your account
						</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="flex items-center gap-6">
							<Avatar className="h-20 w-20">
								<AvatarImage src="/avatar.png" alt="Profile" />
								<AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-2xl">
									JD
								</AvatarFallback>
							</Avatar>
							<div className="space-y-2">
								<Button variant="outline" size="sm">
									<Upload className="h-4 w-4 mr-2" />
									Upload new photo
								</Button>
								<p className="text-xs text-muted-foreground">
									JPG, PNG or GIF. Max size 2MB.
								</p>
							</div>
						</div>
					</CardContent>
				</Card>

				{/* Account Information Form */}
				<Card>
					<CardHeader>
						<CardTitle>Account Information</CardTitle>
						<CardDescription>
							Update your personal information and contact details
						</CardDescription>
					</CardHeader>
					<CardContent>
						<Form {...form}>
							<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
								<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
									<FormField
										control={form.control}
										name="firstName"
										render={({ field }) => (
											<FormItem>
												<FormLabel>First Name</FormLabel>
												<FormControl>
													<Input {...field} />
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
									<FormField
										control={form.control}
										name="lastName"
										render={({ field }) => (
											<FormItem>
												<FormLabel>Last Name</FormLabel>
												<FormControl>
													<Input {...field} />
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
								</div>

								<FormField
									control={form.control}
									name="email"
									render={({ field }) => (
										<FormItem>
											<FormLabel className="flex items-center gap-2">
												<Mail className="h-4 w-4" />
												Email
											</FormLabel>
											<FormControl>
												<Input {...field} type="email" />
											</FormControl>
											<FormDescription>
												This is your primary email address for notifications
											</FormDescription>
											<FormMessage />
										</FormItem>
									)}
								/>

								<FormField
									control={form.control}
									name="phone"
									render={({ field }) => (
										<FormItem>
											<FormLabel className="flex items-center gap-2">
												<Phone className="h-4 w-4" />
												Phone Number
											</FormLabel>
											<FormControl>
												<Input {...field} placeholder="+1 (555) 123-4567" />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>

								<FormField
									control={form.control}
									name="bio"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Bio</FormLabel>
											<FormControl>
												<Textarea 
													{...field} 
													placeholder="Tell us a bit about yourself..."
													className="resize-none"
													rows={3}
												/>
											</FormControl>
											<FormDescription>
												Brief description about yourself (max 500 characters)
											</FormDescription>
											<FormMessage />
										</FormItem>
									)}
								/>

								<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
									<FormField
										control={form.control}
										name="website"
										render={({ field }) => (
											<FormItem>
												<FormLabel className="flex items-center gap-2">
													<Globe className="h-4 w-4" />
													Website
												</FormLabel>
												<FormControl>
													<Input {...field} placeholder="https://example.com" />
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
									<FormField
										control={form.control}
										name="company"
										render={({ field }) => (
											<FormItem>
												<FormLabel>Company</FormLabel>
												<FormControl>
													<Input {...field} placeholder="Acme Corp" />
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
								</div>

								<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
									<FormField
										control={form.control}
										name="location"
										render={({ field }) => (
											<FormItem>
												<FormLabel>Location</FormLabel>
												<FormControl>
													<Input {...field} placeholder="San Francisco, CA" />
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
									<FormField
										control={form.control}
										name="timezone"
										render={({ field }) => (
											<FormItem>
												<FormLabel className="flex items-center gap-2">
													<Calendar className="h-4 w-4" />
													Timezone
												</FormLabel>
												<Select onValueChange={field.onChange} defaultValue={field.value}>
													<FormControl>
														<SelectTrigger>
															<SelectValue placeholder="Select timezone" />
														</SelectTrigger>
													</FormControl>
													<SelectContent>
														<SelectItem value="America/Los_Angeles">Pacific Time (PT)</SelectItem>
														<SelectItem value="America/Denver">Mountain Time (MT)</SelectItem>
														<SelectItem value="America/Chicago">Central Time (CT)</SelectItem>
														<SelectItem value="America/New_York">Eastern Time (ET)</SelectItem>
														<SelectItem value="Europe/London">Greenwich Mean Time (GMT)</SelectItem>
														<SelectItem value="Europe/Paris">Central European Time (CET)</SelectItem>
														<SelectItem value="Asia/Tokyo">Japan Standard Time (JST)</SelectItem>
													</SelectContent>
												</Select>
												<FormMessage />
											</FormItem>
										)}
									/>
								</div>

								<div className="flex justify-end gap-3">
									<Button variant="outline" type="button">
										Cancel
									</Button>
									<Button type="submit" disabled={isLoading}>
										{isLoading ? "Saving..." : "Save Changes"}
									</Button>
								</div>
							</form>
						</Form>
					</CardContent>
				</Card>

				{/* Account Status */}
				<Card>
					<CardHeader>
						<CardTitle>Account Status</CardTitle>
						<CardDescription>
							Your account information and verification status
						</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="space-y-4">
							<div className="flex items-center justify-between">
								<div className="flex items-center gap-2">
									<CheckCircle className="h-5 w-5 text-green-500" />
									<span>Email Verified</span>
								</div>
								<Badge variant="default">Verified</Badge>
							</div>
							<div className="flex items-center justify-between">
								<div className="flex items-center gap-2">
									<CheckCircle className="h-5 w-5 text-green-500" />
									<span>Phone Verified</span>
								</div>
								<Badge variant="default">Verified</Badge>
							</div>
							<div className="flex items-center justify-between">
								<div className="flex items-center gap-2">
									<AlertCircle className="h-5 w-5 text-orange-500" />
									<span>Two-Factor Authentication</span>
								</div>
								<Badge variant="outline">Not Enabled</Badge>
							</div>
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
