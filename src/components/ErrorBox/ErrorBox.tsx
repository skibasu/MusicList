import React from "react";
import useStyles from "./styles";
import type { IError } from "../../types";

const Error: React.FC<IError> = ({ error }) => {
    const classes = useStyles();
    return (
        <div className={classes.Error}>
            <p className={classes.title}>Something went wrong !</p>
            <p className={classes.subtitle}>{error}</p>
        </div>
    );
};
export default Error;
