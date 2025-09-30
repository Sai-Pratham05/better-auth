"use server";
import React from "react";
import { headers } from "next/headers";
import { auth } from "@/lib/auth/auth";
import SignOutPage from "../(auth)/sign-out/page";


const DashboardPage = async() => {
      const session = await auth.api.getSession({
        headers: await headers()
    })
    if(!session) {
        return <div>Not authenticated</div>
    }
  return (
    <>
    <div>hello niggers</div>
    <SignOutPage />
    </>
  );
};

export default DashboardPage;
