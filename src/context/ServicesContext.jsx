import { createContext, useContext, useState } from "react";

import { services } from "../constants";

const ServicesContext = createContext();

const ServicesProvider = ({ children }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [servicesPerPage] = useState(3);

    // get current services
    const indexOfLastService = currentPage * servicesPerPage;
    const indexOfFirstService = indexOfLastService - servicesPerPage;
    const currentServices = services.slice(indexOfFirstService, indexOfLastService);

    const totalServices = services.length;

    // change page
    const paginate = pageNumber => setCurrentPage(pageNumber)

    const values = {
        currentPage,
        setCurrentPage,
        servicesPerPage,
        currentServices,
        paginate,
        totalServices
    };

    return <ServicesContext.Provider value={values}>{children}</ServicesContext.Provider>;

}


const useServices = () => useContext(ServicesContext);

export { ServicesProvider, useServices };