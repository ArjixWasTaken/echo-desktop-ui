import { createFileRoute } from "@tanstack/solid-router";
import PersonAdd from "@suid/icons-material/PersonAdd";

export const Route = createFileRoute("/")({
	component: Index,
});

function Index() {
	return (
		<div class="p-2">
			<h3>Welcome Home!</h3>
			<mdui-switch />
			<PersonAdd />
		</div>
	);
}
