//  React base styles
import borders from 'theme/base/borders';

//  React helper functions
import pxToRem from 'theme/functions/pxToRem';

const { borderRadius } = borders;

export default {
    styleOverrides: {
        root: {
            display: 'block',
            padding: `${pxToRem(16)} ${pxToRem(16)} 0  ${pxToRem(16)}`,
            borderRadius: `${borderRadius.xl} ${borderRadius.xl} 0 0`,
        },
    },
};
