import { Text, Title, Wrapper } from './BeerItem.styled';
import useBeerStore from '../../store';
import { useNavigate } from 'react-router-dom';

const BeerItem = ({ beer }) => {
  const toggleRecipeSelection = useBeerStore(
    state => state.toggleRecipeSelection
  );

  const navigate = useNavigate();

  const handleLeftClick = beer => {
    navigate(`/beers/${beer.id}`);
  };

  const handleRightClick = (e, beer) => {
    e.preventDefault();
    toggleRecipeSelection(beer);
  };

  return (
    <>
      <Wrapper
        onClick={() => handleLeftClick(beer)}
        onContextMenu={e => handleRightClick(e, beer)}
      >
        <img
          src={beer.image_url}
          alt={beer.name}
          width="220px"
          height="400px"
        />
        <Title>{beer.name}</Title>
        <Text>{beer.tagline}</Text>
      </Wrapper>
    </>
  );
};

export { BeerItem };
