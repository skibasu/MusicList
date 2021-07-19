import { createUseStyles } from "react-jss";
import { theming } from "@mantine/core";

const useStyles = createUseStyles(
    (theme) => ({
        inner: {
            padding: "40px 20px 20px",
            borderRadius: 8,
            position: "relative",
            minHeight: 600,
            "@media all and (min-width:992px)": {
                minHeight: "100%",
            },
        },
        input: {
            border: "none",
            outline: "none",
            display: "block",
            width: "100%",
            borderBottom: "1px solid #ffffff",
            background: "transparent",
            height: 40,
            padding: "8px 0",
            fontSize: 22,
            color: "#ffffff",
            "&::-webkit-input-placeholder": {
                fontSize: 22,
            },
            "&::-moz-placeholder": {
                fontSize: 22,
            },
            "&:-ms-input-placeholder": {
                fontSize: 22,
            },
            "&:-moz-placeholder": {
                fontSize: 22,
            },
        },
        bodyWrapper: {
            padding: "25px 0 0",
        },
        title: {
            margin: "0 0 20px",
        },

        btn: {
            position: "absolute",
            right: 50,
            bottom: 20,
            borderRadius: 4,
            minWidth: 120,
            cursor: "pointer",
            padding: 10,
            fontSize: 16,
            height: 40,
            backgroundColor: "#ff7626",
            border: "none",
            outline: "none",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            textTransform: "uppercase",
            boxShadow: "0px 3px 2px 0px rgb(0,0,0, 0.14)",
        },
    }),
    { theming }
);

export default useStyles;
