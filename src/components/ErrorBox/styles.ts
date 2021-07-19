import { createUseStyles } from "react-jss";
import { theming } from "@mantine/core";

const useStyles = createUseStyles(
    (theme) => ({
        Error: {
            width: "100%",
            left: 0,
            top: "40%",
            "@media all and (min-width:992px)": {
                position: "absolute",
            },
        },

        title: {
            fontSize: 24,
            textAlign: "center",
            marginBottom: 0,
        },
        subtitle: {
            textAlign: "center",
            fontsize: 18,
            color: "#f44336",
            margin: 0,
        },
    }),
    { theming }
);

export default useStyles;
