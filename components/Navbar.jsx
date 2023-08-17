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
  Center,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
  Stack,
  useColorMode,
  Text,
  IconButton,
  Icon,
} from "@chakra-ui/react";
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
  FiBell,
  FiChevronDown,
} from 'react-icons/fi';
import { FaBars, FaTimes, FaUser } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";

const LinkItems = [
  { name: 'Home', icon: FiHome },
  { name: 'Trending', icon: FiTrendingUp },
  { name: 'Explore', icon: FiCompass },
  { name: 'Favourites', icon: FiStar },
  { name: 'Settings', icon: FiSettings },
];

export default function Navbar() {
  const { data: session, status } = useSession();
  const { colorMode, toggleColorMode } = useColorMode();
  const router = useRouter();
  const currentPath = router.pathname;

  const handleLogoClick = () => {
    if (currentPath === "/") {
      router.replace(router.asPath);
    } else {
      router.push("/");
    }
  };

  const userMenuContent = (
    <>
      <Flex alignItems="center">
        {session && (
          <Avatar size="md" src={session.user.image} />
        )}
        <Text ml={2}>{session?.user?.name || "Guest"}</Text>
        <IconButton
          aria-label="Toggle color mode"
          icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          onClick={toggleColorMode}
          ml={2}
        />
      </Flex>
      <MenuDivider />
      <MenuItem>
        {session ? (
          <Link href="/post-submission" passHref>
            <Button as="a" variant="link">
              Post Review
            </Button>
          </Link>
        ) : (
          <Button
            onClick={() => signIn("google")}
            colorScheme="blue"
            size="sm"
          >
            Sign In
          </Button>
        )}
      </MenuItem>
      <MenuItem onClick={session ? () => signOut() : () => signIn("google")}>
        {session ? "Logout" : "Login"}
      </MenuItem>
    </>
  );


  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems="center" justifyContent="space-between">
          <Box>
            <Button variant="link" onClick={handleLogoClick} marginTop="5px" >
              <Image src="/images/PYP-D.png" width="80" height="80" alt="Praise Your Proxy" />
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
                      <MenuItem onClick={() => signOut()}>Logout</MenuItem>
                    </MenuList>
                  </Menu>
                </Stack>
              </>
            ) : (
              <Button onClick={() => signIn()}>Sign in</Button>
            )}
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
