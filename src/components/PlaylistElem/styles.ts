import { createUseStyles } from "react-jss";
import { theming } from "@mantine/core";

const useStyles = createUseStyles(
    (theme) => ({
        wrapper: {
            padding: "10px 0",
            display: "flex",
            alignItems: "center",
            marginBottom: 20,
            borderBottom: "1px solid rgba(255,255,255,.3 )",
            transition: "all .3s ease-in-out",
            color: "#ffffff;",
            textDecoration: "none",
            "&:hover": {
                color: "#ffffff;",
            },
        },
        body: {
            display: "block",
            maxWidth: 450,
        },
        figure: {
            margin: "0 28px 0 0",
            width: "60px",
            height: "60px",
            borderRadius: "60px",
            overflow: "hidden",
            flex: "0 0 auto",
        },
        artistName: {
            fontSize: 18,
            margin: "0 0 10px",
        },
        songTitle: {
            fontSize: 20,
            margin: "0",
        },
        inner: {
            padding: "20px",
            height: "100%",
            borderRadius: 8,
        },
        title: {
            margin: "0 0 20px",
            fontSize: 20,
        },
    }),
    { theming }
);

export default useStyles;
