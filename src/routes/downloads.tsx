import { createFileRoute } from '@tanstack/solid-router'

export const Route = createFileRoute('/downloads')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/downloads"!</div>
}
