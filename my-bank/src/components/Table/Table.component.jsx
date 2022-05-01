import React from "react";

const Table = ({list,headings})=>{
return(
    <table className="info-table">
            <thead>
            <tr>
                {headings.map((heading)=>{
                    return <th>{heading}</th>
                })}
            </tr>
            </thead>
            <tbody>
            {
                list.map((account,index)=>{
                    const {branchCode,accountNumber,name,registered,accountType,deposit} = account;
                    return (
                        <tr key={index}>
                            <td>{branchCode}</td>
                            <td>{accountNumber}</td>
                            <td>{name}</td>
                            <td>{registered}</td>
                            <td>{accountType}</td>
                            <td>{deposit}</td>
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
)
}

export default Table;