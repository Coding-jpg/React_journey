import { Container, createTheme, styled } from "@mui/material";

// main theme
export const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
  },
  typography: {
    fontFamily: "Arial, sans-serif",
    fontSize: 14,
  },
});

// style of input components
export const InputContainer = styled(Container)({
  padding: "10px",
  borderRadius: "10px",
  justify: "center",
  alignItems: "center",
});
