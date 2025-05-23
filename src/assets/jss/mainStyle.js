const hexToRgb = input => {
  input = input + "";
  input = input.replace("#", "");
  let hexRegex = /[0-9A-Fa-f]/g;
  if (!hexRegex.test(input) || (input.length !== 3 && input.length !== 6)) {
    throw new Error("input is not a valid hex color.");
  }
  if (input.length === 3) {
    let first = input[0];
    let second = input[1];
    let last = input[2];
    input = first + first + second + second + last + last;
  }
  input = input.toUpperCase(input);
  let first = input[0] + input[1];
  let second = input[2] + input[3];
  let last = input[4] + input[5];
  return (
    parseInt(first, 16) +
    ", " +
    parseInt(second, 16) +
    ", " +
    parseInt(last, 16)
  );
};

const whiteColor = "#fff"
const greenColor = "#1DB954"
const duskColor = "#323F4B"
const blackColor = "#0F1317"
const grayColor = [
  "#999",
  "#777",
  "#3C4858",
  "#AAAAAA",
  "#D2D2D2",
  "#DDD",
  "#555555",
  "#333",
  "#eee",
  "#ccc",
  "#e4e4e4",
  "#E5E5E5",
  "#f9f9f9",
  "#f5f5f5",
  "#495057",
  "#e7e7e7",
  "#212121",
  "#c8c8c8",
  "#505050"
];
const primaryColor = ["#9c27b0", "#ab47bc", "#8e24aa", "#af2cc5", "#7b1fa2"];
const successColor = [
  "#4caf50",
  "#66bb6a",
  "#43a047",
  "#5cb860",
  "#388e3c",
  "#d0e9c6",
  "#dff0d8"
];
const infoColor = [
  "#00acc1",
  "#26c6da",
  "#00acc1",
  "#00d3ee",
  "#0097a7",
  "#c4e3f3",
  "#d9edf7"
];
const warningColor = [
  "#ff9800",
  "#ffa726",
  "#fb8c00",
  "#ffa21a",
  "#f57c00",
  "#faf2cc",
  "#fcf8e3"
];
const dangerColor = [
  "#f44336",
  "#ef5350",
  "#e53935",
  "#f55a4e",
  "#d32f2f",
  "#ebcccc",
  "#f2dede"
];
const roseColor = ["#e91e63", "#ec407a", "#d81b60", "#eb3573", "#c2185b"];

const boxShadow = {
  boxShadow:
    "0 10px 30px -12px rgba(" +
    hexToRgb(blackColor) +
    ", 0.42), 0 4px 25px 0px rgba(" +
    hexToRgb(blackColor) +
    ", 0.12), 0 8px 10px -5px rgba(" +
    hexToRgb(blackColor) +
    ", 0.2)"
};
const primaryBoxShadow = {
  boxShadow:
    "0 4px 20px 0 rgba(" +
    hexToRgb(blackColor) +
    ",.14), 0 7px 10px -5px rgba(" +
    hexToRgb(primaryColor[0]) +
    ",.4)"
};

const drawerWidth = 260;

const drawerMiniWidth = 0;

const transition = {
  transition: "all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)"
}

const containerFluid = {
  paddingRight: "15px",
  paddingLeft: "15px",
  marginRight: "auto",
  marginLeft: "auto",
  "&:before,&:after": {
    display: "table",
    content: '" "'
  },
  "&:after": {
    clear: "both"
  }
};
const defaultFont = {
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  fontWeight: "300",
  lineHeight: "1.5em"
};

export {
	hexToRgb,
	whiteColor,
	greenColor,
	grayColor,
	blackColor,
	duskColor,
  drawerWidth,
  drawerMiniWidth,
  transition,
  containerFluid,
  boxShadow,
  defaultFont,
  primaryColor,
  primaryBoxShadow,
  successColor,
  infoColor,
  warningColor,
  dangerColor,
  roseColor
}
