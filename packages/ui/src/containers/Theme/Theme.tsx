import {createMuiTheme, responsiveFontSizes} from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      "Montserrat",
      "Roboto",
      '"Noto Serif JP"',
      "Arial",
      "sans-serif",
    ].join(","),
  },
});

export default responsiveFontSizes(theme);
