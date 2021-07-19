import React, { useContext } from "react";
import { gridStyles, colStyles } from "./styles";
import { Container, Grid, Col } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import Header from "../components/Header/Header";
import PlaylistBox from "../components/PlaylistBox/PlaylistBox";
import SearchBox from "../components/SearchBox/SearchBox";
import AppSchemeContext from "../contextStore/AppSchemeContext";
import Modal from "../components/Modal/Modal";
import SaveAlert from "../components/SaveAlert/SaveAlert";
import useStyles from "./styles";

const Main: React.FC = () => {
    const classes = useStyles();
    const schemeContext = useContext(AppSchemeContext);
    const background =
        schemeContext.colorScheme === "dark" ? "#424242" : "#c7c7c7";
    const isTablet = useMediaQuery("(min-width: 992px)");
    const isSmallDesktop = useMediaQuery("(min-width: 1440px)");
    let span = 12;
    let span1 = 12;
    let h = "auto";
    if (isTablet) {
        span = 6;
        span1 = 6;
        h = "100%";
    }
    if (isSmallDesktop) {
        span = 5;
        span1 = 7;
    }

    return (
        <>
            <Header />
            <main className={classes.main}>
                <section className={classes.section}>
                    <Container
                        size="xl"
                        padding={20}
                        className={classes.container}
                    >
                        <Grid
                            columns={12}
                            style={gridStyles}
                            gutter={0}
                            className={classes.grid}
                        >
                            <Col
                                span={span}
                                style={{
                                    ...colStyles,
                                    height: h,
                                }}
                            >
                                <PlaylistBox background={background} />
                            </Col>
                            <Col
                                span={span1}
                                style={{ ...colStyles, height: h }}
                            >
                                <SearchBox background={background} />
                            </Col>
                        </Grid>
                    </Container>
                </section>
                {schemeContext.isModalOpened && <Modal />}
                {schemeContext.showAlert && <SaveAlert />}
            </main>
        </>
    );
};
export default Main;
