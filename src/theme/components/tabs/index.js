import colors from 'theme/base/colors';
import borders from 'theme/base/borders';
import boxShadows from 'theme/base/boxShadows';

//  React helper functions
import pxToRem from 'theme/functions/pxToRem';

const { grey, success } = colors;
const { borderRadius } = borders;
const { tabsBoxShadow } = boxShadows;

const tabs = {
    styleOverrides: {
        root: {
            position: 'relative',
            backgroundColor: grey[100],

            borderRadius: borderRadius.xl,
            minHeight: 'unset',
            padding: pxToRem(4),
            border: 'solid 1px #a7b5f4',
            width: '80%',
            margin: 'auto',
            top: '-15px',
        },

        flexContainer: {
            height: '100%',
            position: 'relative',
            zIndex: 10,
        },

        fixed: {
            overflow: 'unset !important',
            overflowX: 'unset !important',
        },

        vertical: {
            '& .MuiTabs-indicator': {
                width: '100%',
            },
        },

        indicator: {
            height: '100%',
            borderRadius: borderRadius.lg,
            backgroundColor: success.main,
            boxShadow: tabsBoxShadow.indicator,
            transition: 'all 500ms ease',
        },
    },
};

export default tabs;
