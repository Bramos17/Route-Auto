import React, {useState, useEffect} from "react";

function VehicleModelList(props) {
    const [vehicleModels, setVehicleModels] = useState([]);

    const fetchData = async () => {
        const url = "http://localhost:8090/api/vehiclemodels/";
        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            setVehicleModels(data.vehicle_models);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="container mt-2">
            <h1>Vehicle Models</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Picture</th>
                        <th>manufacturer</th>
                    </tr>
                </thead>
                <tbody>
                    {vehicleModels.map((Model,index) => {
                        return (
                            <tr key={index}>
                                <td>{Model.name}</td>
                                <td><img src={Model.picture} alt=""/></td>
                                <td>{Model.manufacturer.name}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default VehicleModelList;
