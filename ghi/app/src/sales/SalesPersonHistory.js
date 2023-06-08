import React, { useState, useEffect } from 'react';

function SalesPersonHistory(props) {
    const [records, setRecords] = useState([]);
    const [employees, setEmployee] = useState([]);
    const [employeeID, setEmployeeID] = useState("");

    useEffect(() => {
        async function fetchemployeeData() {
            const response = await fetch('http://localhost:8090/api/salespeople');
            if (response.ok) {
                const data = await response.json();
                setEmployee(data.employee);
                setEmployeeID(data.employee[0].id);
            }
        }
        fetchemployeeData();
    }, []);

    const handleSalesPerson = (event) => {
        setEmployeeID(event.target.value);
    };

    useEffect(() => {
        async function fetchRecordData() {
            const response = await fetch(`http://localhost:8090/api/salespeople/${employeeID}/`);
            if (response.ok) {
                const data = await response.json();
                setRecords(data.records);
            }
        }
        if (employeeID !== "") fetchRecordData();
    }, [employeeID]);

    return (
        <div className="container mt-2">
            <h1>Sales person history</h1>
            <div className="mb-3">
            <select onChange={handleSalesPerson} className="form-select" required id="vin" name="vin" value={employeeID}>
                {employees.map(employee => {
                    return (
                        <option key={employee.id} value={employee.id}>
                            {`${employee.employee_number} - ${employee.name}`}
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
                    {records.map((record, index) => {
                        const price = Number(record.price).toLocaleString(
                            'en-US', { maximumFractionDigits: 2 }
                        );
                        return (
                            <tr key={index}>
                                <td>{record.sales_person.name}</td>
                                <td>{record.customer.name}</td>
                                <td>{record.automobile.vin}</td>
                                <td>{`$${price}`}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default SalesPersonHistory;
