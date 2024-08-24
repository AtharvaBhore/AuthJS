"use server"
import {decode} from "next-auth/jwt"
import {auth} from "@/auth"

import {cookies} from "next/headers"
import {User} from "next-auth"

export const getUser = async () => {
	try {
		const session = await auth()
		if (session?.user) return session.user

		return null
	} catch (error) {
		throw new Error(`User Error`)
	}
}
