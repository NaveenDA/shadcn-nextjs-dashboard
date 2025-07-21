"use client";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Wrench, Clock, RefreshCw, Calendar, AlertCircle } from "lucide-react";

export default function MaintenancePage() {
	return (
		<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50">
			<Card className="w-full max-w-md text-center border-blue-200 shadow-lg">
				<CardHeader>
					<div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-blue-100 border-4 border-blue-200">
						<Wrench className="h-12 w-12 text-blue-600" />
					</div>
					<CardTitle className="text-2xl text-blue-800">
						Under Maintenance
					</CardTitle>
					<CardDescription className="text-blue-700">
						We&apos;re currently performing scheduled maintenance to improve
						your experience. We&apos;ll be back shortly.
					</CardDescription>
				</CardHeader>
				<CardContent className="space-y-4">
					<div className="text-sm text-blue-600 bg-blue-50 p-4 rounded-lg border border-blue-200">
						<div className="flex items-center gap-2 justify-center mb-3">
							<Clock className="h-4 w-4" />
							<span className="font-medium">
								Estimated downtime: 30 minutes
							</span>
						</div>
						<div className="space-y-1 text-xs">
							<div className="flex items-center gap-2 justify-center">
								<Calendar className="h-3 w-3" />
								<span>Started at: 2:00 PM UTC</span>
							</div>
							<div className="flex items-center gap-2 justify-center">
								<Calendar className="h-3 w-3" />
								<span>Expected completion: 2:30 PM UTC</span>
							</div>
						</div>
					</div>
					<div className="flex flex-col gap-3">
						<Button
							onClick={() => window.location.reload()}
							className="bg-blue-600 hover:bg-blue-700 text-white"
						>
							<RefreshCw className="mr-2 h-4 w-4" />
							Check Status
						</Button>
					</div>
					<div className="pt-4 border-t border-blue-200">
						<div className="flex items-center gap-2 justify-center text-xs text-blue-600 mb-2">
							<AlertCircle className="h-3 w-3" />
							<span>For urgent matters, please contact our support team.</span>
						</div>
						<div className="text-xs text-blue-500">
							<p>We apologize for any inconvenience.</p>
							<p>Thank you for your patience!</p>
						</div>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
