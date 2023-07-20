import BeerList from '../BeerList/BeerList';
import { Route, Routes } from 'react-router-dom';
import Card from 'components/Card/Card';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<BeerList />} />
        <Route path="/beers/:id" element={<Card />} />
      </Routes>
    </>
  );
};
