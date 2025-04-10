import React from "react";

function CountryRow(props) {

    return (
        <tr class="table-light">
            <td className="col"><img src={props.flag} style={{width : '25px'}} /></td>
            <td className="col">
                <h2>{props.country}</h2>
                <p>{props.description}</p>
            </td>
        </tr>
    );

};

export default CountryRow;