import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import responsiveFontSizes from "@material-ui/core/styles/responsiveFontSizes";


let theme=createMuiTheme()

theme = responsiveFontSizes(theme);
export default theme
