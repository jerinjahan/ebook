import { Dimensions } from "react-native";
import {
    useFonts,
    Roboto_100Thin,
    Roboto_100Thin_Italic,
    Roboto_300Light,
    Roboto_300Light_Italic,
    Roboto_400Regular,
    Roboto_400Regular_Italic,
    Roboto_500Medium,
    Roboto_500Medium_Italic,
    Roboto_700Bold,
    Roboto_700Bold_Italic,
    Roboto_900Black,
    Roboto_900Black_Italic,
  } from '@expo-google-fonts/roboto';

const { width, height } = Dimensions.get("window");
const fontFamily = "Roboto_400Regular";


export const COLORS = {
    primary: "#00D42A",
    secondary: "#CDCDD2",
    lightGray: "#00D42A",
    error: "#FFD300",
    white: "#FFFFFF",
    gray:'#B6B5CB',
    black:'#201443'
};

export const SIZES = {
    screenPadding:16,
    // global sizes
    base: 8,
    font: 14,
    radius: 30,
    padding: 16,
    padding32: 32,
    padding12: 12,

    // font sizes
    largeTitle: 25,
    h1: 30,
    h2: 22,
    h3: 20,
    h4: 18,
    body1: 30,
    body2: 20,
    body3: 16,
    body4: 14,
    body5: 12,
    headerTitle : 21,

    // app dimensions
    width,
    height,

    buttonRadius : 4
};

export const FONTS = {
    headerLine4: { fontSize: 36, lineHeight: 49,letterSpacing : 0.25},
    headerLine5: { fontSize: 25, lineHeight: 34,letterSpacing : 0},
    headerLine6: { fontSize: 21, lineHeight: 29,letterSpacing : 0.15},
    subtitle3: { fontSize: 15, lineHeight: 20,letterSpacing : 0.1},
    subtitle2: { fontSize: 15, lineHeight: 20,letterSpacing : 0.1},
    subtitle1: { fontSize: 17, lineHeight: 23,letterSpacing : 0.15},
    body1: { fontSize: 17, lineHeight: 23,letterSpacing : 0.5},
    body2: { fontSize: 15, lineHeight: 20,letterSpacing : 0.25},
    button: { fontSize: 17, lineHeight: 23,letterSpacing : 1.25,fontWeight:'bold',textTransform: 'uppercase'},
    caption: { fontSize: 13, lineHeight: 18,letterSpacing : 0.4},
    overline: { fontSize: 11, lineHeight: 15,letterSpacing : 1.5},
    alert: { fontSize: 11, lineHeight: 13,letterSpacing : 0.25},
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;