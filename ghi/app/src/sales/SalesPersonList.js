import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function SalesPersonList() {
    const [salespeople, setSalespeople] = useState([]);

const fetchSalespersonData = async () => {
    const salespersonUrl = "http://localhost:8090/api/salespeople/";
    const response = await fetch(salespersonUrl);
    if (response.ok) {
        const data = await response.json();
        setSalespeople(data.salespeople);
    }

};

    useEffect(() => { fetchSalespersonData(); }, []);

    console.log("hello0");

    return (
        <div className="container">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th className="text-center">First Name</th>
                        <th className="text-center">Last Name</th>
                        <th className="text-center">employee_id</th>
                        <th className="text-center">Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {salespeople.map(salesperson => {
                        return (
                            <tr key={salesperson.employee_id}>
                                <td className="text-center">{salesperson.first_name}</td>
                                <td className="text-center">{salesperson.last_name}</td>
                                <td className="text-center">{salesperson.employee_id}</td>
                                <td className="text-center">
                                    <Link to={`/salespeople/edit/${salesperson.id}/`} relative="path">Edit</Link>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );

}

export default SalesPersonList;
