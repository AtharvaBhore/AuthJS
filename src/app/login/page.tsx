import React from "react"
import Link from "next/link"
import {redirect} from "next/navigation"
import {auth} from "@/auth"
import {signIn} from "next-auth/react"
import {CredentialsSignin} from "next-auth"
import { LoginForm } from "@/components/client/loginForm"

const Page = async()=>{

	const session = await auth();
	if(session?.user) redirect("/")

	return (
			<LoginForm/>
	)
}

export default Page;