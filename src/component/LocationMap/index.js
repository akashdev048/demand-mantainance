import React from "react";
import { geoCentroid } from "d3-geo";
import {
    ComposableMap,
    Geographies,
    Geography,
    Marker,
    Annotation
} from "react-simple-maps";

import allStates from "./allstates.json";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

const offsets = {
    VT: [50, -8],
    NH: [34, 2],
    MA: [30, -1],
    RI: [28, 2],
    CT: [35, 10],
    NJ: [34, 1],
    DE: [33, 0],
    MD: [47, 10],
    DC: [49, 21]
};

const LocatioMap = () => {
    return (
        <ComposableMap projection="geoAlbersUsa">
            <Geographies geography={geoUrl}>
                {({ geographies }) => (
                    <>
                        {geographies.map(geo => {
                            return(
                                <Geography
                                    key={geo.rsmKey}
                                    stroke="#FFF"
                                    geography={geo}
                                    fill="#DDD"
                                />
                            )
                        }
                        )
                        }
                        {geographies.map(geo => {
                            const centroid = geoCentroid(geo);
                            const cur = allStates.find(s => s.val === geo.id);
                            return (
                                <>
                                    {/* {cur &&
                    centroid[0] > -160 &&
                    centroid[0] < -67 &&
                    (Object.keys(offsets).indexOf(cur.id) === -1 ? (
                      <Marker coordinates={centroid}>
                        <text y="2" fontSize={14} textAnchor="middle">
                          {cur.id}
                        </text>
                      </Marker>
                    ) : 

                    (
                      <Annotation
                        subject={centroid}
                        dx={offsets[cur.id][0]}
                        dy={offsets[cur.id][1]}
                      >
                        <text x={4} fontSize={14} alignmentBaseline="middle">
                          {cur.id}
                        </text>
                      </Annotation>
                    )
                    
                    )} */}
                                </>
                            );
                        })}
                    </>
                )}
            </Geographies>
            <>
            <Marker coordinates={[-72.006, 41.7128]}>
                <circle r={8} fill="red" />
            </Marker>
            <Marker coordinates={[-86.006, 40.7128]}>
                <circle r={8} fill="red" />
            </Marker>

            <Marker coordinates={[-96.006, 30.7128]}>
                <circle r={8} fill="orange" />
            </Marker>

            <Marker coordinates={[-104.006, 38.7128]}>
                <circle r={8} fill="green" />
            </Marker>

            <Marker coordinates={[-112.006, 43.7128]}>
                <circle r={8} fill="orange" />
            </Marker>

            <Marker coordinates={[-122.006, 38.7128]}>
                <circle r={8} fill="red" />
            </Marker>

            {/* <Marker coordinates={[-40.006, 60.7128]}>
                <circle r={8} fill="#F53" />
            </Marker> */}
            </>
         

        </ComposableMap>
    );
};

export default LocatioMap;
