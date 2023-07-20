import { create } from 'zustand';

const useBeerStore = create((set, get) => ({
  beers: [],
  selectedRecipes: [],
  page: 1,

  fetchBeers: async () => {
    const { page } = get();
    try {
      const response = await fetch(
        `https://api.punkapi.com/v2/beers?page=${page}`
      );
      const data = await response.json();
      return set(state => ({
        beers: [...state.selectedRecipes, ...data],
      }));
    } catch (error) {
      console.log(error);
    }
  },

  addBeers: () => {
    set(state => ({
      page: (state.page += 1),
    }));
  },

  toggleRecipeSelection: recipe => {
    set(state => ({
      selectedRecipes: state.selectedRecipes.includes(recipe)
        ? state.selectedRecipes.filter(r => r !== recipe)
        : [...state.selectedRecipes, recipe],
    }));
  },

  deleteSelectedRecipes: recipeId =>
    set(state => ({ beers: state.beers.filter(el => el.id !== recipeId) })),
}));

export default useBeerStore;
