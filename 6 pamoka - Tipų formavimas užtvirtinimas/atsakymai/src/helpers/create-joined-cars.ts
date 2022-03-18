import Brand from '../types/brand';
import Model from '../types/model';
import Car from '../types/car';
import CarJoined from '../types/car-joined';

type CreateJoinedCarsProps = [{
  cars: Car[],
  models: Model[],
  brands: Brand[],
}];

type CreateJoinedCars = (...args: CreateJoinedCarsProps) => CarJoined[];

const createJoinedCars: CreateJoinedCars = ({ cars, models, brands }) => cars.map((car) => {
  const carModel = models.find((model) => model.id === car.modelId);
  const carBrand = brands.find((brand) => brand.id === carModel?.brandId);

  return {
    ...car,
    brand: (carBrand && carBrand?.title) ?? 'unknown',
    model: (carModel && carModel?.title) ?? 'unknown',
  };
});

export default createJoinedCars;
