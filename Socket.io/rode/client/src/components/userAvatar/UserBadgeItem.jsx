import { CloseIcon } from "@chakra-ui/icons";
import { Box } from "@chakra-ui/react";

export default function UserBadgeItem({ user, handleFunction }) {
  return (
    <Box
      px={2}
      py={1}
      borderRadius={"lg"}
      m={1}
      mb={2}
      fontSize={12}
      backgroundColor={"#38B2AC"}
      color={"white"}
      cursor={"pointer"}
      onClick={handleFunction}
      variant="solid"
    >
      {user.name}
      <CloseIcon pl={1} />
    </Box>
  );
}
