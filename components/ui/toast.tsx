"use client";

import * as React from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

export interface Toast {
	id: string;
	title?: React.ReactNode;
	description?: React.ReactNode;
	action?: React.ReactNode;
	variant?: "default" | "destructive";
	open?: boolean;
	onOpenChange?: (open: boolean) => void;
}

const ToastContext = React.createContext<{
	toasts: Toast[];
	toast: (props: Omit<Toast, "id">) => void;
	dismiss: (toastId?: string) => void;
}>({
	toasts: [],
	toast: () => null,
	dismiss: () => null,
});

export const useToast = () => {
	const context = React.useContext(ToastContext);

	if (context === undefined) {
		throw new Error("useToast must be used within a ToastProvider");
	}

	return context;
};

let count = 0;

function genId() {
	count = (count + 1) % Number.MAX_VALUE;
	return count.toString();
}

interface ToastProviderProps {
	children: React.ReactNode;
}

export const ToastProvider = ({ children }: ToastProviderProps) => {
	const [toasts, setToasts] = React.useState<Toast[]>([]);

	const toast = React.useCallback(
		({ ...props }: Omit<Toast, "id">) => {
			const id = genId();

			const update = (toastUpdate: Partial<Toast>) =>
				setToasts((toasts) =>
					toasts.map((t) => (t.id === id ? { ...t, ...toastUpdate } : t))
				);
			const dismiss = () => setToasts((toasts) => toasts.filter((t) => t.id !== id));

			setToasts((toasts) => [
				...toasts,
				{
					...props,
					id,
					open: true,
					onOpenChange: (open) => {
						if (!open) dismiss();
					},
				},
			]);

			return {
				id: id,
				dismiss,
				update,
			};
		},
		[]
	);

	const dismiss = React.useCallback((toastId?: string) => {
		setToasts((toasts) =>
			toastId
				? toasts.filter((t) => t.id !== toastId)
				: []
		);
	}, []);

	const handleKeyDown = React.useCallback(
		(event: KeyboardEvent) => {
			if (event.key === "Escape") {
				setToasts((toasts) => []);
			}
		},
		[]
	);

	React.useEffect(() => {
		document.addEventListener("keydown", handleKeyDown);
		return () => document.removeEventListener("keydown", handleKeyDown);
	}, [handleKeyDown]);

	return (
		<ToastContext.Provider
			value={{
				toasts,
				toast,
				dismiss,
			}}
		>
			{children}
			<ToastViewport />
		</ToastContext.Provider>
	);
};

const ToastViewport = React.forwardRef<
	React.ElementRef<"ol">,
	React.ComponentPropsWithoutRef<"ol">
>(({ className, ...props }, ref) => (
	<ol
		ref={ref}
		className={cn(
			"fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
			className
		)}
		{...props}
	/>
));
ToastViewport.displayName = "ToastViewport";

const ToastRoot = React.forwardRef<
	React.ElementRef<"li">,
	React.ComponentPropsWithoutRef<"li"> & {
		variant?: "default" | "destructive";
	}
>(({ className, variant = "default", ...props }, ref) => {
	return (
		<li
			ref={ref}
			className={cn(
				"group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
				variant === "default" &&
					"border bg-background text-foreground",
				variant === "destructive" &&
					"destructive border-destructive bg-destructive text-destructive-foreground",
				className
			)}
			{...props}
		/>
	);
});
ToastRoot.displayName = "ToastRoot";

const ToastAction = React.forwardRef<
	React.ElementRef<"button">,
	React.ComponentPropsWithoutRef<"button">
>(({ className, ...props }, ref) => (
	<button
		ref={ref}
		className={cn(
			"inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
			className
		)}
		{...props}
	/>
));
ToastAction.displayName = "ToastAction";

const ToastClose = React.forwardRef<
	React.ElementRef<"button">,
	React.ComponentPropsWithoutRef<"button">
>(({ className, ...props }, ref) => (
	<button
		ref={ref}
		className={cn(
			"absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
			className
		)}
		toast-close=""
		{...props}
	>
		<X className="h-4 w-4" />
	</button>
));
ToastClose.displayName = "ToastClose";

const ToastTitle = React.forwardRef<
	React.ElementRef<"div">,
	React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
	<div
		ref={ref}
		className={cn("text-sm font-semibold", className)}
		{...props}
	/>
));
ToastTitle.displayName = "ToastTitle";

const ToastDescription = React.forwardRef<
	React.ElementRef<"div">,
	React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
	<div
		ref={ref}
		className={cn("text-sm opacity-90", className)}
		{...props}
	/>
));
ToastDescription.displayName = "ToastDescription";

interface ToastProps {
	toast: Toast;
}

export const ToastComponent = ({ toast }: ToastProps) => {
	const { dismiss } = useToast();

	React.useEffect(() => {
		const timer = setTimeout(() => {
			dismiss(toast.id);
		}, 5000);

		return () => clearTimeout(timer);
	}, [toast.id, dismiss]);

	return (
		<ToastRoot variant={toast.variant}>
			<div className="grid gap-1">
				{toast.title && <ToastTitle>{toast.title}</ToastTitle>}
				{toast.description && (
					<ToastDescription>{toast.description}</ToastDescription>
				)}
			</div>
			{toast.action}
			<ToastClose onClick={() => dismiss(toast.id)} />
		</ToastRoot>
	);
};

const Toaster = () => {
	const { toasts } = useToast();

	return (
		<ToastProvider>
			{toasts.map((toast) => (
				<ToastComponent key={toast.id} toast={toast} />
			))}
		</ToastProvider>
	);
};

export { Toaster };