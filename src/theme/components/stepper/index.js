//  React base styles
import colors from 'theme/base/colors';
import borders from 'theme/base/borders';
import boxShadows from 'theme/base/boxShadows';

//  React helper functions
import pxToRem from 'theme/functions/pxToRem';
import linearGradient from 'theme/functions/linearGradient';

const { transparent, gradients } = colors;
const { borderRadius } = borders;
const { colored } = boxShadows;

export default {
    styleOverrides: {
        root: {
            background: linearGradient(
                gradients.info.main,
                gradients.info.state
            ),
            padding: `${pxToRem(24)} 0 ${pxToRem(16)}`,
            borderRadius: borderRadius.lg,
            boxShadow: colored.info,

            '&.MuiPaper-root': {
                backgroundColor: transparent.main,
            },
        },
    },
};
