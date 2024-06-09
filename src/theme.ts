import { createTheme, ThemeOptions } from '@mui/material/styles';

export const themeOptions: ThemeOptions = {
    palette: {
        mode: 'light',
        primary: {
        main: '#253237',
        contrastText: '#FF7A91',
        light: '#E0FBFC',
        dark: '#5C6B73',
        },
        secondary: {
        main: '#E0FBFC',
        },
        text: {
        primary: '#9DB4C0',
        secondary: '#E0FBFC',
        disabled: '#5C6B73',
        },
        background: {
        default: '#253237',
        paper: '#253237',
        },
        divider: '#FF7A91',
    },
    typography: {
        fontFamily: '"Roboto Mono", sans-serif',
        fontSize: 14,
        h5: {
            fontSize: 18,
            fontWeight: 700
        }
    },
};

const theme = createTheme(themeOptions);

export default theme;