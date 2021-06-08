import create from 'zustand';
import apiCall from '../../api';

const usePokemonsStore= create((set, get)=> ({
    getPokemons: async () => { // llamadas a la API
        try {
            set({ hasError: false, errorMessage: "", isLoading: true});

            const pokemonsResult = await apiCall({
                url: 'https://pokeapi.co/api/v2/pokemon?limit=100&offset=100'
            });

            set({pokemons: pokemonsResult.results});
    
        } catch(error) {
            set({ pokemons: [], hasError: true, errorMessage: "Algo ha pasado, verifica tu conexión"});
        } finally {
            set({ isLoading: false });
        }
    },
    pokemons: [],
    getPokemonDetail: async (id) => {
        if (!id) return;
        
        try {
            set({ hasError: false, errorMessage: "", isLoading: true});

            const resultPokemonDetail = await apiCall({
                url: `https://pokeapi.co/api/v2/pokemon/${id}`
            });

            set({ pokemonDetail: resultPokemonDetail });
        } catch(error) {
            set({ hasError: true, errorMessage: 'Algo ha pasado, verifica tu conexión', pokemonDetail: {} })
        } finally {
            set({ isLoading: false })
        }
    },
    pokemonDetail: {},
    isLoading: false,
    hasError: false,
    errorMessage: "" 
}));

export default usePokemonsStore;