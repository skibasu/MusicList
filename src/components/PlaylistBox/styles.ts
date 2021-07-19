import { createUseStyles } from "react-jss";
import { theming } from "@mantine/core";

const useStyles = createUseStyles(
    (theme) => ({
        inner: {
            padding: "20px",
            borderRadius: 8,
            position: "relative",
            minHeight: 400,
            "@media all and (min-width:992px)": {
                minHeight: "100%",
            },
        },
        title: {
            margin: "0 0 20px",
            fontSize: 20,
        },
    }),
    { theming }
);

export default useStyles;
