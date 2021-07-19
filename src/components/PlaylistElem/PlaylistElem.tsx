import React, { useContext } from "react";
import AppSchemeContext from "../../contextStore/AppSchemeContext";
import useStyles from "./styles";
import RemoveButton from "./RemoveButton/RemoveButton";
import type { IPlaylistElem } from "../../types";

const PlaylistBox: React.FC<IPlaylistElem> = ({
    song,
    removeButton,
    onClick,
}) => {
    const classes = useStyles();
    const schemeContext = useContext(AppSchemeContext);
    const color = schemeContext.colorScheme === "dark" ? "#ffffff" : "#000000";
    const border =
        schemeContext.colorScheme === "dark"
            ? "1px solid rgba(255,255,255,.3 )"
            : "1px solid rgba(0,0,0, .3 )";

    return (
        <div
            className={classes.wrapper}
            onClick={onClick ? onClick : () => false}
            style={{ borderBottom: border }}
        >
            <figure className={classes.figure}>
                <img
                    src={song.track.images.coverart}
                    alt={song.track.title}
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                    }}
                />
            </figure>
            <div className={classes.body}>
                <p className={classes.songTitle} style={{ color }}>
                    {song.track.title}
                </p>
                <p className={classes.artistName} style={{ color }}>
                    {" "}
                    {song.track.subtitle}
                </p>
            </div>
            {removeButton && <RemoveButton id={song.track.key} />}
        </div>
    );
};
export default PlaylistBox;
