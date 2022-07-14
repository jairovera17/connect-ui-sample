import { FC } from "react";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { theme } from "@kushki/connect-ui";

const AppWrapper: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Outlet />
    </ThemeProvider>
  );
};

export { AppWrapper };
