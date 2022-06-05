import typography from "theme/base/typography";
import borders from "theme/base/borders";
import colors from "theme/base/colors";

//  React helper functions
import pxToRem from "theme/functions/pxToRem";

const { size, fontWeightRegular } = typography;
const { borderRadius } = borders;
const { grey, success, white } = colors;

const tab = {
  styleOverrides: {
    root: {
      display: "flex",
      alignItems: "center",
      flexDirection: "row",
      flex: "1 1 auto",
      textAlign: "center",
      maxWidth: "unset !important",
      minWidth: "unset !important",
      minHeight: "unset !important",
      fontSize: size.md,
      fontWeight: fontWeightRegular,
      textTransform: "none",
      lineHeight: "inherit",
      padding: pxToRem(4),
      borderRadius: borderRadius.lg,

      opacity: "1 !important",
      color: `${grey[600]} !important`,
      transition: "all 500ms ease",
      "&.Mui-selected": {
        color: `${white.main} !important`,
      },
      "&:not(.Mui-selected):hover": {
        color: `${success.main} !important`,
      },
      "& .material-icons, .material-icons-round": {
        marginBottom: "0 !important",
        marginRight: pxToRem(6),
      },

      "& svg": {
        marginBottom: "0 !important",
        marginRight: pxToRem(6),
      },

      "& i.MuiTab-iconWrapper": {
        marginBottom: 0,
      },
    },

    labelIcon: {
      paddingTop: pxToRem(4),
    },
  },
};

export default tab;
