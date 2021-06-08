import { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
// import PokemonContext from '../../context/pokemons';
import PokeStats from './components/PokeStats';
import ErrorMessage from '../../components/ErrorMessage';
import Loading from '../../components/Loading';
import usePokemonsStore from '../../zustand/stores/pokemons';
import shallow from 'zustand/shallow';

export default function PokeDetail() {
    const { id } = useParams();

    // PROVIDER DE CONTEXT API
    // const { getPokemonDetail, pokemonDetail, isLoading, hasError, errorMessage } = useContext(PokemonContext);

    // STORE DE ZUSTAND
    const { getPokemonDetail, pokemonDetail, isLoading, hasError, errorMessage } = usePokemonsStore((state) => ({
        getPokemonDetail: state.getPokemonDetail, 
        pokemonDetail: state.pokemonDetail, 
        isLoading: state.isLoading, 
        hasError: state.hasError, 
        errorMessage: state.errorMessage,
    }), shallow);

    useEffect(() => {
        // Cada vez que se cargue la pantalla o cada vez que cambie
        // el id solicitar el detalle del pokemon
        getPokemonDetail(id).catch(null);
    }, [])

    console.log(isLoading);
    if (isLoading) {
        return (<Loading title="Cargando pokemon..." />)
    }
    return (
        <div>
            {hasError ? <ErrorMessage message={errorMessage} /> : (
                <>
                    <h3>Info General</h3>
                    <p>{`Nombre: ${pokemonDetail.name}`}</p>
                    <p>{`Peso: ${pokemonDetail?.weight}`}</p>
                    <p>{`Altura: ${pokemonDetail?.height}`}</p>
                    <div>
                        <h3>Habilidades</h3>
                        <PokeStats stats={pokemonDetail?.stats ?? []} />
                    </div>
                </>
            )}
        </div>
    );
}