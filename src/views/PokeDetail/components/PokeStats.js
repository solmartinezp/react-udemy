export default function PokeStats(props) {
    return (
        <>
            {props.stats?.map(({stat, base_stat}, index)=> (
                <div key={index} style={{ display: 'flex' }}>
                    <p>{stat.name}</p>
                    <p>: {base_stat}%</p>
                </div>    
            ))}
        </>
    );
};