import React, { useContext, useState, useEffect } from "react";
import { Paper, ThemeIcon } from "@mantine/core";
import { DownloadIcon } from "@modulz/radix-icons";
import { useLocalStorageValue } from "@mantine/hooks";
import AppSchemeContext from "../../contextStore/AppSchemeContext";
import ErrorBox from "../ErrorBox/ErrorBox";
import { searchSongs } from "../../api/searchSongs";
import useStyles from "./styles";
import EmptyList from "../EmptyList/EmptyList";
import PlaylistElem from "../PlaylistElem/PlaylistElem";
import LoadMoreButton from "../LoadMoreButton/LoadMoreButton";
import Loader from "../Loader/Loader";
import type { ISong, ISearchParams, IBackground } from "../../types";

const SearchBox: React.FC<IBackground> = ({ background }) => {
    const classes = useStyles();
    const schemeContext = useContext(AppSchemeContext);
    const playlist = schemeContext.songs;

    const [songs, setSongs] = useState<ISong[]>([] as ISong[]);
    const [inputValue, setInputValue] = useState<string>("");
    const [offset, setOffset] = useState<number>(1);
    const [isEmpty, setEmpty] = useState<boolean>(true);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [loaderWidth, setWidth] = useState<number>(0);
    const [apiError, setApiError] = useState<boolean>(false);
    const [apiTextError, setApiTextError] =
        useState<string | undefined | null>("");

    const [myPlaylist, savePlaylist] = useLocalStorageValue({
        key: "songs",
        defaultValue: JSON.stringify(songs),
    });

    const color = schemeContext.colorScheme === "dark" ? "#ffffff" : "#000000";
    const border =
        schemeContext.colorScheme === "dark"
            ? "1px solid rgba(255,255,255,.3 )"
            : "1px solid rgba(0,0,0, .3 )";
    const loadMore = () => {
        getSongs({ term: inputValue, offset: "" + offset + 1 }, true);
        setOffset(offset + 1);
    };

    const addSong = (song: ISong) => {
        if (schemeContext.songs.length === 0) {
            schemeContext.setSongs([...schemeContext.songs, song]);
        } else {
            const songKeys = schemeContext.songs.map((v) => v.track.key);
            if (songKeys.includes(song.track.key)) {
                return;
            }
            schemeContext.setSongs([...schemeContext.songs, song]);
        }
    };

    const getSongs = async (
        params: ISearchParams,
        isUpdate: boolean = false
    ) => {
        setIsLoading(true);
        setTimeout(() => setWidth(100), 100);

        try {
            const data = await searchSongs(params);
            if (data.status === 200) {
                setApiError(false);
                setIsLoading(false);
                setTimeout(() => setWidth(0), 100);
                setOffset(1);
                isUpdate
                    ? setSongs([...songs, ...data.data.tracks.hits])
                    : setSongs(data.data.tracks.hits);
                setEmpty(false);
            }
        } catch (error) {
            setIsLoading(false);
            setApiError(true);
            setApiTextError(error.message);
        }
    };

    const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value) {
            getSongs({ term: e.target.value });
            setInputValue(e.target.value);
        } else {
            setSongs([]);
        }
    };
    useEffect(() => {
        if (
            JSON.stringify(playlist) !== JSON.stringify(JSON.parse(myPlaylist))
        ) {
            schemeContext.setSaveButton(true);
        } else {
            schemeContext.setSaveButton(false);
        }
    }, [playlist]);
    return (
        <div style={{ width: "100%", height: "100%", overflow: "auto" }}>
            <Paper style={{ background }} className={classes.inner}>
                <input
                    type="text"
                    onChange={onChangeValue}
                    className={classes.input}
                    placeholder="Search"
                    style={{ color, borderBottom: border }}
                />
                {isEmpty && !apiError && (
                    <EmptyList title="Type your favorite artist or son" />
                )}
                {!apiError && songs && (
                    <div className={classes.bodyWrapper}>
                        {songs.map((v, i) => (
                            <PlaylistElem
                                song={v}
                                removeButton={false}
                                key={v.track.key + i}
                                onClick={() => addSong(v)}
                            />
                        ))}
                    </div>
                )}
                {apiError && <ErrorBox error={apiTextError} />}

                {!isLoading && songs.length > 0 && (
                    <LoadMoreButton loadMore={loadMore} />
                )}
                {schemeContext.isSaveButton && (
                    <button
                        className={classes.btn}
                        onClick={() => schemeContext.toggleModal(true)}
                    >
                        <span>Save</span>
                        <ThemeIcon style={{ backgroundColor: "transparent" }}>
                            <DownloadIcon
                                color="black"
                                style={{
                                    width: 20,
                                    height: 20,
                                    marginLeft: 5,
                                }}
                            />
                        </ThemeIcon>
                    </button>
                )}
                {isLoading && <Loader width={loaderWidth} />}
            </Paper>
        </div>
    );
};
export default SearchBox;
