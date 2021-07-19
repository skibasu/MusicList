import { createUseStyles } from "react-jss";
import { theming } from "@mantine/core";

const useStyles = createUseStyles(
    (theme) => ({
        btnWrapper: {
            display: "flex",
            justifyContent: "center",
        },
        btn: {
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 600,
            fontSize: 15,
            letterSpacing: ".1em",
            cursor: "pointer",
            padding: 5,
            border: "none",
            outline: "none",
            background: "transparent",
            color: "#ffffff",
            textTransform: "uppercase",
            margin: "0 auto",
        },
    }),
    { theming }
);

export default useStyles;
