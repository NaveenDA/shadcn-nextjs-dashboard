import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Modern Dashboard Template - Next.js 14 & shadcn/ui",
	description:
		"A beautiful, responsive dashboard template built with Next.js 14, shadcn/ui, and Tailwind CSS. Ready-to-use admin panel with modern UI components.",
	keywords: [
		"dashboard template",
		"admin panel",
		"Next.js 14",
		"shadcn/ui",
		"Tailwind CSS",
		"React dashboard",
		"modern UI",
		"admin dashboard",
		"responsive design",
		"TypeScript",
		"open source",
		"dashboard components",
	],
	authors: [{ name: "Dashboard Template" }],
	creator: "Dashboard Template",
	publisher: "Dashboard Template",
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	metadataBase: new URL("https://shadcn-nextjs-dashboard.vercel.app"),
	alternates: {
		canonical: "/",
	},
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://shadcn-nextjs-dashboard.vercel.app",
		title: "Modern Dashboard Template - Next.js 14 & shadcn/ui",
		description:
			"A beautiful, responsive dashboard template built with Next.js 14, shadcn/ui, and Tailwind CSS. Ready-to-use admin panel with modern UI components.",
		siteName: "Dashboard Template",
		images: [
			{
				url: "/og-image.png",
				width: 1200,
				height: 630,
				alt: "Modern Dashboard Template Preview",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Modern Dashboard Template - Next.js 14 & shadcn/ui",
		description:
			"A beautiful, responsive dashboard template built with Next.js 14, shadcn/ui, and Tailwind CSS.",
		images: ["/og-image.png"],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	category: "technology",
	classification: "Dashboard Template",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<link rel="icon" href="/favicon.ico" />
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				/>
				<link rel="manifest" href="/site.webmanifest" />
				<meta name="theme-color" content="#ffffff" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</head>
			<body className={inter.className}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
