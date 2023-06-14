import React, { useState, useEffect } from "react";


function ModelsList() {
    const [models, setModels] = useState([]);


    const fetchData = async () => {
        const url = "http://localhost:8100/api/models/";
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            setModels(data.models);
        }
    };
    useEffect(() => {
        fetchData();
    }, []);


    return (
        <div className="px-4 py-5 my-5 mt-0 text-center" id="vehicles">
            <h1 className="display-5 fw-bold">Vehicle Models</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Model</th>
                        <th>Manufacturer</th>
                        <th>Picture</th>
                    </tr>
                </thead>
                <tbody>
                    {models.map((model) => {
                        return (
                            <tr key={model.id}>
                                <td>{model.name}</td>
                                <td>{model.manufacturer.name}</td>
                                <td><img style={{ width: 200, borderRadius: 10 }} alt="car" className="photo" src={model.picture_url} /></td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}
export default ModelsList;
