import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import ForumIcon from "@mui/icons-material/Forum";
import logo from "../../assets/images/logo.png";
function Layout({ children }) {
  return (
    <Box sx={{ minHeight: "100vh" }}>
      <Stack direction={{ xs: "column", lg: "row" }}>
        {/* sidebar */}
        <Box sx={{ backgroundColor: "white", flexBasis: "200px" }}>
          <SideBar />
        </Box>
        {/* Container */}
        <Box sx={{ flex: "1", bgcolor: "#DFE8DE" }}>{children}</Box>
      </Stack>
    </Box>
  );
}

export default Layout;

const SideBar = () => {
  return (
    <Box sx={{ width: "100%", maxWidth: "280px" }} px={4} py={2}>
      <Box>
        {/* logo */}
        <Box component={"img"} src={logo} />
      </Box>
      <Box mt={5}>
        <Stack
          direction="row"
          spacing={3}
          padding={1}
          borderRadius={1}
          bgcolor="rgba(25, 159, 132, 0.2)"
          sx={{ color: "#199F84" }}
        >
          <ForumIcon />
          <Typography fontWeight={500}>Chatbot</Typography>
        </Stack>
      </Box>
    </Box>
  );
};
