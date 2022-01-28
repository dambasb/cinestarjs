import React from "react";

const Table = ({ list, colNames}) => {

    console.log(list);
    console.log(colNames);

     const whatTime=(id)=>{
        console.log(id)
    }
  return (
    <div>
      test
      {list.length > 0 && (
        <table cellSpacing="0">
          <thead>
            <tr>
              {colNames.map((headerItem, index) => {
                  
                 return <th key={index}>{headerItem}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {Object.values(list).map((obj, index) => {
              return (
                <tr key={index}>
                {Object.values(obj).map((value, index2) => {
                    console.log('sssss', index2)
                  return <td key={index2} onClick={whatTime(index2)}>{value}</td>;
                })}
              </tr>
              )
              
              
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Table;
