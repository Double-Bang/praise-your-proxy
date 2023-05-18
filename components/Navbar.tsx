import { useSession, signIn, signOut } from "next-auth/react";
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
import { MoonIcon, SunIcon, AddIcon } from "@chakra-ui/icons";
import PostReviewModal from "@/components/PostReviewModal";

export default function Navbar() {
  const { data: session } = useSession();
  const { colorMode, toggleColorMode } = useColorMode();

  // temporary object to simulate somebody logged in.
  const mockSession = {
    user: {
      name: "Seemour Butts",
      email: "See.Butts@vulgurbutts.com",
      image: "",
    },
  };

  //its working i think! 
  const sessionData = session ?? mockSession;

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems="center" justifyContent="space-between">
          <Box>Praise Your Proxy</Box>
          <Flex alignItems="center">
            {sessionData.user ? (
              <Stack direction="row" spacing={7}>
                <PostReviewModal />
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
                    <Avatar size="sm" src={sessionData.user.image} />
                  </MenuButton>
                  <MenuList alignItems="center">
                    <br />
                    <Center>
                      <Avatar size="2xl" src={sessionData.user.image} />
                    </Center>
                    <br />
                    <Center>
                      <p>{sessionData.user.name}</p>
                    </Center>
                    <br />
                    <MenuDivider />
                    <MenuItem>Your Reviews</MenuItem>
                    <MenuItem>Logout</MenuItem>
                  </MenuList>
                </Menu>
              </Stack>
            ) : (
              <Button>Sign in</Button>
            )}
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
