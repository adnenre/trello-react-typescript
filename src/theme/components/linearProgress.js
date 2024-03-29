//  React base styles
import borders from 'theme/base/borders';
import colors from 'theme/base/colors';

//  React helper functions
import pxToRem from 'theme/functions/pxToRem';

const { borderRadius } = borders;
const { light } = colors;

export default {
    styleOverrides: {
        root: {
            height: pxToRem(6),
            borderRadius: borderRadius.md,
            overflow: 'visible',
            position: 'relative',
        },

        colorPrimary: {
            backgroundColor: light.main,
        },

        colorSecondary: {
            backgroundColor: light.main,
        },

        bar: {
            height: pxToRem(6),
            borderRadius: borderRadius.sm,
            position: 'absolute',
            transform: `translate(0, 0) !important`,
            transition: 'width 0.6s ease !important',
        },
    },
};
