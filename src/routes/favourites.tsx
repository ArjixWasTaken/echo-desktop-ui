import { createFileRoute } from "@tanstack/solid-router";

export const Route = createFileRoute("/favourites")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/favourites"!</div>;
}
