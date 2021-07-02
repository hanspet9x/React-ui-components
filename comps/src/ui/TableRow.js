// import React from 'react';
// import { useEffect } from 'react';
// import { useState } from 'react';
// import { useRef } from 'react';
// import { HP } from '../utils/HP';

// export const T_String = "i";
// export const T_Number = "n";
// export const T_Select = "s";
// export const T_TextArea = "t";
// export const T_Check = "c";
// export const T_File = "f";
// export const T_Date = "d";
// export const T_Time = "tt";
// export const T_DataList = "dd";
// export const T_String_ReadOnly = "i_ro";
// export const T_Number_ReadOnly = "n_ro";
// export const T_Select_ReadOnly = "s_ro";
// export const T_TextArea_ReadOnly = "t_ro";
// export const T_Check_ReadOnly = "c_ro";
// export const T_Date_ReadOnly = "d_ro";
// export const T_Time_ReadOnly = "tt_ro";
// export const T_String_Required = "i_r";
// export const T_Number_Required = "n_r";
// export const T_Select_Required = "s_r";
// export const T_TextArea_Required = "t_r";
// export const T_File_Required = "f_r";
// export const T_Date_Required = "d_r";
// export const T_Time_Required = "tt_r";
// export const T_DataList_Required = "dd_r";


// function TableRow({ dataTypes, onSubmit, data = [], rowCount = 1, onRowChange, rowChanged = {}, loading }) {


//     // console.log(dataTypes);
//     const dataTypeHasNoName = Array.isArray(dataTypes);

//     const indexRef = useRef();

//     const rowRef = useRef(null);

//     let dt = dataTypeHasNoName ? dataTypes.length : Object.keys(dataTypes).length;

//     const [state, setState] = useState([]);

//     const handleChange = ({ target }) => {

//         const { name, value, dataset, type } = target;

//         let modValue = value;

//         if (type === "checkbox") {
//             modValue = target.checked;
//         }

//         if (type === "file") {
//             if (target.files.length > 1) {
//                 modValue = [value, target.files]
//             } else {
//                 modValue = [value, target.files[0]];
//             }
//         }

//         let idx = parseInt(dataset.id);

//         setState((state) => {
//             let newState;

//             if (state[idx] === undefined) {
//                 newState = [...state];
//                 newState[idx] = { [name]: modValue };
//             } else {

//                 newState = [...state];
//                 //setrowchanged

//                 if (rowRef.current !== null) {
//                     console.log(rowRef.current);
//                     newState[indexRef.current] = { ...state[indexRef.current], ...rowRef.current };
//                     if (indexRef.current === idx) {
//                         newState[idx] = { ...newState[idx], [name]: modValue };
//                     } else {
//                         newState[idx] = { ...state[idx], [name]: modValue };
//                     }
//                     rowRef.current = null;
//                 } else {
//                     newState[idx] = { ...state[idx], [name]: modValue };
//                 }


//             }
//             onRowChange(newState[idx], name, modValue, idx);
//             indexRef.current = idx;
//             // console.log(newState);
//             return newState;

//         });


//     }

//     const handleBlur = ({ target }) => {
//         // const { name, value, dataset, type } = target;
//     }

//     useEffect(() => {
//         if (Object.keys(rowChanged).length) {

//             rowRef.current = rowChanged;
//         }
//     });

//     const onComplete = () => {
//         onSubmit(state);
//     }

//     if (data.length === 0 || rowCount === 0) {
//         return "";
//     }

//     if (Object.keys(dataTypes).length) {

//     }

//     const getInputTypeFromArray = (i, nameOrIndex, name, modValue) => {
//         // console.log(i, nameOrIndex, name, value);
//         if (nameOrIndex !== undefined && typeof nameOrIndex === "object") {

//             if (nameOrIndex.constructor === Array) {

//                 if (Array.isArray(nameOrIndex)) {
//                     return getSelect(nameOrIndex, i, name, modValue);

//                 }
//             } else {// it is an object with type and value
//                 const { type, value } = nameOrIndex;

//                 if (typeof value === "object") {

//                     switch (type) {
//                         case T_DataList:
//                             return getDataList(value, i, name, modValue);
//                         case T_Select:
//                             return getSelect(value, i, name, modValue);
//                         default:
//                     }
//                 } else {
//                     return getInputsObj(type, i, name, modValue ? modValue : value);
//                 }

//             }
//         } else {

//             return getInputsObj(nameOrIndex, i, name, modValue);
//         }
//     }

//     const getSelect = (map, dataId, name, value) => {
//         return (
//             <select style={styles.input} data-id={dataId} onChange={handleChange} name={name} value={value}>
//                 <option>choose</option>
//                 {map.map((e, i) => {
//                     if (Array.isArray(e)) {
//                         return <option key={i} value={e[0]}>{e[1]}</option>
//                     } else {
//                         return <option key={i} value={e}>{e}</option>
//                     }
//                 })}
//             </select>
//         )
//     }

//     const getDataList = (map, dataId, name, value) => {
//         return (
//             <>
//                 <input style={styles.input} list={`datalist${dataId}`} data-id={dataId} onChange={handleChange} name={name} value={value} />
//                 <datalist id={`datalist${dataId}`}>
//                     {map.map((e, i) => {
//                         if (Array.isArray(e)) {
//                             return <option key={i} value={e[0]}>{e[1]}</option>
//                         } else {
//                             return <option key={i} value={e}>{e}</option>
//                         }
//                     })}
//                 </datalist>
//             </>
//         );
//     }

//     const getInputsObj = (type, i, name, modValue) => {


//         switch (type) {

//             case T_String:
//                 return <input type="text" data-id={i} onChange={handleChange} name={name} value={modValue} style={styles.input} />

//             case T_String_ReadOnly:

//                 return <input type="text" data-id={i} onChange={handleChange} name={name} value={modValue} style={styles.input} readOnly />

//             case T_String_Required:
//                 return <input type="text" data-id={i} onChange={handleChange} name={name} value={modValue} style={styles.input} required />

//             case T_Number:
//                 return <input type="number" data-id={i} onChange={handleChange} name={name} value={modValue} style={styles.input} />

//             case T_Number_ReadOnly:
//                 return <input readOnly type="number" data-id={i} onChange={handleChange} name={name} value={modValue} style={styles.input} />

//             case T_Number_Required:
//                 return <input type="number" data-id={i} onChange={handleChange} name={name} value={modValue} style={styles.input} required />

//             case T_Date:
//                 return <input type="date" data-id={i} onChange={handleChange} name={name} value={modValue} style={styles.input} />

//             case T_Date_ReadOnly:
//                 return <input readOnly type="date" data-id={i} onChange={handleChange} name={name} value={modValue} style={styles.input} />

//             case T_Date_Required:
//                 return <input type="date" data-id={i} onChange={handleChange} name={name} value={modValue} style={styles.input} required />

//             case T_Time:
//                 return <input type="time" data-id={i} onChange={handleChange} name={name} value={modValue} style={styles.input} />

//             case T_Time_ReadOnly:
//                 return <input readOnly type="time" data-id={i} onChange={handleChange} name={name} value={modValue} style={styles.input} />

//             case T_Time_Required:
//                 return <input type="time" data-id={i} onChange={handleChange} name={name} value={modValue} style={styles.input} />

//             case T_Check:
//                 return <input type="checkbox" data-id={i} onChange={handleChange} name={name} value={modValue} />

//             case T_Check_ReadOnly:
//                 return <input type="checkbox" data-id={i} onChange={handleChange} name={name} value={modValue} readOnly />

//             case T_File:
//                 return <input type="file" data-id={i} onChange={handleChange} name={name} multiple value={Array.isArray(modValue) ? modValue[0] : modValue} />

//             case T_File_Required:
//                 return <input type="file" data-id={i} onChange={handleChange} name={name} multiple value={Array.isArray(modValue) ? modValue[0] : modValue} required />

//             case T_TextArea:
//                 return <textarea data-id={i} onChange={handleChange} name={name} value={modValue} style={styles.input} />

//             case T_TextArea_ReadOnly:
//                 return <textarea readOnly data-id={i} onChange={handleChange} name={name} value={modValue} style={styles.input} />

//             case T_TextArea_Required:
//                 return <textarea data-id={i} onChange={handleChange} name={name} value={modValue} style={styles.input} required />

//             default:
//                 return <input data-id={i} type="text" onChange={handleChange} name={name} value={modValue} style={styles.input} />
//         }

//     }

//     const getInputByDataType = (rowIndex, dataIndex, name, value) => {

//         if (dataTypeHasNoName) {

//             return getInputTypeFromArray(rowIndex, dataTypes[dataIndex], name, value);

//         } else if (dataTypes) {
//             //data type is object

//             return getInputTypeFromArray(rowIndex, dataTypes[name], name, value);

//         }

//     }

//     return <React.Fragment>
//         {HP.getArrayOfNum(rowCount).map((rowNo) => {

//             return (
//                 <tr key={rowNo} style={styles.tr}>
//                     {/* SN */}
//                     <td style={HP.combineStyles(styles.td, { paddingLeft: 8 })}>{rowNo + 1}</td>

//                     {Object.entries(data[0]).map(
//                         // data[0] = {key: "", key2: ""}
//                         ([column], dataIndex) => {
//                             // [key2], 1 
//                             return <td key={dataIndex} style={styles.td}>

//                                 {
//                                     dt > 0 ?
//                                         getInputByDataType(rowNo, dataIndex, column, state[rowNo] ?
//                                             state[rowNo][column] : "") :

//                                         <input style={styles.input} data-id={rowNo} onChange={handleChange} onBlur={handleBlur} type="text" name={column} value={state[rowNo] ? state[rowNo][column] : ""} />

//                                 }


//                             </td>
//                         })}
//                 </tr>
//             )
//         })}
//         <tr style={{ backgroundColor: 'unset', position: 'absolute' }}>
//             <td style={{ paddingTop: 20 }}>
//                 <button onClick={onComplete} disabled={loading}>Done</button>
//             </td>
//         </tr>
//     </React.Fragment>

// }


// const styles = {


//     table: {
//         width: '100%',
//     },
//     tr: {
//         borderBottom: 'solid 1px black'
//     },
//     td: {
//         backgroundColor: 'white',
//         padding: 0,
//     },

//     heading: {
//         padding: '4px 30px',
//         color: '#444',
//         fontWeight: 'lighter',
//     },

//     image: {

//     },

//     input: {
//         outline: 'none',
//         width: 'calc(100% - 16px)',
//         border: 'none',
//         padding: '10px 8px',

//     },
//     textArea: {
//         outline: 'none',
//         width: '200px',
//         border: 'none',
//         padding: '10px 8px',

//     },

//     tableTop: {
//         padding: '2px 10px',
//         display: 'flex',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         backgroundColor: '#f2f2f2',
//         // width: 'calc(100% - 40px)',
//         boxSizing: 'border-box',

//     },

//     tableTopAddIcon: {
//         width: 30,
//         height: 30,
//         color: '#444',
//         cursor: 'pointer',
//         marginRight: 3
//     },

//     bottom: {
//         marginTop: 5,
//         display: 'flex',
//         justifyContent: 'space-between',
//         // position: 'absolute',
//         width: '100%'
//     },

//     button: {
//         padding: '5px 10px',
//         marginRight: 2,
//         fontSize: 'small',
//         color: '#666'
//     },
//     auxView: (show, x, y) => {
//         return {
//             margin: 2,
//             position: 'fixed',
//             opacity: show ? 1 : 0,
//             pointerEvents: show ? 'auto' : 'none',
//             left: x,
//             top: y
//         }
//     },
//     pageNo: {
//         height: 28,
//         outline: 'none',
//         borderRadius: 8,
//         marginRight: 4,
//         border: 'solid 1px gray'
//     },



// }

// export default TableRow;