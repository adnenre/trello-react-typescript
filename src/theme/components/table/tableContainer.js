//  React base styles
import colors from 'theme/base/colors';
import boxShadows from 'theme/base/boxShadows';
import borders from 'theme/base/borders';

const { white } = colors;
const { md } = boxShadows;
const { borderRadius } = borders;

export default {
    styleOverrides: {
        root: {
            backgroundColor: white.main,
            boxShadow: md,
            borderRadius: borderRadius.xl,
        },
    },
};
