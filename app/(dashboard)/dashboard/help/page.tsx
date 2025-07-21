"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
	Search,
	HelpCircle,
	MessageCircle,
	Mail,
	Phone,
	BookOpen,
	Video,
	FileText,
	ChevronDown,
	ChevronRight,
} from "lucide-react";
import { useState } from "react";

const faqs = [
	{
		question: "How do I reset my password?",
		answer:
			"You can reset your password by clicking on the 'Forgot Password' link on the login page. You'll receive an email with instructions to create a new password.",
		category: "Account",
	},
	{
		question: "How do I enable two-factor authentication?",
		answer:
			"Go to Settings > Security and toggle on 'Two-Factor Authentication'. You'll need to scan a QR code with your authenticator app to complete the setup.",
		category: "Security",
	},
	{
		question: "How do I export my data?",
		answer:
			"Navigate to Settings > Data Management and click 'Export Data'. Your data will be downloaded in JSON format.",
		category: "Data",
	},
	{
		question: "How do I invite team members?",
		answer:
			"Go to the Users page and click 'Add User'. Enter their email address and assign the appropriate role.",
		category: "Team",
	},
	{
		question: "How do I create a new project?",
		answer:
			"On the Projects page, click 'New Project' and fill in the required information including project name, description, and team members.",
		category: "Projects",
	},
	{
		question: "How do I schedule a meeting?",
		answer:
			"Go to the Calendar page and click 'New Event'. Fill in the meeting details including title, time, and attendees.",
		category: "Calendar",
	},
];

const supportChannels = [
	{
		title: "Live Chat",
		description: "Get instant help from our support team",
		icon: MessageCircle,
		status: "Available",
		responseTime: "2-5 minutes",
	},
	{
		title: "Email Support",
		description: "Send us a detailed message",
		icon: Mail,
		status: "Available",
		responseTime: "24 hours",
	},
	{
		title: "Phone Support",
		description: "Call us for urgent issues",
		icon: Phone,
		status: "Available",
		responseTime: "Immediate",
	},
	{
		title: "Documentation",
		description: "Browse our comprehensive guides",
		icon: BookOpen,
		status: "Available",
		responseTime: "Instant",
	},
];

export default function HelpPage() {
	const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

	return (
		<div className="space-y-6">
			<div>
				<h2 className="text-3xl font-bold tracking-tight">Help & Support</h2>
				<p className="text-muted-foreground">
					Find answers to common questions and get support when you need it.
				</p>
			</div>

			{/* Search */}
			<Card>
				<CardContent className="p-6">
					<div className="relative max-w-2xl mx-auto">
						<Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
						<Input
							placeholder="Search for help articles, FAQs, or contact support..."
							className="pl-8"
						/>
					</div>
				</CardContent>
			</Card>

			<div className="grid gap-6 lg:grid-cols-2">
				{/* FAQ */}
				<Card>
					<CardHeader>
						<CardTitle className="flex items-center gap-2">
							<HelpCircle className="h-5 w-5" />
							Frequently Asked Questions
						</CardTitle>
					</CardHeader>
					<CardContent>
						<div className="space-y-4">
							{faqs.map((faq, index) => (
								<div key={faq.question} className="border rounded-lg">
									<button
										type="button"
										className="w-full p-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
										onClick={() =>
											setExpandedFaq(expandedFaq === index ? null : index)
										}
									>
										<div className="flex items-center gap-3">
											<Badge variant="outline" className="text-xs">
												{faq.category}
											</Badge>
											<span className="font-medium">{faq.question}</span>
										</div>
										{expandedFaq === index ? (
											<ChevronDown className="h-4 w-4" />
										) : (
											<ChevronRight className="h-4 w-4" />
										)}
									</button>
									{expandedFaq === index && (
										<div className="px-4 pb-4">
											<p className="text-sm text-muted-foreground">
												{faq.answer}
											</p>
										</div>
									)}
								</div>
							))}
						</div>
					</CardContent>
				</Card>

				{/* Support Channels */}
				<Card>
					<CardHeader>
						<CardTitle>Get Support</CardTitle>
					</CardHeader>
					<CardContent>
						<div className="space-y-4">
							{supportChannels.map((channel) => {
								const Icon = channel.icon;
								return (
									<div
										key={channel.title}
										className="p-4 border rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
									>
										<div className="flex items-center gap-3">
											<div className="p-2 bg-gray-100 rounded-lg">
												<Icon className="h-5 w-5 text-gray-600" />
											</div>
											<div className="flex-1">
												<div className="flex items-center gap-2">
													<h4 className="font-medium">{channel.title}</h4>
													<Badge variant="default" className="text-xs">
														{channel.status}
													</Badge>
												</div>
												<p className="text-sm text-muted-foreground">
													{channel.description}
												</p>
												<p className="text-xs text-muted-foreground">
													Response time: {channel.responseTime}
												</p>
											</div>
										</div>
									</div>
								);
							})}
						</div>
					</CardContent>
				</Card>
			</div>

			{/* Quick Actions */}
			<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
				<Card>
					<CardHeader>
						<CardTitle className="flex items-center gap-2">
							<BookOpen className="h-5 w-5" />
							Documentation
						</CardTitle>
					</CardHeader>
					<CardContent>
						<p className="text-sm text-muted-foreground mb-4">
							Browse our comprehensive documentation and guides
						</p>
						<Button className="w-full">View Docs</Button>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle className="flex items-center gap-2">
							<Video className="h-5 w-5" />
							Video Tutorials
						</CardTitle>
					</CardHeader>
					<CardContent>
						<p className="text-sm text-muted-foreground mb-4">
							Watch step-by-step video tutorials
						</p>
						<Button className="w-full">Watch Videos</Button>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle className="flex items-center gap-2">
							<FileText className="h-5 w-5" />
							API Reference
						</CardTitle>
					</CardHeader>
					<CardContent>
						<p className="text-sm text-muted-foreground mb-4">
							Explore our API documentation
						</p>
						<Button className="w-full">API Docs</Button>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle className="flex items-center gap-2">
							<MessageCircle className="h-5 w-5" />
							Community
						</CardTitle>
					</CardHeader>
					<CardContent>
						<p className="text-sm text-muted-foreground mb-4">
							Join our community forum
						</p>
						<Button className="w-full">Join Forum</Button>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
