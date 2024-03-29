//  React Base Styles
import borders from 'theme/base/borders';

//  React Helper Functions
import pxToRem from 'theme/functions/pxToRem';

const { borderRadius } = borders;

const cardMedia = {
    styleOverrides: {
        root: {
            borderRadius: borderRadius.xl,
            margin: `${pxToRem(16)} ${pxToRem(16)} 0`,
        },

        media: {
            width: 'auto',
        },
    },
};

export default cardMedia;
