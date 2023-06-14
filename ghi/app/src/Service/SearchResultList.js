import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function SearchResultList() {
    const { term } = useParams();
    const [searchList, setSearchList] = useState([]);
    const navigate = useNavigate();


    const searchLinks = [
        { title: "Sales List", path: "/sales/saleslist" },
        { title: "Sales Form", path: "/sales/SalesForm" },
        { title: "Salesperson List", path: "/sales/salespersonlist" },
        { title: "Salesperson History", path: "/sales/salespersonhistory" },
        { title: "Customer Form", path: "/sales/CustomerForm" },
        { title: "Customer List", path: "/sales/CustomerList" },
        { title: "Salesperson Form", path: "/sales/salesPerson/new" },
        { title: "Manufacturer List", path: "/Manufacturer/manufacturers" },
        { title: "Manufacturer Form", path: "/Manufacturer/manufacturers/new" },
        { title: "Vehicle Model List", path: "/inventory/VehicleModelsList" },
        { title: "Technicians List", path: "/services/technicians" },
        { title: "Technician Form", path: "/services/technician/new" },
        { title: "Service Appointment List", path: "/services/appointments" },
        { title: "Service Appointment Form", path: "/services/appointment/new" },
        { title: "Service History", path: "/services/history" },
        { title: "Vehicle Model Form", path: "/inventory/vehicle-model/new" },
        { title: "Automobile List", path: "/inventory/automobiles" },
        { title: "Automobile Form", path: "/inventory/automobile/new" },
    ]

    const fetchLinks = () => {
        const filteredData = searchLinks.filter(
            link => link.title.toLowerCase().includes(term.toLowerCase())
        );
        setSearchList(filteredData);
    }

    useEffect(() => {
        fetchLinks();
    }, [term]);

    const handleLinkChange = (path) => {
        navigate(path);
    }

    return (
        <>
            <h1>Search Results for "{term}"</h1>
            {searchList.length > 0 ? (
                <ul>
                    {searchList.map(link => {
                        return (
                            <li key={link.path}>
                                <button onClick={() => handleLinkChange(link.path)} type="button" className="btn btn-link">{link.title}</button>
                            </li>
                        )
                    })}
                </ul>
            ) : (
                <p>No results found.</p>
            )}
        </>
    );
}

export default SearchResultList;
