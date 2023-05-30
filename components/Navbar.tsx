import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from "@chakra-ui/react";

export default function Navbar() {
  const { data: session, status } = useSession();
  const { colorMode, toggleColorMode } = useColorMode();
  const router = useRouter();
  const currentPath = router.pathname;

  // A simple function so that the user can navigate back to the home page.
  const handleLogoClick = () => {
    if (currentPath === "/") {
      // Refresh the page if already on the index page
      router.replace(router.asPath);
    } else {
      // Navigate to the index page
      router.push("/");
    }
  };

  const handleSignIn = () => {
    signIn(); // Initiates the sign-in flow provided by NextAuth.js
  };

  const handleSignOut = () => {
    signOut(); // Signs out the user using NextAuth.js
  };

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems="center" justifyContent="space-between">
          <Box>
            <Button variant="link" onClick={handleLogoClick}>
              <Image src="" alt="Praise Your Proxy" />
            </Button>
          </Box>
          <Flex alignItems="center">
            {status === "loading" ? (
              <Button disabled>Loading...</Button>
            ) : session ? (
              <>
                <Stack direction="row" spacing={7}>
                  <Link href="/post-submission" passHref>
                    <Button as="a" variant="link">
                      Post Review
                    </Button>
                  </Link>{" "}
                  <Button size="sm" onClick={toggleColorMode}>
                    {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                  </Button>
                  <Menu>
                    <MenuButton
                      as={Button}
                      rounded="full"
                      variant="link"
                      cursor="pointer"
                      minW={0}
                    >
                      <Avatar size="sm" src={session.user.image} />
                    </MenuButton>
                    <MenuList alignItems="center">
                      <br />
                      <Center>
                        <Avatar size="2xl" src={session.user.image} />
                      </Center>
                      <br />
                      <Center>
                        <p>{session.user.name}</p>
                      </Center>
                      <br />
                      <MenuDivider />
                      <MenuItem>Your Reviews</MenuItem>
                      <MenuItem onClick={handleSignOut}>Logout</MenuItem>
                    </MenuList>
                  </Menu>
                </Stack>
              </>
            ) : (
              <Button onClick={handleSignIn}>Sign in</Button>
            )}
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
