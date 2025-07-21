"use client";

import type * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

interface Props {
	children: React.ReactNode;
	[key: string]: unknown;
}

export function ThemeProvider({ children, ...props }: Props) {
	return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
