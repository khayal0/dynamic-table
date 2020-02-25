import React, { useState } from "react";
import "../components/TableGrid.scss";
import ModalFilter from "./ModalFilter";
import { tableSample } from "../utils/fakeData";
import Checkbox from "./Checkbox";
const uuidv4 = require("uuid/v4");

export default function FlexTable(props) {
  const initialStateHeaders = tableSample.headers.map((header, i) => ({
    header,
    id: i,
    show: true
  }));
  const initialStateData = tableSample.data.map((data, i) => ({
    data,
    id: i,
    show: true
  }));

  const [headers, setHeaders] = useState(initialStateHeaders);
  const [datas, setDatas] = useState(initialStateData);

  return (
    <div className="table--grid--container">
      <table className="table--grid">
        <thead className="table--grid--head">
          {headers.map(item => (
            <th className=".table--grid--head__title">{item.header}</th>
          ))}
        </thead>
        <tbody className="table--grid--body">
          {datas.map(item => (
            <tr>{item.data}</tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
// import React, { useState } from "react";
// import "../components/TableGrid.scss";
// import ModalFilter from "./ModalFilter";
// import { tableSample } from "../utils/fakeData";
// import Checkbox from "./Checkbox";
// const uuidv4 = require("uuid/v4");

// export default function FlexTable(props) {
//   const initialStateHeaders = tableSample.headers.map((header, i) => ({
//     header,
//     id: i,
//     show: true
//   }));
//   const initialStateData = tableSample.data.map((data, i) => ({
//     data,
//     id: i,
//     show: true
//   }));

//   const [headers, setHeaders] = useState(initialStateHeaders);
//   const [datas, setDatas] = useState(initialStateData);

//   return (
//     <div className="table--grid--container">
//       <div className="table--grid--head">
//         <div className="table--grid--head__title">
//           <span>Customer Reports</span>
//         </div>
//         <div className="table--grid--head__filter">
//           <ModalFilter
//             setHeaders={setHeaders}
//             setData={setDatas}
//             datas={datas}
//             headers={headers}
//           />
//         </div>
//       </div>
//       <div className="table--grid--body">
//         <div className="table--grid">
//           {headers.map(item =>
//             item.show ? <span key={item.id}>{item.header}</span> : null
//           )}
//           {tableSample.data.map(items =>
//             items.map((item, i) => {
//               return (
//                 <React.Fragment key={i}>
//                   {i === 0 ? (
//                     <React.Fragment>
//                       <span className="span__1">
//                         <Checkbox />
//                       </span>
//                       <span className={`span__${i + 1}`}>{item}</span>
//                     </React.Fragment>
//                   ) : i === 7 ? (
//                     <span>
//                       <span className={`button--status__${item}`.toLowerCase()}>
//                         {item}
//                       </span>
//                     </span>
//                   ) : (
//                     <span className={`span__${i + 1}`}>{item}</span>
//                   )}
//                 </React.Fragment>
//               );
//             })
//           )}
//         </div>
//       </div>
//       {/*
//         This lines need improvement
//         <div className="pagination">
//         <button className="pageChangePagination">&lt;</button>
//         <button className="pageCountPagination">1</button>
//         <button className="pageCountPagination">2</button>
//         <button className="pageCountPagination">3</button>
//         <button className="pageChangePagination">&gt;</button>
//       </div> */}
//     </div>
//   );
// }
