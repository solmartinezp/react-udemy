import { useState, useEffect } from 'react';

const jsonData= [{
    key: "1",
    name: "Juan"
},{
    key: "2",
    name: "Clara"
},{
    key: "3",
    name: "Nacho"
},{
    key: "4",
    name: "Lucio"
}]

const ListComponent = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=> {
        setTimeout(()=> {
            setIsLoading(false);
        }, 4000)
    }, []);
    
    const renderData= () => {
        return jsonData?.map((x, index) => {
            return (
                <div key={index}>
                    <h1>Nombre: {x.name}</h1>
                    <p>Key: {x.key}</p>
                    <p>Index en el array: {index}</p>
                </div>
            );
        })
    }

    return (
        <div>
            {isLoading ? <h2>Is loading...</h2> : renderData()}        
        </div>
    );

}

export default ListComponent;