import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";

const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  return (
    <Box>
      <Typography fontWeight="bold" fontSize="clamp(32px)" color="primary">
        Sociopedia
      </Typography>
    </Box>
  );
};

export default LoginPage;
