import React from "react";
import useStyles from "./styles";
import type { ILoader } from "../../types";

const Loader: React.FC<ILoader> = ({ width }) => {
    const classes = useStyles();

    return (
        <div className={classes.loader}>
            <div className={classes.inner} style={{ width: `${width}%` }}></div>
        </div>
    );
};
export default Loader;
