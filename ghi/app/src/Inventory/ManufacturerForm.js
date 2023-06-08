import React, {useState} from "react";


function ManufacturerForm(props) {
    const [formData, setFormData] = useState({
        name: "",
    });

    const handleFormData = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const response = await fetch("http://localhost:8090/api/manufacturers/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            props.history.push("/inventory/manufacturers");
        }
    };

    return (
        <div className="container mt-2">
            <div className="row">
                <div className="offset-3 col-6">
                    <div className="shadow p-4 mt-4">
                        <h1>Create Manufacturer</h1>
                        <form onSubmit={handleSubmit} id="add-record-form">
                            <div className="form-floating mb-3">
                                <input onChange={handleFormData} value={formData.name} className="form-control" placeholder="name" required type="text" id="name" name="name" />
                                <label htmlFor="name">Name</label>
                            </div>
                            <button className="btn btn-primary">Create</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ManufacturerForm;
