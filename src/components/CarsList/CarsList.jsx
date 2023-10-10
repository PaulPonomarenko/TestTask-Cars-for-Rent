import { useEffect, useState } from 'react';
import { getAllCars } from 'services/carsApi';

export const CarsList = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    async function getCars() {
      try {
        const carsList = await getAllCars();
        setCars(carsList);
      } catch (error) {
        console.log(error.message);
      }
    }
    getCars();
  }, []);
  console.log(cars);
  return (
    <>
      <p>hi</p>
      {/* <ul>{cars.map()}</ul> */}
    </>
  );
};
