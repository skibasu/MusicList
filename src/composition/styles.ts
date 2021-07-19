import { createUseStyles } from "react-jss";

import { theming } from "@mantine/core";

const useStyles = createUseStyles(
    (theme) => ({
        main: {
            "@media all and (min-width:992px)": {
                display: "flex",
                flexDirection: "column",
                flex: "1 1 auto",
                height: "100%",
            },
            "& .mantine-col": {
                marginBottom: "40px !important",
                "@media all and (min-width:992px)": {
                    marginBottom: "0!important",
                },
            },
        },
        section: {
            padding: "48px 0 16px",
            "@media all and (min-width:992px)": {
                height: "100%",
                flex: "1 1 auto",
            },
        },
        container: {
            "@media all and (min-width:992px)": {
                height: "100%",
                display: "flex",
                flexDirection: "column",
                flex: "1 1 auto",
            },
        },
        grid: {
            "@media all and (min-width:992px)": {
                flex: "1 1 auto",
                height: "100%",
            },
        },
        col: {
            padding: "0 20px",
        },
    }),
    { theming }
);
export const gridStyles = {
    margin: "0 -20px",
};
export const colStyles = {
    padding: "0 20px",
};

export default useStyles;
