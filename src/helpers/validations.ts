import { EValidations } from "../types";

export const validations = (type: EValidations, value: string) => {
    const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (type === EValidations.TEXT && value.length > 2) {
        return true;
    } else if (
        type === EValidations.EMAIL &&
        re.test(String(value).toLowerCase())
    ) {
        return true;
    } else {
        return false;
    }
};
