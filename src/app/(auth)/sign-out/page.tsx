"use client";
//you should not use "use client" in server component but this is a workaround for now

import { Button } from '@/components/ui/button'
import { auth } from '@/lib/auth/auth'
import { signOut } from '@/lib/auth/auth-client'
import { useRouter } from 'next/navigation'
// import { headers } from "next/headers"
import React from 'react'

const SignOutPage = async () => {
 
  const router = useRouter()
  const handleSignout = async() => {
    await signOut({
      fetchOptions:{
        onSuccess: () => {
          router.push('/sign-in')
        }
      }
    })
  }
  return (
    <div>
        <Button variant="outline" onClick={handleSignout}>Sign Out</Button>
    </div>
  )
}

export default SignOutPage
