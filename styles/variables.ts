import {createMuiTheme} from "@material-ui/core";

export const grayColor = '#bdbdbd'


export const paletteColor = {
    primaryColor: '#c5cae9',
    secondaryColor: "#bdbdbd",

    backgroundColor: "rgba(18,18,18,1)",
    backgroundColorOpacity: (opacity: number): string => `rgba(27, 28, 36,${opacity})`,
    textColor: "#fff",
}
export const theme = createMuiTheme({
    spacing: (factor: number): string => `${0.5 * factor}rem`,
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1920,
        },
    },
    typography: {
        fontFamily: 'Raleway, Roboto',
        h1: {
            fontSize: '2.3em',
            fontWeight: 300,
        },
        h2: {
            fontSize: '2.1em',
            fontWeight: 400,
        },
        h3: {
            fontSize: '1.8em',
            fontWeight: 400,
        },
        htmlFontSize: 16,
        body1: {
            fontSize: '1em',
            fontWeight: 300,
        },
        body2: {
            fontSize: '.9em',
            fontWeight: 300,
        },
        subtitle1: {
            fontSize: '1.4em',
            fontWeight: 600,
        },
        subtitle2: {
            fontSize: '1.1em',
            fontWeight: 600,
        }
    },
    palette: {
        type: "dark",
        text: {
            primary: paletteColor.textColor
        },
        background: {
            default: paletteColor.backgroundColor,
        },
        primary: {
            main: paletteColor.primaryColor,
        },
    },
});
export const fontFamily = "Raleway"

enum fontWeight {
    A = 100,
    B = 200,
    C = 300,
    D = 400,
    E = 500,
    F = 600,
    G = 700
}


export const fontBold: fontWeight = fontWeight.D

interface size {
    mobileS: string,
    mobileM: string,
    mobileL: string,
    tablet: string,
    laptop: string,
    laptopL: string,
    desktop: string,
}

const sizes: size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px',
}

export const device: size = {
    mobileS: `(max-width: ${sizes.mobileS})`,
    mobileM: `(max-width: ${sizes.mobileM})`,
    mobileL: `(max-width: ${sizes.mobileL})`,
    tablet: `(max-width: ${sizes.tablet})`,
    laptop: `(max-width: ${sizes.laptop})`,
    laptopL: `(max-width: ${sizes.laptopL})`,
    desktop: `(max-width: ${sizes.desktop})`,
}
