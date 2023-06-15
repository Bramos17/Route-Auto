import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import person from '../images/person.png';

function SalespersonList() {
    const [salespeople, setSalespeople] = useState([]);

    const fetchSalespersonData = async () => {
        const Url = "http://localhost:8090/api/salespeople/";
        const response = await fetch(Url);
        if (response.ok) {
            const data = await response.json();
            setSalespeople(data.salespersons);
            console.log(data.salespersons);
        }
        else { console.error(response) };
    };

    useEffect(() => { fetchSalespersonData(); }, []);
    const handleDeleteSalesPerson = async (id) => {
        const Url = `http://localhost:8090/api/salespeople/${id}`;
        const response = await fetch(Url, { method: "DELETE" });
        if (response.ok) {
            window.location.reload();
        }
    };

    return (
        <div className="container">
            <h1 className="text-center">Salespeople</h1>
            <table className="table"id= "SalespersonList">
                <thead>
                    <tr>
                        <th className="text-center">First Name</th>
                        <th className="text-center">Last Name</th>
                        <th className="text-center">Employee ID</th>
                        <th className="text-center">Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {salespeople.map((person) => {
                        return(
                            <tr key={person.id}>
                                <td className="text-center">{person.first_name}</td>
                                <td className="text-center">{person.last_name}</td>
                                <td className="text-center">{person.employee_id}</td>
                                <td className="text-center">
                                    <Link to={`/salespeople/edit/${person.id}/`} relative="path">
                                        Edit
                                    </Link>
                                </td>
                                <td className="text-center">
                                    <button onClick={() => handleDeleteSalesPerson(person.id)} className="btn btn-danger">Delete</button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <a href="http://localhost:3000/sales/salesPerson/new" role="button" id="addnewauto"> <img id="stearingwheel" width="40px" height="auto" src={person} alt="person"/> Add New Sales Person
            </a>
        </div>
    );
}

export default SalespersonList;
