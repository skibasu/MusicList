import React from "react";
import useStyles from "./styles";
import { ReactComponent as Note } from "../../svg/8thNote.svg";
import { IEmptyList } from "../../types";

const EmptyList: React.FC<IEmptyList> = ({ title }) => {
    const classes = useStyles();
    return (
        <div className={classes.emptyList}>
            <div className={classes.noteWrapper}>
                <Note className={classes.note} />
                <Note className={classes.note} />
                <Note className={classes.note} />
            </div>
            <p className={classes.title}>{title}</p>
        </div>
    );
};
export default EmptyList;
