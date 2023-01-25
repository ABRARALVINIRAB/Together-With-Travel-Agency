import { useEffect, useState } from "react";

const useServices = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://together-with-travel-agency-server-site.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return { services, setServices };
};

export default useServices;