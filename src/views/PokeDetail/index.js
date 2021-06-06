import { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import PokemonContext from '../../context/pokemons';
import PokeStats from './components/PokeStats';

export default function PokeDetail() {
    const { id } = useParams();
    const { getPokemonDetail, pokemonDetail, isLoading } = useContext(PokemonContext);

    useEffect(() => {
        // Cada vez que se cargue la pantalla o cada vez que cambie
        // el id solicitar el detalle del pokemon
        getPokemonDetail(id).catch(null);
    }, [])

    if (isLoading) {
        return (<p>Cargando pokemon...</p>)
    }
    return (
        <div>
             <h3>Info General</h3>
            <p>{`Nombre: ${pokemonDetail.name}`}</p>
            <p>{`Peso: ${pokemonDetail?.weight}`}</p>
            <p>{`Altura: ${pokemonDetail?.height}`}</p>
            <div>
                <h3>Habilidades</h3>
                <PokeStats stats={pokemonDetail?.stats ?? []} />
            </div>
        </div>
    );
}