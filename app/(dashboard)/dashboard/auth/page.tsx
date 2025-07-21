"use client";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LogIn, UserPlus, Lock, Mail, Shield, Key } from "lucide-react";
import Link from "next/link";

const authPages = [
	{
		title: "Login",
		description: "A classic login form with email and password fields.",
		icon: LogIn,
		href: "/login",
		status: "Ready",
	},
	{
		title: "Register",
		description: "A registration form to sign up new users.",
		icon: UserPlus,
		href: "/register",
		status: "Ready",
	},
	{
		title: "Forgot Password",
		description: "A form for users to reset their password via email.",
		icon: Lock,
		href: "/forgot-password",
		status: "Ready",
	},
	{
		title: "Email Verification",
		description:
			"A page to inform users to check their email for a verification link.",
		icon: Mail,
		href: "/verify-email",
		status: "Ready",
	},
	{
		title: "Two-Factor Auth",
		description: "A page for users to set up two-factor authentication.",
		icon: Shield,
		href: "/setup-2fa",
		status: "Ready",
	},
	{
		title: "API Keys",
		description: "A page to manage API keys for applications and services.",
		icon: Key,
		href: "/dashboard/settings/api-keys",
		status: "Ready",
	},
];

export default function AuthPage() {
	return (
		<div className="space-y-4">
			<div className="text-center">
				<h1 className="text-3xl font-bold">Authentication Pages</h1>
				<p className="text-muted-foreground">
					Here are the authentication-related pages. These now live in their own
					full-screen layout.
				</p>
			</div>
			<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
				{authPages.map((page) => (
					<Link href={page.href} key={page.title}>
						<Card className="flex h-full transform flex-col transition-transform duration-300 hover:scale-105">
							<CardHeader>
								<div className="mb-2 flex justify-between">
									<CardTitle>{page.title}</CardTitle>
									<Badge
										variant={page.status === "Ready" ? "default" : "secondary"}
									>
										{page.status}
									</Badge>
								</div>
								<p className="text-sm text-muted-foreground">
									{page.description}
								</p>
							</CardHeader>
						</Card>
					</Link>
				))}
			</div>
		</div>
	);
}
