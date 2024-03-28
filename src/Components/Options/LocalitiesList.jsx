import React, { useState } from "react";
import { Data } from "../../assets/LocalitiesData";

const LocalitiesList = () => {
    const [seeMore, setSeeMore] = useState(true)
    const [handleValue, setHandleValue] = useState(true);
    const [val, setVal] = useState(8);
    const handleSeeMore = () => {
        setHandleValue(!handleValue);
        setVal(29);
    }
    const handleSeeMore2 = () => {
        setHandleValue(!handleValue);
        setVal(8);
    }
  return (
      <div className=" w-full h-full grid grid-cols-3 gap-4 mt-6 pt-6">
          {Data.slice(0, val).map(item => {
              return (
                  <div className=" border w-[100%] rounded-lg h-20 p-4 flex cursor-pointer hover:shadow-md" key={item.id}>
                          <div className=" w-4/5">
                              <h1 className=" text-xl">{item.name}</h1>

                              <h1>{item.places} places</h1>
                          </div>
                          <div className=" w-1/5 flex items-center justify-end">
                              <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="#1C1C1C"
                                  width="15"
                                  height="15"
                                  viewBox="0 0 20 20"
                                  aria-labelledby="icon-svg-title- icon-svg-desc-"
                                  role="img"
                                  className="sc-rbbb40-0 jKmKoK float-right"
                              >
                                  <title>chevron-right</title>
                                  <path d="M6.98 15.94c-0.3-0.28-0.3-0.76 0-1.060l4.46-4.46-4.46-4.48c-0.3-0.28-0.3-0.76 0-1.060s0.76-0.28 1.060 0l5 5c0.28 0.3 0.28 0.78 0 1.060l-5 5c-0.3 0.3-0.78 0.3-1.060 0z"></path>
                              </svg>
                          </div>
                      </div>
                  
          )
          })}
          
          {handleValue ? <button onClick={handleSeeMore} className=" border w-[100%] rounded-lg h-20 flex justify-center items-center text-xl"><h1 className=" mr-4">see more</h1>
              {handleValue ? <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#1C1C1C"
                  width="18"
                  height="18"
                  viewBox="0 0 20 20"
                  aria-labelledby="icon-svg-title- icon-svg-desc-"
                  role="img"
                  className="sc-rbbb40-0 iwHbVQ"
              >
                  <title>chevron-down</title>
                  <path d="M4.48 7.38c0.28-0.28 0.76-0.28 1.060 0l4.46 4.48 4.48-4.48c0.28-0.28 0.76-0.28 1.060 0s0.28 0.78 0 1.060l-5 5c-0.3 0.3-0.78 0.3-1.060 0l-5-5c-0.3-0.28-0.3-0.76 0-1.060z"></path>
              </svg> : <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#1C1C1C"
                  width="18"
                  height="18"
                  viewBox="0 0 20 20"
                  aria-labelledby="icon-svg-title- icon-svg-desc-"
                  role="img"
                  className="sc-rbbb40-0 iwHbVQ rotate-180"
              >
                  <title>chevron-down</title>
                  <path d="M4.48 7.38c0.28-0.28 0.76-0.28 1.060 0l4.46 4.48 4.48-4.48c0.28-0.28 0.76-0.28 1.060 0s0.28 0.78 0 1.060l-5 5c-0.3 0.3-0.78 0.3-1.060 0l-5-5c-0.3-0.28-0.3-0.76 0-1.060z"></path>
              </svg>
              }  
          </button> : <button onClick={handleSeeMore2} className=" border w-[100%] rounded-lg h-20 flex justify-center items-center text-xl"><h1 className=" mr-4">see less</h1>
              {handleValue ? <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#1C1C1C"
                  width="18"
                  height="18"
                  viewBox="0 0 20 20"
                  aria-labelledby="icon-svg-title- icon-svg-desc-"
                  role="img"
                  className="sc-rbbb40-0 iwHbVQ"
              >
                  <title>chevron-down</title>
                  <path d="M4.48 7.38c0.28-0.28 0.76-0.28 1.060 0l4.46 4.48 4.48-4.48c0.28-0.28 0.76-0.28 1.060 0s0.28 0.78 0 1.060l-5 5c-0.3 0.3-0.78 0.3-1.060 0l-5-5c-0.3-0.28-0.3-0.76 0-1.060z"></path>
              </svg> : <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#1C1C1C"
                  width="18"
                  height="18"
                  viewBox="0 0 20 20"
                  aria-labelledby="icon-svg-title- icon-svg-desc-"
                  role="img"
                  className="sc-rbbb40-0 iwHbVQ rotate-180"
              >
                  <title>chevron-down</title>
                  <path d="M4.48 7.38c0.28-0.28 0.76-0.28 1.060 0l4.46 4.48 4.48-4.48c0.28-0.28 0.76-0.28 1.060 0s0.28 0.78 0 1.060l-5 5c-0.3 0.3-0.78 0.3-1.060 0l-5-5c-0.3-0.28-0.3-0.76 0-1.060z"></path>
              </svg>
              }
          </button>}
      </div>
  );
};

export default LocalitiesList;
