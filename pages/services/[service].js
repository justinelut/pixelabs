import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ServicesLink from "./servicesLink";
import Package from './card'
import axios from "axios";

const ProductSelection = () => {
  const [servicess, setServicess] = useState([]);
  const [total, setTotal] = useState(0);
  const [selectedService, setSelectedService] = useState(null);
  const [services, setServices] = useState();

  const router = useRouter();
  const { service } = router.query;

  const handleSelectedServices = (index, price) => {
    setSelectedService(index);
    setServicess([]);
    setTotal(price);
  };

  const handleServiceClick = (service) => {
    if (servicess.includes(service)) {
      setServicess(servicess.filter((s) => s !== service));
      setTotal(total - service.price);
    } else {
      setServicess([...servicess, service]);
      setTotal(total + service.price);
    }
  };

  async function getServices() {
    const services = await axios.get("/api/" + service, {
      headers: {
        Authorization: "Profile API-Key ff8d063b-71f1-41a2-a608-c63ade83b7b2",
      },
    });
    setServices(services.data.docs);
  }

  useEffect(() => getServices(), []);

  return (
    <div>
      <div className="py-16 px-4 md:px-6 2xl:px-0 flex justify-center items-center 2xl:mx-auto 2xl:container">
        <div className="flex flex-col justify-start items-start w-full space-y-9">
          <div className="flex justify-start flex-col items-start space-y-2">
            <button className="flex flex-row items-center text-gray-600 dark:text-white hover:text-gray-500 space-x-1">
            </button>
            
          </div>

          <div className="m-4 flex flex-col xl:flex-row justify-center xl:justify-between space-y-6 xl:space-y-0 xl:space-x-6 w-full">
              <Package />
         

            <div className="p-8 bg-white-100 flex flex-col lg:w-full xl:w-3/5">
              <div className="relative">
                {services &&
                  services.map((service, index) => (
                    <div key={index} className="inline-block">
                      <label
                        htmlFor={`service-${index}`}
                        className="block text-gray-700 font-medium"
                      >
                        <input
                          type="radio"
                          id={`service-${index}`}
                          name="service"
                          value={index}
                          className="hidden"
                          onClick={() =>
                            handleSelectedServices(index, service.price)
                          }
                        />
                        <div
                          className={`relative border border-black ${
                            selectedService === index ? "bg-black" : "bg-white"
                          } p-4 m-4`}
                        >
                          <span className="relative block p-2">
                            {service.name} - {service.price}
                          </span>
                        </div>
                      </label>
                    </div>
                  ))}
                {selectedService !== null && (
                  <div className="mt-4">
                    <h4 className="text-gray-700 font-medium">
                      Associated Services:
                    </h4>
                    <ul>
                      {services[selectedService].associatedServices.map(
                        (associatedService, index) => (
                          <>
                            <div
                              key={servicess.id}
                              className={`w-full h-1/2 p-2 mt-3 border border-black ${
                                servicess.includes(associatedService)
                                  ? "bg-black"
                                  : ""
                              }`}
                              onClick={() =>
                                handleServiceClick(associatedService)
                              }
                            >
                              <div
                                className={`w-full p-2 h-full mt-3 flex items-center justify-center ${
                                  servicess.includes(associatedService)
                                    ? "text-white"
                                    : ""
                                }`}
                              >
                                {associatedService.name}
                                <div className="ml-2">
                                  ${associatedService.price}
                                </div>
                              </div>
                            </div>
                          </>
                        )
                      )}
                    </ul>

                    <div
                      className={`w-full h-1/2 p-4 mt-2 border border-black `}
                    >
                      Total: ${total}
                    </div>

                    <ServicesLink
                      link={"checkout"}
                      LinkContent={"Proceed to checkout"}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSelection;
