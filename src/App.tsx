import React, { useState } from "react";
import Main from "./composition/Main";
import AppSchemeContext from "./contextStore/AppSchemeContext";
import { MantineProvider, GlobalStyles } from "@mantine/core";
import { useLocalStorageValue, useMediaQuery } from "@mantine/hooks";
import { CONTAINER_SIZES } from "@mantine/core";
import type { ISong } from "./types";

CONTAINER_SIZES.xl = 1920;

const App: React.FC = () => {
    const isMobile = useMediaQuery(`(max-width: 992px)`);
    const paddingTop = isMobile ? 50 : 67;
    const height = isMobile ? "auto" : "100%";
    const display = isMobile ? "block" : "flex";
    const flexDirection = "column";

    const [colorScheme, setColorScheme] = useLocalStorageValue({
        key: "mantine-color-scheme",
        defaultValue: "light",
    });
    const [songs, setSongs] = useState<ISong[]>([] as ISong[]);
    const [isModalOpened, toggleModal] = useState<boolean>(false);
    const [isSaveButton, setSaveButton] = useState<boolean>(false);
    const [showAlert, setAlert] = useState<boolean>(false);

    return (
        <AppSchemeContext.Provider
            value={{
                colorScheme,
                songs,
                setSongs,
                setColorScheme,
                isModalOpened,
                toggleModal,
                isSaveButton,
                setSaveButton,
                showAlert,
                setAlert,
            }}
        >
            <MantineProvider
                theme={{
                    fontFamily: "Droid Sans",
                    headings: { fontFamily: "Droid Sans" },
                    colorScheme,
                    colors: {
                        dark: [
                            "#d5d7e0",
                            "#acaebf",
                            "#8c8fa3",
                            "#666980",
                            "#4d4f66",
                            "#34354a",
                            "#2b2c3d",
                            "#303030",
                            "#0c0d21",
                            "#01010a",
                        ],
                        black: ["#000000"],
                    },
                    spacing: {
                        lg: 20,
                    },
                }}
            >
                <GlobalStyles />
                <div
                    className="App"
                    style={{ paddingTop, height, display, flexDirection }}
                >
                    <Main />
                </div>
            </MantineProvider>
        </AppSchemeContext.Provider>
    );
};

export default App;
