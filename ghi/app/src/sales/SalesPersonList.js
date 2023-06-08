import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function SalespersonList() {
    const [salespeople, setSalespeople] = useState([]);

    const fetchSalespersonData = async () => {
        const Url = "http://localhost:8090/api/salespeople/";
        const response = await fetch(Url);
        if (response.ok) {
            const data = await response.json();
            setSalespeople(data.salespeople);
        }
    };

    useEffect(() => { fetchSalespersonData(); }, []);


    return (
        <div className="container">
            <h1 className="text-center">Salespeople</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th className="text-center">First Name</th>
                        <th className="text-center">Last Name</th>
                        <th className="text-center">Employee ID</th>
                        <th className="text-center">Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {salespeople.map((person) => (
                        <tr key={person.employee_id}>
                            <td className="text-center">{person.first_name}</td>
                            <td className="text-center">{person.last_name}</td>
                            <td className="text-center">{person.employee_id}</td>
                            <td className="text-center">
                                <Link to={`/salespeople/edit/${person.id}/`} relative="path">
                                    Edit
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default SalespersonList;
