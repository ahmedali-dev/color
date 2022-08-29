import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeartCircleBolt,
  faWandSparkles,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addColor } from "../redux/ColorSlice";
import { useRef } from "react";
import { useState } from "react";
const Palettes = () => {
  // getColorFinsh
  const { colorFinish, color, colorFilter } = useSelector(
    (state) => state.Color
  );

  // dispatch
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addColor());
    setTimeout(() => {
      // dispatch(filterColor());
    }, 3000);
  }, []);

  const popup = (e) => {
    setTimeout(() => { }, 5000);
  };

  const addNewColor = () => {
    window.addEventListener("scroll", (e) => {
      try {
        const getcolorsheight = document.querySelectorAll(
          ".palettes_result_col"
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
          dispatch(addColor());
        }
      } catch (error) {
        console.log(error);
      }
    });
  };

  useEffect(() => {
    addNewColor();
  });
  const copy = (e) => {
    try {
      let vl = e.target.querySelector("small").getAttribute("data-color");

      navigator.clipboard.writeText(vl).then(() => { });
    } catch (error) {
      return "";
    }
  };

  // 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
  // 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
  /**
   * 
   *         <div className="pop">
          <FontAwesomeIcon className="pop-icon" icon={faWandSparkles} />
          <span>color copied</span>
        </div>
   */

  return (
    <>
      {/* message pop up */}
      <div className="popList">
        {/* {popList.length > 0 ? popList.map((pop) => pop) : ""} */}
      </div>

      <div className="palettes">
        {/* header */}
        <div className="palettes-header container">
          <div className="pageTitle">
            <h1>ColorPalettes</h1>
            <div>Get beautiful color schemes</div>
          </div>
        </div>

        {/* colors */}
        <div className="palettes_result container">
          {colorFinish.map((color) => {
            return (
              <div data-id={color.id} className="palettes_result_col">
                {/* colors */}
                <div className="palettes_result_col_colors">
                  {color.hex.map((c) => (
                    <div
                      style={{ background: `${c[0]}` }}
                      onClick={(e) => {
                        copy(e);
                      }}
                    >
                      <small data-color={c[0]} className={c[1]}>
                        {c[0]}
                      </small>
                    </div>
                  ))}
                </div>

                {/* info */}
                <div className="palettes_result_col_info">
                  <div className="palettes_result_col_info_button_pal_save">
                    <button className="link">
                      <FontAwesomeIcon icon={faHeartCircleBolt} />
                      <small>30K</small>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Palettes;
