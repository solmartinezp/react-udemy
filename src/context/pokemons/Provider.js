import { useState } from 'react';
import PokemonContext from './index';
import apiCall from '../../api';

export default function PokemonProvider({ children }) {
    const [pokemons, setPokemons] = useState([]);
    const [pokemonDetail, setPokemonDetail]= useState({});
    const [isLoading, setIsLoading]= useState(false);
    const [hasError, setHasError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const getPokemons = async () => {
        try {
            setIsLoading(true);
            setHasError(false);
            setErrorMessage('');
            const pokemonsResult = await apiCall({
                url: 'https://pokeapi.co/api/v2/pokemon?limit=100&offset=100'
            });
            setPokemons(pokemonsResult.results);
        } catch(error) {
            setPokemons([]);
            setHasError(true);
            setErrorMessage('Algo ha pasado, verifica tu conexión');
        } finally {
            setIsLoading(false);
        }
    }

    const getPokemonDetail = async (id) => {
        if (!id) {
            Promise.reject('Id es requerido');
        }

        try {
            setIsLoading(true);
            setHasError(false);
            setErrorMessage('');
            // throw new Error('Hey!'); 
            // Si tiro un error acá, se va a mostrar el ErrorMessage Component
            const resultPokemonDetail = await apiCall({
                url: `https://pokeapi.co/api/v2/pokemon/${id}`
            });
            setPokemonDetail(resultPokemonDetail);

        } catch(error) {
            setPokemonDetail({});
            setHasError(true);
            setErrorMessage('Algo ha pasado, verifica tu conexión');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <PokemonContext.Provider value={{ 
            getPokemons,
            pokemons,
            getPokemonDetail,
            pokemonDetail,
            isLoading,
            hasError,
            errorMessage
        }} >
            {children}
        </PokemonContext.Provider>
    );
}