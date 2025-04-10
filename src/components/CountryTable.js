import React from "react";
import CountryRow from "./CountryRow";

function CountryTable(props) {

    return (
        <table className="table table-hover align-middle">
            {/* <thead>
                <tr class="table-primary">
                    Heading
                </tr>
            </thead> */}
            <tbody>
                {props.countryList.map(countryObj => (
                    <CountryRow
                        key={countryObj.rowNumber}
                        flag={countryObj.flag}
                        description={countryObj.description}
                        country={countryObj.country}
                    />
                ))}
            </tbody>
        </table>
    );
}

export default CountryTable;