import { createUseStyles } from "react-jss";

import { theming } from "@mantine/core";

const useStyles = createUseStyles(
    (theme) => ({
        logo: {
            display: "block",
            width: 69,
            height: 39,
            "& svg": {
                display: "block",
                width: "100%",
                height: "100%",
                objectFit: "cover",
            },
        },
    }),
    { theming }
);

export default useStyles;
