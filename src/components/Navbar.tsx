import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Container,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Flex,
  HStack,
  IconButton,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react'
import * as React from 'react'
import { FiHelpCircle, FiSearch, FiSettings } from 'react-icons/fi'
import { Logo } from './Logo'
import { Sidebar } from './Sidebar'
import { ToggleButton } from './ToggleButton'
import Link from "next/link";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";
import { ColorModeSwitcher } from './ColorModeSwitcher'
import { NextChakraLink } from './NextChakraLink'

export const Navbar: React.FC = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true })
  const { isOpen, onToggle, onClose } = useDisclosure()
  const router = useRouter();
  const isActive: (pathname: string) => boolean = (pathname) =>
    router.pathname === pathname;

  const {data: session, status} = useSession();
  let left = (
    <div className="left">
      <Link href="/">
        <a className="bold" data-active={isActive("/")}>
          Feed
        </a>
      </Link>
    </div>
  );

  let right = null;

  if (status === 'loading') {
    left = (
      <div className="left">
        <Link href="/">
          <a className="bold" data-active={isActive("/")}>
            Feed
          </a>
        </Link>
      </div>
    );
    right = (
      <div className="right">
        <p>Validating session ...</p>
      </div>
    );
  }


  if (session) {
    left = (
      <div className="left">
        <Link href="/">
          <a className="bold" data-active={isActive("/")}>
            Feed
          </a>
        </Link>
        <Link href="/drafts">
          <a data-active={isActive("/drafts")}>My drafts</a>
        </Link>
      </div>
    );
    right = (
      <div className="right">
        <p>
          {session.user.name} ({session.user.email})
        </p>
        <Link href="/create">
          <button>
            <a>New post</a>
          </button>
        </Link>
        <button onClick={() => signOut()}>
          <a>Log out</a>
        </button>
      </div>
    );
  }
  return (
    <Box as="nav" bg="bg-accent" color="on-accent">
      <Container py={{ base: '3', lg: '4' }}>
        <Flex justify="space-between">
          <HStack spacing="4">
            <Logo />
            {isDesktop && (
              <ButtonGroup variant="ghost-on-accent" spacing="1">
                <Button>
                <NextChakraLink href={"/"}>Home</NextChakraLink>
                </Button>
                <Button>
                <NextChakraLink href={"/profile"}>Profile</NextChakraLink>
                </Button>
                <Button>
                <NextChakraLink href={"/api/auth/signin"}>Log in</NextChakraLink>
                </Button>
                <Button>
                <NextChakraLink href={"/create"}>Create</NextChakraLink>
                </Button>
              </ButtonGroup>
            )}
          </HStack>
          {isDesktop ? (
            <HStack spacing="4">
              <ButtonGroup variant="ghost-on-accent" spacing="1">
                <IconButton icon={<FiSearch fontSize="1.25rem" />} aria-label="Search" />
                <IconButton icon={<FiSettings fontSize="1.25rem" />} aria-label="Settings" />
                <IconButton icon={<FiHelpCircle fontSize="1.25rem" />} aria-label="Help Center" />
              </ButtonGroup>
              
              <Avatar boxSize="10" name="Christoph Winston" src="https://tinyurl.com/yhkm2ek8" />
          <ColorModeSwitcher justifySelf="flex-end" />
            </HStack>
          ) : (
            <>
              <ToggleButton isOpen={isOpen} aria-label="Open Menu" onClick={onToggle} />
              <Drawer
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                isFullHeight
                preserveScrollBarGap
                // Only disabled for showcase
                trapFocus={false}
              >
                <DrawerOverlay />
                <DrawerContent>
                  <Sidebar />
                </DrawerContent>
              </Drawer>
            </>
          )}
        </Flex>
      </Container>
    </Box>
  )
}
