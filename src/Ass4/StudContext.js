import React, { createContext, useState } from "react";
export const StudContext = createContext();

export const StudData = (props) => {
    let [rows, setRows] = useState([
        { name: "John", age: "26", course: "MERN", batch: "October", id: "1" },
        { name: "Doe", age: "25", course: "MERN", batch: "November", id: "2" },
        { name: "Biden", age: "26", course: "MERN", batch: "September", id: "3" },
        { name: "Barar", age: "22", course: "MERN", batch: "September", id: "4" },
        { name: "Choel", age: "23", course: "MERN", batch: "December", id: "5" },
        { name: "Barack", age: "24", course: "MERN", batch: "October", id: "6" }
      ]
);


    return(
        <>
        <StudContext.Provider value={[rows, setRows]}>
            {props.children}
        </StudContext.Provider>
        </>
    )
}