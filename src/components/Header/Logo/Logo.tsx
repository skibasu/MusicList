import React from "react";
import useStyles from "./styles";
import { ReactComponent as Logo } from "../../../svg/logo.svg";

const Header: React.FC = () => {
    const classes = useStyles();
    return (
        <a href="/" className={classes.logo}>
            <Logo />
        </a>
    );
};
export default Header;
