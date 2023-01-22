import React, { useState } from "react";

function App() {
 

  return (
    <div className="relative">
      {services.map((service, index) => (
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
              onClick={() => handleSelectedServices(index, service.price)}
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
          <h4 className="text-gray-700 font-medium">Associated Services:</h4>
          <ul>
            {services[selectedService].associatedServices.map(
              (associatedService, index) => (
                <>
                  <div
                    key={servicess.id}
                    className={`w-full h-1/2 p-1 m-2 border border-black ${
                      servicess.includes(associatedService) ? "bg-black" : ""
                    }`}
                    onClick={() => handleServiceClick(associatedService)}
                  >
                    <div
                      className={`w-full h-full flex items-center justify-center ${
                        servicess.includes(associatedService)
                          ? "text-white"
                          : ""
                      }`}
                    >
                      {associatedService.name}
                      <div className="ml-2">${associatedService.price}</div>
                    </div>
                  </div>
                </>
              )
            )}
          </ul>

        
         
        </div>
      )}
    </div>
  );
}

export default App;
