import { BeerItem } from 'components/BeerItem/BeerItem';
import { useEffect, useState } from 'react';
import useBeerStore from '../../store';
import { Container } from './BeerList.styled';
import { nanoid } from 'nanoid';

const BeerList = () => {
  const fetchBeers = useBeerStore(state => state.fetchBeers);
  const beers = useBeerStore(state => state.beers);
  const [visibleRecipes, setVisibleRecipes] = useState([]);


  useEffect(() => {
    fetchBeers();
  }, [fetchBeers]);

  useEffect(() => {
    setVisibleRecipes(beers.slice(0, 15));
  }, [beers]);

  const handleScroll = event => {
    const { scrollTop, clientHeight, scrollHeight } = event.target;
    const nextRecipes = beers.slice(
      visibleRecipes.length,
      visibleRecipes.length + 5
    );
    if (scrollHeight - scrollTop === clientHeight) {
      setVisibleRecipes(prevRecipes => [...prevRecipes, ...nextRecipes]);
    }
  };

  return (
    <Container
      style={{ height: '530px', overflowY: 'auto' }}
      onScroll={handleScroll}
    >
      {visibleRecipes.map(beer => (
        <BeerItem key={nanoid()} beer={beer} />
      ))}
    </Container>
  );
};

export default BeerList;
