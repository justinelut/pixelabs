import React, { useState } from "react";

const ProductSelection = (props) => {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [additionalServices, setAdditionalServices] = useState([]);

  const handleProductSelection = (event) => {
    const selectedProduct = event.target.value;
    if (selectedProducts.includes(selectedProduct)) {
      setSelectedProducts(
        selectedProducts.filter((product) => product !== selectedProduct)
      );
    } else {
      setSelectedProducts([...selectedProducts, selectedProduct]);
    }
  };

  const handleAdditionalServiceSelection = (event) => {
    const selectedService = event.target.value;
    if (additionalServices.includes(selectedService)) {
      setAdditionalServices(
        additionalServices.filter((service) => service !== selectedService)
      );
    } else {
      setAdditionalServices([...additionalServices, selectedService]);
    }
  };

  const productList = [
    { name: "Product 1", value: "product1", price: 100 },
    { name: "Product 2", value: "product2", price: 200 },
    { name: "Product 3", value: "product3", price: 300 },
    { name: "Product 4", value: "product4", price: 400 },
  ];

  const additionalServiceList = [
    { name: "Service 1", value: "service1", price: 50 },
    { name: "Service 2", value: "service2", price: 75 },
    { name: "Service 3", value: "service3", price: 100 },
  ];

  const calculateTotalPrice = () => {
    let totalPrice = 0;

    // Add the prices of all selected products to the total price
    for (let i = 0; i < selectedProducts.length; i++) {
      const product = productList.find(
        (product) => product.value === selectedProducts[i]
      );
      totalPrice += product.price;
    }
    // Add the prices of all selected additional services to the total price
    for (let i = 0; i < additionalServices.length; i++) {
      const service = additionalServiceList.find(
        (service) => service.value === additionalServices[i]
      );
      totalPrice += service.price;
    }

    return totalPrice;
  };

  return (
    <div>
      <h2>Product Selection</h2>
      <form>
        {productList.map((product) => (
          <div key={product.value} className="mb-4">
            <input
              type="checkbox"
              id={product.value}
              value={product.value}
              checked={selectedProducts.includes(product.value)}
              onChange={handleProductSelection}
            />
            <label htmlFor={product.value} className="ml-2">
              {product.name} - {product.price}
            </label>
          </div>
        ))}
      </form>
      <h2>Additional Services</h2>
      <form>
        {additionalServiceList.map((service) => (
          <div key={service.value} className="mb-4">
            <input
              type="checkbox"
              id={service.value}
              value={service.value}
              checked={additionalServices.includes(service.value)}
              onChange={handleAdditionalServiceSelection}
            />
            <label htmlFor={service.value} className="ml-2">
              {service.name} - {service.price}
            </label>
          </div>
        ))}
      </form>
      <h2>Total Price: {calculateTotalPrice()}</h2>
    </div>
  );
};

export default ProductSelection;
