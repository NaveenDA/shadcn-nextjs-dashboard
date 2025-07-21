"use client";
import { Sidebar } from "@/components/shared/sidebar";
import { Topbar } from "@/components/shared/topbar";

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {

	return (
		<div className="relative flex h-screen overflow-hidden bg-background">
			{/* Sidebar */}
			<Sidebar />

			{/* Main Content */}
			<div className="flex-1 overflow-auto">
				<Topbar />
				<main className="p-8 max-w-[calc(100vw-18rem)] mx-auto">
					<div className="min-h-[calc(100vh-8rem)]">{children}</div>
				</main>
			</div>
		</div>
	);
}
