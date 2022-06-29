import { useSession } from "next-auth/react"

export default function Profile() {
  const { data } = useSession()

  return (
    <strong>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </strong>
  )
}