"use server";

import { APIError } from "better-auth";
import { auth } from "./auth/auth";
import { redirect } from "next/navigation";

interface State {
    errorMessage: string | null;
}

export async function signUpAction(prevState: State, formData: FormData) {
    const rawFormData = {
        email: formData.get("email") as string,
        password: formData.get("pwd") as string,
        firstname: formData.get("firstname") as string,
        lastname: formData.get("lastname") as string,
    };
    const {email, password, firstname, lastname} = rawFormData;
    try {
        await auth.api.signUpEmail({
            body: {
                name: `${firstname} ${lastname}`,
                email,
                password
            }
        });
    } catch (error) {
        if(error instanceof APIError) {
            switch (error.status) {
                case "UNPROCESSABLE_ENTITY":
                    return {errorMessage : "User Already Exists"};
                case "BAD_REQUEST":
                    return {errorMessage : "Invalid Data"};
                default:
                    return {errorMessage : "Something went wrong"};
            }
        }
    }
    redirect("/dashboard"); 
}


export async function signInAction(prevState: State, formData: FormData) {
    const rawFormData = {
        email: formData.get("email") as string,
        password: formData.get("pwd") as string,
    };
    const {email, password} = rawFormData;
    try {
        await auth.api.signInEmail({
            body: {
                email,
                password
            }
        });
    } catch (error) {
        if(error instanceof APIError) {
            switch (error.status) {
                case "UNAUTHORIZED":
                    return {errorMessage : "Invalid Credentials"};
                case "BAD_REQUEST":
                    return {errorMessage : "Invalid Data"};
                default:
                    return {errorMessage : "Something went wrong"};
            }
        } else {
            console.error(error);
        }
    }
    redirect("/dashboard"); 
}