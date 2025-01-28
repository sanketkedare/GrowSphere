import React, { useEffect, useState, lazy, Suspense } from "react";
import fetchData from "../../../Utils/fetchData";
import { company, employee, invester } from "../../../API/apis";

// Lazy load the AutoScrollList component
const AutoScrollList = lazy(() => import("./AutoScrollList"));

const Users = () => {
  const [companies, setCompanies] = useState([]);
  const [investers, setInvesters] = useState([]);
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const getDetails = async () => {
      try {
        const comList = await fetchData(company);
        setCompanies(comList?.data || []);

        const invList = await fetchData(invester);
        setInvesters(invList?.data || []);

        const empList = await fetchData(employee);
        setEmployees(empList?.data || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getDetails();
  }, []);

  return (
    <div className="container mx-auto mt-28 px-4">
      {/* Wrap the lazy-loaded component with Suspense and provide a fallback */}
      <Suspense fallback={<div>Loading...</div>}>
        <AutoScrollList data={companies} title="companies" />
        <AutoScrollList data={investers} title="investers" />
        <AutoScrollList data={employees} title="employees" />
      </Suspense>
    </div>
  );
};

export default Users;
