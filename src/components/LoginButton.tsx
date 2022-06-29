import { useSession, signIn, signOut } from "next-auth/react"
import { Button, HStack, Text } from '@chakra-ui/react'
import React from 'react'
import { NextChakraLink } from './NextChakraLink'

export const LoginButton= () => {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        <NextChakraLink href={`/api/auth/signout`}>
        <Button variant="ghost-on-accent" justifyContent="start" onClick={() => signOut()}><HStack spacing="3">
      <Text>Sign Out</Text>
    </HStack>
  </Button>
  </NextChakraLink>
      </>
    )
  }
  return (
    <>
  <NextChakraLink  href={`/api/auth/signin`}>
  <Button variant="ghost-on-accent" justifyContent="start" onClick={() => signIn()}><HStack spacing="3">
      <Text>Sign In</Text>
    </HStack>
  </Button>
  </NextChakraLink>
  </>
  )
}
