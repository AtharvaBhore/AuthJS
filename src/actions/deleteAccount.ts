"use server"

import {User} from "@/models/userModel"
import { SignOut } from "./signout"
import { signOut } from "@/auth"
import { NextRequest } from "next/server"

const DeleteAccount = async (email:string) => {

	await User.findOneAndDelete({email})
    await signOut()

}

export {DeleteAccount}
