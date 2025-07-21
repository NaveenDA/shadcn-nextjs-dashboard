"use client";
import ErrorPage from "@/components/shared/ErrorPage";

export default function NotFound() {
	return (
		<ErrorPage
			title="Page Not Found"
			description="Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or you entered the wrong URL."
			errorCode="Error 404"
		/>
	);
}
