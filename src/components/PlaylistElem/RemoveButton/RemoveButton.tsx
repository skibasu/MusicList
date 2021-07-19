import React, { useContext } from "react";
import { ActionIcon } from "@mantine/core";
import { CrossCircledIcon } from "@modulz/radix-icons";
import AppSchemeContext from "../../../contextStore/AppSchemeContext";
import type { IRemoveButton } from "../../../types";

const RemoveButton: React.FC<IRemoveButton> = ({ id }) => {
    const schemeContext = useContext(AppSchemeContext);
    const songs = schemeContext.songs;
    const removeSong = (key: string) =>
        schemeContext.setSongs(songs.filter((v) => v.track.key !== key));
    const color = schemeContext.colorScheme === "dark" ? "#ffffff" : "#000000";

    return (
        <ActionIcon
            variant="transparent"
            onClick={() => {
                removeSong(id);
            }}
            style={{ marginLeft: "auto" }}
        >
            <CrossCircledIcon style={{ width: 33, height: 33 }} color={color} />
        </ActionIcon>
    );
};
export default RemoveButton;
