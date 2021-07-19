import { createContext } from "react";
import type { ICntx } from "../types";

const context: ICntx = {
    colorScheme: "light",
    setColorScheme: (color: "dark" | "light" | undefined) => color,

    songs: [],
    setSongs: (s) => s,

    isModalOpened: false,
    toggleModal: (opened) => opened,

    isSaveButton: false,
    setSaveButton: (visibled) => visibled,

    showAlert: false,
    setAlert: (v) => v,
};
export default createContext(context);
