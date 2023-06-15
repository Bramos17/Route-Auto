import React, { useState, useEffect } from 'react';

const SalesForm = (props) => {
    const [formData, setFormData] = useState({
        automobile: "",
        salesperson: "",
        customer: "",
        price: "",
    });
    const [automobiles, setAutomobiles] = useState([]);
    const [employee, setemployee] = useState([]);
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const urls = [
                'http://localhost:8100/api/automobiles/',
                'http://localhost:8090/api/salespeople/',
                'http://localhost:8090/api/customers/',
            ];
            const requests = urls.map(url => fetch(url));
            const responses = await Promise.all(requests);
            responses.forEach(async response => {
                if (response.ok) {
                    const data = await response.json();
                    if (data.autos) { setAutomobiles(data.autos) };
                    if (data.salespersons) { setemployee(data.salespersons) };
                    if (data.customers) { setCustomers(data.customers) };
                }
            });
        }
        fetchData();
    }, []);

    const handleFormData = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const url = 'http://localhost:8090/api/sales/';
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json',
            }
        };

        const response = await fetch(url, fetchConfig);
        if (response.ok) {
            setFormData({
                automobile: "",
                salesperson: "",
                customer: "",
                price: ""
            });
            window.location.href = '/sales';
        }
    };

    return (
        <div className=" container mt-2">
            <div className="row">
                <div className="offset-3 col-6">
                    <div className="shadow p-4 mt-4">
                        <h1>Create sales record</h1>
                        <form onSubmit={handleSubmit} id="add-record-form">
                            <div className="mb-3">
                                <select
                                    onChange={handleFormData}
                                    value={formData.automobile}
                                    className="form-select"
                                    required
                                    id="automobile"
                                    name="automobile"
                                >
                                    <option value="">Select an automobile</option>
                                    {automobiles.filter((auto) => !auto.sold)
                                        .map((auto) => (
                                            <option key={auto["vin"]} value={auto["vin"]}>
                                                {auto["year"]} {auto["model"]["manufacturer"]["name"]} {auto["model"]["name"]} - {auto["vin"]}
                                            </option>
                                        ))}
                                </select>

                            </div>

                            <div className="mb-3">
                                <select
                                    onChange={handleFormData}
                                    value={formData.salesperson}
                                    className="form-select"
                                    required
                                    id="salesperson"
                                    name="salesperson"
                                >
                                    <option value="">Choose a sales person</option>
                                    {employee.map(salesPerson => {
                                        return (
                                            <option key={salesPerson.id} value={salesPerson.id}>
                                                {salesPerson.first_name}
                                            </option>
                                        );
                                    })}
                                </select>
                            </div>

                            <div className="mb-3">
                                <select
                                    onChange={handleFormData}
                                    value={formData.customer}
                                    className="form-select"
                                    required
                                    id="customer"
                                    name="customer"
                                >
                                    <option value="">Choose a customer</option>
                                    {customers.map(customer => {
                                        return (
                                            <option key={customer.id} value={customer.id}>
                                                {customer.first_name} {customer.last_name}
                                            </option>
                                        );
                                    })}
                                </select>
                            </div>

                            <div className="form-floating mb-3">
                                <input
                                    onChange={handleFormData}
                                    value={formData.price}
                                    className="form-control"
                                    placeholder="price"
                                    required
                                    step="0.01"
                                    type="number"
                                    id="price"
                                    name="price"
                                />
                                <label htmlFor="price">Price</label>
                            </div>

                            <button className="btn btn-primary" id="newSaleBtn">Create</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SalesForm;
