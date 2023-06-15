import React, { useState, useEffect } from 'react';

function SalesPersonHistory() {
    const [sales, setSales] = useState([]);
    const [salesperson, setSalesperson] = useState([]);
    const [person, setPerson] = useState("");



    useEffect(() => {
        async function fetchData() {
            const response = await fetch('http://localhost:8090/api/sales/');
            if (response.ok) {
                const data = await response.json();
                setSales(data.sales);
            }
        }
        fetchData();
    }, []);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('http://localhost:8090/api/salespeople/');
            if (response.ok) {
                const data = await response.json();
                setSalesperson(data.salespersons);
            }
        }
        fetchData();
    }, []);
    const handleperson = (event) => {

        setPerson(event.target.value);
    };

    const getSalespersonName = (salesperson, sales) => {
        if (!salesperson) {
            return sales;
        }
        return sales.filter((sales) => sales.salesperson.id === salesperson);
    };

    const filteredSales = getSalespersonName(parseInt(person), sales);


    return (
        <div className="container mt-2">
            <h1>Sales person history</h1>
            <div className="mb-3">
                <select onChange={handleperson} className="form-select" required id="vin" name="vin" value={person}>
                <option value="">Choose a salesperson</option>
                {salesperson.map(salesperson => {
                    return (
                        <option key={salesperson.id} value={salesperson.id}>
                            {salesperson.employee_id} - {salesperson.first_name}
                        </option>
                    );
                })}
            </select>
            </div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Sales person</th>
                        <th>Customer</th>
                        <th>VIN</th>
                        <th>Sale price</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredSales.map((sales) => {
                            return (
                                <tr key={sales.id}>
                                    <td>{sales.salesperson.first_name}</td>
                                    <td>{sales.customer.first_name} {sales.customer.last_name} </td>
                                    <td>{sales.automobile.vin}</td>
                                    <td>${sales.price}</td>
                                </tr>
                            );
                        }
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default SalesPersonHistory;
