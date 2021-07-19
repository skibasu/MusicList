import React, { useState, useContext, useEffect } from "react";
import clsx from "clsx";
import { useLocalStorageValue, useClickOutside } from "@mantine/hooks";
import AppSchemeContext from "../../contextStore/AppSchemeContext";
import { Paper } from "@mantine/core";
import { validations } from "../../helpers/validations";
import { EValidations } from "../../types";
import useStyles from "./styles";
import { setTimeout } from "timers";

const FormModal: React.FC = () => {
    const classes = useStyles();
    const schemeContext = useContext(AppSchemeContext);
    const songs = schemeContext.songs;

    const [myPlaylist, savePlaylist] = useLocalStorageValue({
        key: "songs",
        defaultValue: JSON.stringify(songs),
    });

    const [stateEmail, setEmailState] = useState<string>("");
    const [stateText, setTextState] = useState<string>("");

    const [stateErrorEmail, setStateErrorEmail] = useState<boolean>(false);
    const [stateErrorText, setStateErrorText] = useState<boolean>(false);

    const [isDisabled, setDisabled] = useState<boolean>(true);

    const background =
        schemeContext.colorScheme === "dark" ? "#424242" : "#c7c7c7";
    const color = schemeContext.colorScheme === "dark" ? "#ffffff" : "#000000";
    const border =
        schemeContext.colorScheme === "dark"
            ? "1px solid rgba(255,255,255,.3 )"
            : "1px solid rgba(0,0,0, .3 )";

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const tps =
            e.target.name === "text" ? EValidations.TEXT : EValidations.EMAIL;

        tps === EValidations.TEXT && setTextState(value);
        tps === EValidations.EMAIL && setEmailState(value);

        if (validations(tps, value)) {
            tps === EValidations.TEXT && setStateErrorText(false);
            tps === EValidations.EMAIL && setStateErrorEmail(false);
        } else {
            tps === EValidations.TEXT && setStateErrorText(true);
            tps === EValidations.EMAIL && setStateErrorEmail(true);
        }
    };

    const onClose = () => schemeContext.toggleModal(false);

    const onSave = () => {
        savePlaylist(JSON.stringify(songs));
        schemeContext.setSaveButton(false);
        schemeContext.setAlert(true);
        setTimeout(() => schemeContext.setAlert(false), 3000);
        onClose();
    };

    const ref = useClickOutside(onClose);
    useEffect(() => {
        if (!stateErrorText && !stateErrorEmail && stateEmail && stateText) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }, [stateErrorText, stateErrorEmail, stateEmail, stateText]);

    return (
        <div className={classes.modal}>
            <Paper
                className={classes.modalInner}
                style={{ background }}
                elementRef={ref}
            >
                <h2 className={classes.modalTitle}>Save</h2>
                <div className={classes.inputWrapper}>
                    <input
                        name="text"
                        type="text"
                        onChange={onChange}
                        className={
                            stateErrorText
                                ? clsx(classes.input, classes.inputError)
                                : classes.input
                        }
                        placeholder="Playlist Name"
                        style={{ color, borderBottom: border }}
                    />
                    <p
                        className={
                            !stateErrorText
                                ? classes.message
                                : clsx(classes.message, classes.error)
                        }
                    >
                        Min length of this field is 3
                    </p>
                </div>
                <div className={classes.inputWrapper}>
                    <input
                        name="email"
                        onChange={onChange}
                        type="text"
                        style={{ color, borderBottom: border }}
                        className={
                            stateErrorEmail
                                ? clsx(classes.input, classes.inputError)
                                : classes.input
                        }
                        placeholder="E-Mail"
                    />
                    <p
                        className={
                            !stateErrorEmail
                                ? classes.message
                                : clsx(classes.message, classes.error)
                        }
                    >
                        Required format name@example.com
                    </p>
                </div>
                <div className={classes.btnWrapper}>
                    <button
                        className={classes.btn}
                        onClick={onClose}
                        style={{ color }}
                    >
                        cancel
                    </button>
                    <button
                        className={classes.btn}
                        onClick={onSave}
                        disabled={isDisabled}
                        style={{ color }}
                    >
                        save
                    </button>
                </div>
            </Paper>
        </div>
    );
};
export default FormModal;
