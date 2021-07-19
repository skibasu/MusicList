import { createUseStyles } from "react-jss";
import { theming } from "@mantine/core";

const useStyles = createUseStyles(
    (theme) => ({
        emptyList: {
            paddingTop: 50,
            "@media all and (min-width:992px)": {
                paddingTop: 0,
                position: "absolute",
                width: "100%",
                left: 0,
                top: "40%",
            },
        },
        noteWrapper: {
            display: "flex",
            justifyContent: "center",
            marginBottom: 28,
        },
        note: {
            margin: "0 8px",
        },
        title: {
            fontSize: 24,
            textAlign: "center",
        },
    }),
    { theming }
);

export default useStyles;
