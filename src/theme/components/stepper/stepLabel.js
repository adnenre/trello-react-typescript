//  React base styles
import typography from 'theme/base/typography';
import colors from 'theme/base/colors';

//  React helper functions
import pxToRem from 'theme/functions/pxToRem';
import rgba from 'theme/functions/rgba';

const { size, fontWeightRegular } = typography;
const { white } = colors;

export default {
    styleOverrides: {
        label: {
            marginTop: `${pxToRem(8)} !important`,
            fontWeight: fontWeightRegular,
            fontSize: size.xs,
            color: '#9fc9ff',
            textTransform: 'uppercase',

            '&.Mui-active': {
                fontWeight: `${fontWeightRegular} !important`,
                color: `${rgba(white.main, 0.8)} !important`,
            },

            '&.Mui-completed': {
                fontWeight: `${fontWeightRegular} !important`,
                color: `${rgba(white.main, 0.8)} !important`,
            },
        },
    },
};
