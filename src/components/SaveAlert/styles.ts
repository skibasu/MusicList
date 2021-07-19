import { createUseStyles } from "react-jss";
import { theming } from "@mantine/core";

const useStyles = createUseStyles(
    (theme) => ({
        alertWrapper: {
            zIndex: 0,
            opacity: 0,
            transision: "all .5s",
            position: "fixed",
            bottom: 35,
            left: "50%",
            transform: "translateX(-50%) translateY(150%)",
            width: 360,
            padding: 20,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 4,
        },
        alertAnimated: {
            transform: "translateX(-50%) translateY(0)",
            opacity: 1,
            zIndex: 25,
        },
        alertTitle: {
            color: "#9bbf9d",
            fontSize: 15,
            margin: 0,
        },
    }),
    { theming }
);

export default useStyles;
