import React, { useContext } from "react";
import clsx from "clsx";
import { CheckCircledIcon } from "@modulz/radix-icons";
import AppSchemeContext from "../../contextStore/AppSchemeContext";
import useStyles from "./styles";

const SaveAlert: React.FC = () => {
    const classes = useStyles();
    const schemeContext = useContext(AppSchemeContext);

    return (
        <div
            className={
                schemeContext.showAlert
                    ? clsx(classes.alertWrapper, classes.alertAnimated)
                    : classes.alertWrapper
            }
            style={{ backgroundColor: "black" }}
        >
            <CheckCircledIcon
                color="#3a853c"
                style={{ width: 20, height: 20, marginRight: 6 }}
            />
            <p className={classes.alertTitle}>Successfylly saved playlist</p>
        </div>
    );
};
export default SaveAlert;
