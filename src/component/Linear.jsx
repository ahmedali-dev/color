import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCopy,
    faUpRightAndDownLeftFromCenter,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { addColorL } from "../redux/ColorLSlice";
import { useEffect, useState } from "react";
const Palettes = () => {
    // getColorFinsh
    const { colorFinishL, colorL, colorFilterL } = useSelector(
        (state) => state.ColorL
    );
    // console.log(colorL, colorFilterL, colorFinishL);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(addColorL());
    }, []);



    const addNewColor = () => {
        window.addEventListener("scroll", (e) => {
            try {
                const getcolorsheight = document.querySelectorAll(
                    ".linear-result-card"
                );
                let getheight;
                try {
                    getheight =
                        getcolorsheight[getcolorsheight.length - 1].offsetTop;
                } catch (error) {
                    console.log(error);
                }
                const scrollValue = window.scrollY + 831;

                if (getheight <= scrollValue) {
                    dispatch(addColorL());
                }
            } catch (error) {
                console.log(error);
            }
        });
    };

    useEffect(() => {
        addNewColor();
    });

    const Copy = (e) => {
        try {
            let vl = e;
            navigator.clipboard.writeText(vl).then(() => { });
        } catch (error) {
            return "";
        }
    };
    return (
        <>
            <div className="linear">
                <div className="linear-header container">
                    <div className="pageTitle">
                        <h1>ColorLinear</h1>
                        <div>Get beautiful color schemes</div>
                    </div>
                </div>

                <div className="linear-result container">
                    {colorFinishL.map((e) => (
                        <div
                            className="linear-result-card"
                            data-id={e.id}
                            onClick={() => {
                                Copy(`backgroundImage: "linear-gradient(${e.deg}deg, ${e.c1}, ${e.c2})"`);
                            }}
                        >
                            <div
                                data-linear={`backgroundImage: "linear-gradient(${e.deg}, ${e.c1}, ${e.c2})"`}
                                className="colorname"
                            >
                                <span>
                                    {e.c1 + "-" + e.c2}
                                    <FontAwesomeIcon icon={faCopy} className="iconCopy" />
                                </span>

                                <FontAwesomeIcon
                                    icon={faUpRightAndDownLeftFromCenter}
                                    className="fullscreen"
                                />
                            </div>

                            <div
                                style={{
                                    backgroundImage: `linear-gradient(${e.deg}deg, ${e.c1}, ${e.c2})`,
                                }}
                                className="colorbackground"
                            ></div>

                            <div className="copySuccess">
                                <small>Color Copied!</small>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Palettes;
