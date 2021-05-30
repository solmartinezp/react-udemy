import SearchResultsItem from "./SearchResultsItem";

export default function SearchResults (props) {
    return (
        <div style={{ width: '100%', alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
            {!props.results?.length && props.isSearching &&<p>No se encontraron resultados</p>}
            {props.results?.map((value) => {
                return (
                    <SearchResultsItem key={value.id} name={value.name} email={value.email} />
                )
            })}
        </div>
    );
}