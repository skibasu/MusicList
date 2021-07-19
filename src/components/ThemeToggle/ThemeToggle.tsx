import React, { useContext } from "react";
import { ActionIcon } from "@mantine/core";
import { SunIcon, MoonIcon } from "@modulz/radix-icons";
import AppSchemeContext from "../../contextStore/AppSchemeContext";

const ThemeToggle: React.FC = () => {
    const schemeContext = useContext(AppSchemeContext);
    const dark = schemeContext.colorScheme === "dark";

    return (
        <ActionIcon
            variant="transparent"
            color="black"
            onClick={() =>
                schemeContext.setColorScheme(dark ? "light" : "dark")
            }
            title="Toggle color scheme"
            style={{ transform: "none" }}
        >
            {dark ? (
                <SunIcon style={{ width: 39, height: 39 }} />
            ) : (
                <MoonIcon style={{ width: 39, height: 39 }} />
            )}
        </ActionIcon>
    );
};
export default ThemeToggle;
