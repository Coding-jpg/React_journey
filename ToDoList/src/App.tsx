import { theme, InputContainer } from "./components/theme";
import { TextField, Grid, Button, ThemeProvider } from "@mui/material";
import "./App.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <InputContainer>
        <Grid container>
          <Grid item xs={12}>
            <TextField
              id="outlined-basic"
              label="input new note"
              variant="outlined"
            />
            <Button variant="outlined">New</Button>
          </Grid>
        </Grid>
      </InputContainer>
    </ThemeProvider>
  );
}

export default App;
