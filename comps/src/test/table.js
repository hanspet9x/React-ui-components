import React from 'react';
import Table, { T_File, T_Number } from '../ui/Table';
import { T_String } from '../ui/Table';

function Tabletest(props) {

    const data = [
        {id: 1, name: "Akin1", lastName: 'Akinlolu', age: 11, gender: "Male", height: 12}, //Last name
        {id: 2, name: "Lolu2", lastName: 'Ololade', age: 15, gender: "Female", height: 25}, 
        {id: 3, name: "Akin3", lastName: 'Akinlolu', age: 11, gender: "Male", height: 12},
        {id: 4, name: "Lolu4", lastName: 'Ololade', age: 15, gender: "Female", height: 25},
        {id: 5, name: "Akin5", lastName: 'Akinlolu', age: 11, gender: "Male", height: 12},
        {id: 6, name: "Lolu6", lastName: 'Ololade', age: 15, gender: "Female", height: 25},
        {id: 7, name: "Akin7", lastName: 'Akinlolu', age: 11, gender: "Male", height: 12},
        {id: 8, name: "Lolu8", lastName: 'Ololade', age: 15, gender: "Female", height: 25},
        {id: 9, name: "Akin9", lastName: 'Akinlolu', age: 11, gender: "Male", height: 12},
        {id: 10, name: "Lolu10", lastName: 'Ololade', age: 15, gender: "Female", height: 25},
        {id: 11, name: "Akin11", lastName: 'Akinlolu', age: 11, gender: "Male", height: 12},
        {id: 12, name: "Lolu12", lastName: 'Ololade', age: 15, gender: "Female", height: 25},
        {id: 13, name: "Akin13", lastName: 'Akinlolu', age: 11, gender: "Male", height: 12},
        
    ];

    // const title = ["Name", "Lastname", "Age", "Gender", "Height"];

    const schema = [T_String, T_String, T_Number, ["male", "female"], T_File];

    const handleChange = (row) => {
        console.log("row change")
        console.log(row);
    }

    const handleAllData = (data)=> {
        console.log("all data");
        console.log(data);
    }

    const handleNewData = (arr) => {
        console.log("new data");
        console.log(arr);
    }
    return (
        <Table onDataChange={handleAllData} 
        excludeColumns={["name"]}
         onRowChange={handleChange} onAddedRows={handleNewData} data={data} camelToGapTitle={true} columnsDataTypes={schema} title="Testing Table" rowsPerPage={5}/>
      
    );
}

export default Tabletest;