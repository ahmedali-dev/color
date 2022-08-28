import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartCircleBolt } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addColor } from "../redux/ColorSlice";
const Palettes = () => {
  // getColorFinsh
  const { colorFinish, color, colorFilter } = useSelector(
    (state) => state.Color
  );
  console.log(color);
  console.log(colorFilter);
  console.log(colorFinish);

  // dispatch
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addColor());
    setTimeout(() => {
      // dispatch(filterColor());
    }, 3000);
  }, []);

  const popup = (e) => {
    setTimeout(() => {}, 5000);
  };

  const addNewColor = () => {
    // const y = Math.abs(body.getBoundingClientRect().y)+8;
    // const bound = body.getBoundingClientRect().height;

    // console.log(getcolorheight)
    window.addEventListener("scroll", (e) => {
      const getcolorsheight = document.querySelectorAll(".palettes_result_col");
      const getcolorheight =
        getcolorsheight[getcolorsheight.length - 1].offsetTop;
      const scrollValue = window.scrollY + 831;
      console.log(scrollValue, getcolorheight);
      if (getcolorheight <= scrollValue) {
        dispatch(addColor());
      }
    });
  };

  useEffect(() => {
    addNewColor();
  });
  const copy = (e) => {
    try {
      let vl = e.target.querySelector("small").getAttribute("data-color");
      console.log(vl);
      navigator.clipboard.writeText(vl).then(() => {
        console.log("success");
      });
    } catch (error) {
      return "";
    }
  };

  // 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
  return (
    <>
      <div className="palettes">
        {/* header */}
        <div className="s palettes-header container">
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
                      onClick={(e) => copy(e)}
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

      {/* message pop up */}
      <div className="pop"></div>
    </>
  );
};

export default Palettes;
