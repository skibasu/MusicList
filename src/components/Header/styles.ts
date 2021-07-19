import { createUseStyles } from "react-jss";
import { theming } from "@mantine/core";
import { desktop } from "../../styles/mediaQueries";

const useStyles = createUseStyles(
    (theme) => ({
        header: {
            position: "fixed",
            left: 0,
            top: 0,
            right: 0,
            height: 50,
            zIndex: 9999999,
            boxShadow: "0px 3px 6px 0px rgba(0,0,0,0.4)",
            [`@media (min-width: ${desktop}px)`]: {
                height: 67,
            },
        },
        headerWrapper: {
            padding: "6px 0 6px",
            backgroundColor: "#ff7626",
            [`@media (min-width: ${desktop}px)`]: {
                padding: "12px 25px 16px",
            },
        },
        flexContainer: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
        },
    }),
    { theming }
);

export default useStyles;
