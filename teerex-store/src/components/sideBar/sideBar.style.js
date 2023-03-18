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

export const Header = styled(Box)({
  paddingTop: "10px",
  position: "sticky",
  background: "#ffffff",
  top: 0,
  zIndex: 100,
  h3: { textAlign: "center" },
});
