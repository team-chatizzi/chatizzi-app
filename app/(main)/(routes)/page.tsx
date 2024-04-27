import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"

export default async function HomePage () {
  const supabase = createServerComponentClient({ cookies })
  const { data: users } = await supabase.from('users').select()
  return (
    <main>
      <p>Hello Chatizzí</p>
      {
        JSON.stringify(users, null, 2)
      }
    </main>
  )
}
