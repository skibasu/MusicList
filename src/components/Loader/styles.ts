import { createUseStyles } from "react-jss";
import { theming } from "@mantine/core";

const useStyles = createUseStyles(
    (theme) => ({
        "@keyframes loader": {
            from: { width: "100%", opacity: 0 },
            to: { width: "100%", opacity: 1 },
        },
        loader: {
            width: "100%",
            height: 8,
            backgroundColor: "#7f3b13",
            position: "relative",
        },
        inner: {
            position: "absolute",
            left: 0,
            top: 0,
            height: 8,
            transition: "all 1.5s",
            width: "0%",
            backgroundColor: "orange",
        },
    }),
    { theming }
);

export default useStyles;
