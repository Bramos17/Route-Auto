import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function SaleList() {
    const [sales, setSales] = useState([]);

    const fetchSaleData = async () => {
        const saleUrl = "http://localhost:8090/api/sales/";
        const response = await fetch(saleUrl);
        if (response.ok) {
            const data = await response.json();
            setSales(data.sales);
        }
    };

    useEffect(() => { fetchSaleData(); }, []);

    return (
        <div className="container">
            <h1 className="text-center">Sales</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th className="text-center">Automobile</th>
                        <th className="text-center">Salesperson</th>
                        <th className="text-center">Customer</th>
                        <th className="text-center">Price</th>
                        <th className="text-center">Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {sales.map(sale => {
                        return (
                            <tr key={sale.id}>
                                <td className="text-center">{sale.automobile.vin}</td>
                                <td className="text-center">{sale.salesperson.first_name} {sale.salesperson.last_name} : {sale.salesperson.employee_id}</td>
                                <td className="text-center">{sale.customer.first_name} {sale.customer.last_name} : {sale.customer.phone_number}</td>
                                <td className="text-center">${sale.price}</td>
                                <td className="text-center">
                                    <Link to={`/sales/edit/${sale.id}/`} relative="path">Edit</Link>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default SaleList;
