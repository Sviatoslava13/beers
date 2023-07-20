import useBeerStore from 'store';
import {
  Container,
  Item,
  Package,
  SecondItem,
  SecondText,
  SecondTitle,
  Text,
  Title,
  Wrapper,Link
} from './Card.styled';
import { useParams } from 'react-router-dom';
import { nanoid } from 'nanoid';
import DeleteButton from 'components/DeleteButton/DeleteButton';
const Card = () => {
  const { beers } = useBeerStore();
  const { id } = useParams();
  const beerId = parseInt(id);
  const beer = beers.find(recipe => recipe.id === beerId);
  const foodPairing = beer.food_pairing.map(el => (
    <Item key={nanoid()}>{el}</Item>
  ));
  const ingredients = beer.ingredients.hops.map(el => (
    <SecondItem key={nanoid()}>
      <SecondText>Add: {el.add}</SecondText>
      <SecondText>Attribute: {el.attribute}</SecondText>
      <SecondText>Name: {el.name}</SecondText>
    </SecondItem>
  ));
  const malt = beer.ingredients.malt.map(el => (
    <SecondItem key={nanoid()}>
      <SecondText> {el.name}</SecondText>{' '}
      <SecondText>
        {el.amount.value}
        <span>{el.amount.unit}</span>
      </SecondText>
    </SecondItem>
  ));

  return (
    <Package>
      {' '}
      <Link to={`/`}>Go Back</Link>
      <Container>
        <img
          src={beer.image_url}
          alt={beer.name}
          width="220px"
          height="400px"
        />
        <Wrapper>
          <Title>{beer.name}</Title>
          <Text>ABV: {beer.abv}</Text>
          <Text>Tagline: {beer.tagline}</Text>
          <Text>Brewers_tips: {beer.brewers_tips}</Text>
          <Text>Description: {beer.description}</Text>
        </Wrapper>
      </Container>
      <Wrapper>
        <SecondTitle>Food Pairing</SecondTitle>
        <ul>{foodPairing}</ul>
        <SecondTitle>Ingredients</SecondTitle>
        <ul>{ingredients}</ul>
        <Text>Yeast: {beer.ingredients.yeast}</Text>
        <ul>{malt}</ul>
      </Wrapper>
  <DeleteButton beer={beers}/>
    </Package>
  );
};
export default Card;
