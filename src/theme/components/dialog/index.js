//  React base styles
import borders from 'theme/base/borders';
import boxShadows from 'theme/base/boxShadows';

const { borderRadius } = borders;
const { xxl } = boxShadows;

export default {
    styleOverrides: {
        paper: {
            borderRadius: borderRadius.lg,
            boxShadow: xxl,
        },

        paperFullScreen: {
            borderRadius: 0,
        },
    },
};
