import { createUseStyles } from "react-jss";
import { theming } from "@mantine/core";

const useStyles = createUseStyles(
    (theme) => ({
        modal: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
            position: "fixed",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            zIndex: 999999,
            backgroundColor: "rgba(0,0,0, .6)",
        },
        modalInner: {
            width: "85%",
            padding: 25,
            "@media all and (min-width:992px)": {
                width: "56%",
            },
        },
        modalTitle: {
            fontSize: 18,
            fontWeight: 400,
            margin: "0 0 20px ",
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
            fontSize: 16,
            color: "#ffffff",
            "&::-webkit-input-placeholder": {
                fontSize: 16,
            },
            "&::-moz-placeholder": {
                fontSize: 16,
            },
            "&:-ms-input-placeholder": {
                fontSize: 16,
            },
            "&:-moz-placeholder": {
                fontSize: 16,
            },
        },
        inputError: {
            borderBottom: "1px solid #f44336 !important",
            color: "#f44336 !important",
        },
        inputWrapper: {
            position: "relative",
            "&:not(:last-child)": {
                marginBottom: 40,
            },
        },
        btnWrapper: {
            display: "flex",
            justifyContent: "flex-end",
            padding: "40px 0 0",
        },
        btn: {
            cursor: "pointer",
            padding: 5,
            border: "none",
            outline: "none",
            background: "transparent",
            color: "#ffffff",
            textTransform: "uppercase",
            marginLeft: 20,
            "&:disabled": {
                opacity: 0.2,
            },
        },
        message: {
            fontSize: 13,
            position: "absolute",
            bottom: -40,
            left: 0,
            display: "none",
            color: "#f44336",
        },
        error: {
            display: "block",
        },
    }),
    { theming }
);

export default useStyles;
