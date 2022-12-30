//  React base styles
import typography from 'theme/base/typography';

//  React helper functions
import pxToRem from 'theme/functions/pxToRem';

const { size } = typography;

export default {
    styleOverrides: {
        root: {
            padding: pxToRem(16),
            fontSize: size.xl,
        },
    },
};
