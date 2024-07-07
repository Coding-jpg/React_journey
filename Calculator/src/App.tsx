import { Container, Paper, styled, Grid } from "@mui/material";
import theme from "./theme";
import React, { useState } from "react";
import { GridOperationButton } from "./components/GridOperationButton";
import { GridDigitButton } from "./components/GridDigitButton";

const OutputContainer = styled("div")(({ theme }) => ({
  textAlign: "right",
  width: "100%",
  height: "2em",
  padding: theme.spacing(2),
  fontSize: "3em",
  overflow: "hidden",
}));

const CalculatorBase = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  marginTop: theme.spacing(4),
  borderRadius: 15,
}));

function App() {
  const [currentValue, setCurrentValue] = useState("0");
  const [operation, setOperation] = useState("");
  const [prevValue, setPrevValue] = useState("");
  const [overwrite, setOverwrite] = useState(true);

  const clear = () => {
    setPrevValue("");
    setOperation("");
    setCurrentValue("0");
    setOverwrite(true);
  };

  const del = () => {
    setCurrentValue("0");
    setOverwrite(true);
  };

  const percent = () => {
    const curr = parseFloat(currentValue);
    setCurrentValue((curr / 100).toString());
  };

  const selectOperation = (operation: string) => {
    setPrevValue(currentValue);
    setOperation(operation);
    setOverwrite(true);
  };

  const setDigit = (digit: string) => {
    if (currentValue[0] === "0" && digit === "0") return;
    if (currentValue.includes(".") && digit === ".") return;
    if (overwrite && digit !== ".") {
      setCurrentValue(digit);
    } else {
      setCurrentValue(`${currentValue}${digit}`);
    }
    setOverwrite(false);
  };

  return (
    <Container maxWidth="sm">
      <CalculatorBase>
        <Grid container spacing={1}>
          <Grid item xs={11}>
            <OutputContainer>{currentValue}</OutputContainer>
          </Grid>
          <Grid item container columnSpacing={1}>
            <GridOperationButton
              operation={"AC"}
              selectOperation={clear}
              selectedOperation={operation}
            ></GridOperationButton>
            <GridOperationButton
              operation={"C"}
              selectOperation={del}
              selectedOperation={operation}
            ></GridOperationButton>
            <GridOperationButton
              operation={"%"}
              selectOperation={percent}
              selectedOperation={operation}
            ></GridOperationButton>
            <GridOperationButton
              operation={"+"}
              selectOperation={selectOperation}
              selectedOperation={operation}
            ></GridOperationButton>
          </Grid>
          <Grid item container columnSpacing={1}>
            <GridDigitButton digit={"7"} enterDigit={setDigit} />
            <GridDigitButton digit={"8"} enterDigit={setDigit} />
            <GridDigitButton digit={"9"} enterDigit={setDigit} />
            <GridOperationButton
              operation={"-"}
              selectOperation={selectOperation}
              selectedOperation={operation}
            ></GridOperationButton>
          </Grid>
          <Grid item container columnSpacing={1}>
            <GridDigitButton digit={"4"} enterDigit={setDigit} />
            <GridDigitButton digit={"5"} enterDigit={setDigit} />
            <GridDigitButton digit={"6"} enterDigit={setDigit} />
            <GridOperationButton
              operation={"*"}
              selectOperation={selectOperation}
              selectedOperation={operation}
            ></GridOperationButton>
          </Grid>
          <Grid item container columnSpacing={1}>
            <GridDigitButton digit={"1"} enterDigit={setDigit} />
            <GridDigitButton digit={"2"} enterDigit={setDigit} />
            <GridDigitButton digit={"3"} enterDigit={setDigit} />
            <GridOperationButton
              operation={"/"}
              selectOperation={selectOperation}
              selectedOperation={operation}
            ></GridOperationButton>
          </Grid>
          <Grid item container columnSpacing={1}>
            <GridDigitButton
              digit={"."}
              enterDigit={setDigit}
            ></GridDigitButton>
            <GridDigitButton
              digit={"0"}
              enterDigit={setDigit}
              xs={6}
            ></GridDigitButton>
            <GridOperationButton
              operation="="
              selectOperation={selectOperation}
              selectedOperation={operation}
            ></GridOperationButton>
          </Grid>
        </Grid>
      </CalculatorBase>
    </Container>
  );
}

export default App;
