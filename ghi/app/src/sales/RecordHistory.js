import React, { useState, useEffect } from 'react';

function RecordHistory() {
    const [records, setRecords] = useState([]);
    const [employees, setEmployees] = useState([]);
    const [salesPersonId, setSalesPersonId] = useState([]);


    useEffect(() => {
        async function fechemployeeData() {
            const response = await fetch('http://localhost:8080/employees');
            const data = await response.json();
            setEmployees(data.employee);
            setSalesPersonId(data.employee[0].id);
        }
        fechemployeeData();
    }, []);
    const handleSalesPerson = (event) => {
        setSalesPersonId(event.target.value);
    };

    useEffect(() => {
        async function fetchRecordData() {
            const response = await fetch(`http://localhost:8090/api/sales/staff/${salesPersonId}/records/`);
            if (response.ok) {
                const data = await response.json();
                setRecords(data.records);
            }
        }
        // eslint-disable-next-line eqeqeq
        if (salesPersonId =="") fetchRecordData();
    }, [salesPersonId]);

    return (
        <div className="container mt-2">
            <h1>Sales Person history</h1>
            <div className="mb-3">
                <select onChange={handleSalesPerson} value={salesPersonId} className="form-select" required id="vin" name="vin">
                {employees.map(employee => {
                return (
                    <option key={employee.id} value={employee.id}> {`${employee.employee_number} - ${employee.name}`} </option>
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
export default RecordHistory;
