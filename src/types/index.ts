// Song data
export interface ISong {
    [key: string]: any;
}
//Axios search params
export interface ISearchParams {
    term: string;
    locale?: string;
    offset?: string;
    limit?: string;
}
//Context interface
export interface ICntx {
    colorScheme: "light" | "dark" | undefined;
    songs: ISong[];
    setSongs: (s: ISong[]) => void;
    setColorScheme: any;
    isModalOpened: boolean;
    toggleModal: (elem: boolean) => void;
    isSaveButton: boolean;
    setSaveButton: (visibled: boolean) => void;

    showAlert: boolean;
    setAlert: (v: boolean) => void;
}
// Background props
export interface IBackground {
    background: string;
}
// Empty list componenet
export interface IEmptyList {
    title: string;
}

// PlaylistElem
export interface IPlaylistElem {
    song: ISong;
    removeButton: boolean;
    onClick?: (song: ISong) => void;
}
// RemoveButton
export interface IRemoveButton {
    id: string;
}
//validations enums
export enum EValidations {
    EMAIL = "EMAIL",
    TEXT = "TEXT",
}
//Error box
export interface IError {
    error: string | undefined | null;
}
//Loader
export interface ILoader {
    width: number;
}
