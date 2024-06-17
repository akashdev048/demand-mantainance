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

let colors = ["#6EA467", "#1db0fe", "#FCA22F", "#D03A16"]

let arr1 = ["Alabama", "Alaska", "Arizona", "Colorado", "Florida", "Georgia", "Indiana", "Kansas" , "Maine", "Massachusetts", "Minnesota", "Mississippi", "Utah"]
let arr2 = ["New Jersey", "North Carolina", "North Dakota", "Oklahoma", "Pennsylvania", "South Dakota", "Texas", "Wyoming" , "Connecticut", "Missouri", "West Virginia", "Montana", "Virginia"]
let arr3 = ["Illinois", "New Mexico", "Arkansas", "California", "Delaware", "istrict of Columbia", "Hawaii", "Iowa" , "Kentucky", "Maryland", "Michigan", "Ohio", "Tennessee", "Washington"]



const LocatioMap = () => {
    return (
        <ComposableMap projection="geoAlbersUsa">
            <Geographies geography={geoUrl}>
                {({ geographies }) => (
                    <>
                        {geographies.map(geo => {
                            let name = geo.properties.name
                            return (
                                <Geography
                                    key={geo.rsmKey}
                                    stroke="#FFF"
                                    geography={geo}
                                    fill = {arr1.includes(name) ? '#6EA467' : arr2.includes(name) ? "#1db0fe" : arr3.includes(name) ? '#FCA22F' : '#D03A16'}
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


        </ComposableMap>
    );
};

export default LocatioMap;
