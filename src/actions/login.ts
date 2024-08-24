import {signIn} from "next-auth/react"
import {CredentialsSignin} from "next-auth"
import {redirect} from "next/navigation"
import {auth} from "@/auth"

const credentialsLogin = async (email: string, password: string) => {
	console.log(email)
	try {
		const res = await signIn("credentials", {
			email,
			password,
			redirect: false, // Disable redirect to capture the response
		})

		if (res?.error) {
			if (res.error === "CredentialsSignin") {
				throw new CredentialsSignin({cause:"Invalid credentials"})
			}
		}else{
            return null;
        }

	} catch (error) {
		const err = error as CredentialsSignin
		return err.cause || err
	}
}

export {credentialsLogin}
