import React, { useState, useEffect } from "react";

function ManufacturerList(props) {
    const [manufacturers, setManufacturers] = useState([]);

    const getData = async () => {
        const manufacturersResponse = await fetch("http://localhost:8090/api/manufacturers/");

        if (manufacturersResponse.ok) {
            const data = await manufacturersResponse.json();
            setManufacturers(data.manufacturers)
        }
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="container mt-2">
            <h1>Manufacturers</h1>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {manufacturers.map(manufacturers, index => {
                        return (
                            <tr key={index}>
                                <td>{manufacturers.name}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
}
export default ManufacturerList;
