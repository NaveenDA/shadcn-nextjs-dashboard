import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function LoadingDashboard() {
	return (
		<div className="space-y-6">
			<div className="flex items-center justify-between">
				<Skeleton className="h-9 w-32" />
				<div className="flex items-center gap-2">
					<Skeleton className="h-6 w-16" />
					<Skeleton className="h-6 w-20" />
				</div>
			</div>

			{/* Stats Cards Skeleton */}
			<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
				{Array.from({ length: 4 }, (_, i) => `stat-${i}`).map((id) => (
					<Card key={id}>
						<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
							<Skeleton className="h-4 w-20" />
							<Skeleton className="h-8 w-8 rounded-lg" />
						</CardHeader>
						<CardContent>
							<Skeleton className="h-7 w-24 mb-2" />
							<Skeleton className="h-3 w-32" />
						</CardContent>
					</Card>
				))}
			</div>

			<div className="grid gap-6 xl:grid-cols-3">
				{/* Recent Activity Skeleton */}
				<Card className="xl:col-span-2">
					<CardHeader>
						<div className="flex items-center justify-between">
							<Skeleton className="h-6 w-32" />
							<Skeleton className="h-5 w-12" />
						</div>
					</CardHeader>
					<CardContent>
						<div className="space-y-4">
							{Array.from({ length: 4 }, (_, i) => `activity-${i}`).map(
								(id) => (
									<div
										key={id}
										className="flex items-center gap-3 p-3 rounded-lg"
									>
										<Skeleton className="w-8 h-8 rounded-full" />
										<div className="flex-1">
											<Skeleton className="h-4 w-24 mb-1" />
											<Skeleton className="h-3 w-32" />
										</div>
										<Skeleton className="h-3 w-16" />
									</div>
								),
							)}
						</div>
					</CardContent>
				</Card>

				{/* Project Progress Skeleton */}
				<Card>
					<CardHeader>
						<Skeleton className="h-6 w-32" />
					</CardHeader>
					<CardContent>
						<div className="space-y-4">
							{Array.from({ length: 4 }, (_, i) => `progress-${i}`).map(
								(id) => (
									<div key={id} className="space-y-2">
										<div className="flex items-center justify-between">
											<Skeleton className="h-4 w-24" />
											<Skeleton className="h-4 w-8" />
										</div>
										<Skeleton className="h-2 w-full" />
										<Skeleton className="h-5 w-16" />
									</div>
								),
							)}
						</div>
					</CardContent>
				</Card>
			</div>

			{/* Chart Placeholders Skeleton */}
			<div className="grid gap-6 md:grid-cols-2">
				{Array.from({ length: 2 }, (_, i) => `chart-${i}`).map((id) => (
					<Card key={id}>
						<CardHeader>
							<Skeleton className="h-6 w-32" />
						</CardHeader>
						<CardContent>
							<Skeleton className="h-64 w-full" />
						</CardContent>
					</Card>
				))}
			</div>
		</div>
	);
}
