import { createContext, useContext, useState } from "react";

import { ServicesArray } from "../constants";

const ServicesContext = createContext();

const ServicesProvider = ({ children }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [servicesPerPage] = useState(3);

    // get current services
    const indexOfLastService = currentPage * servicesPerPage;
    const indexOfFirstService = indexOfLastService - servicesPerPage;
    const currentServices = ServicesArray.slice(indexOfFirstService, indexOfLastService);

    const totalServices = ServicesArray.length;

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