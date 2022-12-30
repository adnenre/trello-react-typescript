//  React base styles
import typography from 'theme/base/typography';
import colors from 'theme/base/colors';

//  React helper functions
// import pxToRem from "theme/functions/pxToRem";

const { size } = typography;
const { text } = colors;

export default {
    styleOverrides: {
        root: {
            fontSize: size.md,
            color: text.main,
        },
    },
};
