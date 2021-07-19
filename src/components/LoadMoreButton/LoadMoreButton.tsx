import React, { useContext } from "react";
import useStyles from "./styles";
import { CaretDownIcon } from "@modulz/radix-icons";
import AppSchemeContext from "../../contextStore/AppSchemeContext";
interface loadMore {
    loadMore: () => void;
}

const LoadMoreButton: React.FC<loadMore> = ({ loadMore }) => {
    const classes = useStyles();
    const schemeContext = useContext(AppSchemeContext);
    const color = schemeContext.colorScheme === "dark" ? "#ffffff" : "#000000";
    return (
        <div className={classes.btnWrapper}>
            <button
                className={classes.btn}
                onClick={loadMore}
                style={{ color }}
            >
                <span>more</span>
                <CaretDownIcon
                    color={color}
                    style={{ width: 20, height: 20, marginLeft: 4 }}
                />
            </button>
        </div>
    );
};
export default LoadMoreButton;
