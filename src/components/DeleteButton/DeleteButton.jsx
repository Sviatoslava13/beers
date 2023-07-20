import React from 'react';
import useBeerStore from '../../store';
import { useNavigate } from 'react-router-dom';
import { Button } from './DeleteButton.styled';

const DeleteButton = ({ beer }) => {
  const deleteSelectedRecipes = useBeerStore(
    state => state.deleteSelectedRecipes
  );
  const navigate = useNavigate();

  function handleDelet() {
    navigate('/');
    deleteSelectedRecipes(beer.id);
  }
  return (
    <>
      <Button onClick={handleDelet}>Delete</Button>
    </>
  );
};

export default DeleteButton;
