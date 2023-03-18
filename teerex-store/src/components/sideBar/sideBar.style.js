import { Box, Drawer, styled } from "@mui/material";

export const Wrapper = styled(Drawer)({
  ".filter": {
    display: "flex",
    flexDirection: "column",
    rowGap: "20px",
    ">div": {
      display: "flex",
      flexDirection: "column",
      rowGap: "10px",
      ".filter_item": {
        display: "flex",
        alignItems: "center",
        columnGap: "10px",
        "input,label": {
          cursor: "pointer",
        },
      },
    },
  },
});
