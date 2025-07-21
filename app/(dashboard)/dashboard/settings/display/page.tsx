"use client";

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";

export default function DisplayPage() {
	return (
		<div className="space-y-6">
			<div>
				<h3 className="text-lg font-medium">Display</h3>
				<p className="text-sm text-muted-foreground">
					Customize how the application looks and feels.
				</p>
			</div>
			<Separator />

			<Card>
				<CardHeader>
					<CardTitle>Theme</CardTitle>
					<CardDescription>
						Choose your preferred theme for the application.
					</CardDescription>
				</CardHeader>
				<CardContent className="space-y-6">
					<div className="flex items-center justify-between">
						<div className="space-y-0.5">
							<Label>Dark Mode</Label>
							<p className="text-sm text-muted-foreground">
								Switch between light and dark themes
							</p>
						</div>
						<Switch />
					</div>
					<Separator />
					<div className="flex items-center justify-between">
						<div className="space-y-0.5">
							<Label>System Theme</Label>
							<p className="text-sm text-muted-foreground">
								Automatically match your system&apos;s theme
							</p>
						</div>
						<Switch defaultChecked />
					</div>
				</CardContent>
			</Card>

			<Card>
				<CardHeader>
					<CardTitle>Interface</CardTitle>
					<CardDescription>
						Customize the interface appearance and behavior.
					</CardDescription>
				</CardHeader>
				<CardContent className="space-y-6">
					<div className="flex items-center justify-between">
						<div className="space-y-0.5">
							<Label>Compact Mode</Label>
							<p className="text-sm text-muted-foreground">
								Reduce spacing for a more compact layout
							</p>
						</div>
						<Switch />
					</div>
					<Separator />
					<div className="flex items-center justify-between">
						<div className="space-y-0.5">
							<Label>Animations</Label>
							<p className="text-sm text-muted-foreground">
								Enable smooth animations and transitions
							</p>
						</div>
						<Switch defaultChecked />
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
