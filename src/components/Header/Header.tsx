import React from "react";
import { Container, Paper } from "@mantine/core";
import useStyles from "./styles";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import Logo from "./Logo/Logo";

const Header: React.FC = () => {
    const classes = useStyles();
    return (
        <header className={classes.header}>
            <Paper radius={0} className={classes.headerWrapper}>
                <Container
                    size="xl"
                    className={classes.flexContainer}
                    padding={20}
                >
                    <Logo />
                    <ThemeToggle />
                </Container>
            </Paper>
        </header>
    );
};
export default Header;
