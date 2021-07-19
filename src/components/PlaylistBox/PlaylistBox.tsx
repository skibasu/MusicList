import React, { useContext, useEffect } from "react";
import AppSchemeContext from "../../contextStore/AppSchemeContext";
import { Paper, Title } from "@mantine/core";
import { useLocalStorageValue } from "@mantine/hooks";
import useStyles from "./styles";
import PlaylistElem from "../PlaylistElem/PlaylistElem";
import EmptyList from "../EmptyList/EmptyList";

import type { IBackground } from "../../types";

const PlaylistBox: React.FC<IBackground> = ({ background }) => {
    const classes = useStyles();
    const schemeContext = useContext(AppSchemeContext);
    const songs = schemeContext.songs;

    const [myPlaylist, savePlaylist] = useLocalStorageValue({
        key: "songs",
        defaultValue: JSON.stringify(songs),
    });

    useEffect(() => {
        schemeContext.setSongs(JSON.parse(myPlaylist));
    }, []);

    return (
        <div style={{ width: "100%", height: "100%", overflow: "auto" }}>
            <Paper style={{ background }} className={classes.inner}>
                <Title className={classes.title}> Playlist box</Title>
                {songs.length === 0 && (
                    <EmptyList title="Add your songs here :)" />
                )}
                {songs.length > 0 &&
                    songs.map((v) => (
                        <PlaylistElem
                            song={v}
                            key={v.track.key}
                            removeButton={true}
                        />
                    ))}
            </Paper>
        </div>
    );
};
export default PlaylistBox;
