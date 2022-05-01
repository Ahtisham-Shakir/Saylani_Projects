import React from "react";

const Table = ({list,headings,page})=>{
return(
    <table className="info-table">
            <thead>
            <tr>
                {headings.map((heading,index)=>{
                    return <th key={index}>{heading}</th>
                })}
            </tr>
            </thead>
            <tbody>
            {
                page === 'accounts' ?
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
                :
                list.map((transaction,index)=>{
                    const {id,time,registered,accountNumber,type,deposit} = transaction;
                    return (
                        <tr key={index}>
                            <td>{id}</td>
                            <td>{time}</td>
                            <td>{registered}</td>
                            <td>{accountNumber}</td>
                            <td>{type}</td>
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