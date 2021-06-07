import { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import PokemonContext from '../../context/pokemons';
import PokeStats from './components/PokeStats';
import ErrorMessage from '../../components/ErrorMessage';
import Loading from '../../components/Loading';

export default function PokeDetail() {
    const { id } = useParams();
    const { getPokemonDetail, pokemonDetail, isLoading, hasError, errorMessage } = useContext(PokemonContext);

    useEffect(() => {
        // Cada vez que se cargue la pantalla o cada vez que cambie
        // el id solicitar el detalle del pokemon
        getPokemonDetail(id).catch(null);
    }, [])

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