import { useEffect, useState } from 'react';
import { getAllCars } from 'services/carsApi';
import {
  CarItem,
  MainTitleContainer,
  DescriptionWrapper,
  MainInfo,
  MainCarsList,
  BtnLearnMore,
} from './CarsList.styled';
import { LoadMore } from 'components/BtnLoadMore/BtnLoadMore';

import defaulImg from '../../img/noImageAvailable.jpg';

export const CarsList = () => {
  const [cars, setCars] = useState([]);

  const handleLoadMore = () => {};

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
      <MainCarsList>
        {cars.map(
          ({
            id,
            year,
            make,
            model,
            type,
            img = defaulImg,
            accessories,
            rentalPrice,
            rentalCompany,
            address,
          }) => {
            const [, city, country] = address.split(', ');
            return (
              <CarItem key={id}>
                <img
                  src={img}
                  alt={model}
                  style={{
                    height: '268px',
                    objectFit: 'cover',
                    borderRadius: '14px',
                  }}
                />
                <MainTitleContainer>
                  <MainInfo>
                    <span>{make + ' '}</span>
                    <span>{model}</span>, <span>{year}</span>
                  </MainInfo>
                  <span>{rentalPrice}</span>
                </MainTitleContainer>
                <DescriptionWrapper>
                  <p>
                    <span>{city}</span>
                    <span>{country}</span>
                    <span>{rentalCompany}</span>
                  </p>
                  <p>
                    <span>{type}</span>
                    <span>{model}</span>
                    <span>{id}</span>
                    <span>{accessories[0]}</span>
                  </p>
                </DescriptionWrapper>
                <BtnLearnMore type="button">Learn More</BtnLearnMore>
              </CarItem>
            );
          }
        )}
        <LoadMore onClick={handleLoadMore} />
      </MainCarsList>
    </>
  );
};
