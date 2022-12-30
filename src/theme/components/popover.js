//  React base styles
import colors from 'theme/base/colors';
import boxShadows from 'theme/base/boxShadows';
import borders from 'theme/base/borders';

const { transparent } = colors;
const { lg } = boxShadows;
const { borderRadius } = borders;

export default {
    styleOverrides: {
        paper: {
            backgroundColor: transparent.main,
            boxShadow: lg,
            borderRadius: borderRadius.md,
        },
    },
};
