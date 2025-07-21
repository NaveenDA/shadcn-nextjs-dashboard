"use client";
import { useState } from "react";
import { Sidebar } from "@/components/shared/sidebar";
import { Topbar } from "@/components/shared/topbar";
import { Sheet, SheetContent } from "@/components/ui/sheet";

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const [mobileOpen, setMobileOpen] = useState(false);

	return (
		<div className="relative flex h-screen overflow-hidden">
			{/* Desktop Sidebar */}
			<div className="hidden lg:flex">
				<Sidebar />
			</div>

			{/* Mobile Sidebar */}
			<Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
				<SheetContent side="left" className="p-0 w-64 lg:hidden">
					<Sidebar onMobileClose={() => setMobileOpen(false)} />
				</SheetContent>
			</Sheet>

			{/* Main Content */}
			<div className="flex-1 overflow-auto">
				<Topbar onMobileMenuClick={() => setMobileOpen(true)} />
				<main className="p-4 sm:p-6">{children}</main>
			</div>
		</div>
	);
}
