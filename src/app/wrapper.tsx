export async function TimeoutComponent() {
  await new Promise((resolve) => setTimeout(resolve, 200))
  return <span />
}
