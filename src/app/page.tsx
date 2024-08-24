import {auth} from "@/auth"
import {Session} from "inspector"
import Image from "next/image"
import {redirect} from "next/navigation"

export default async function Home() {

	const session = await auth()
	if (!session) redirect("/login")

	return (
		<div>
			Home
		</div>
	)
}
