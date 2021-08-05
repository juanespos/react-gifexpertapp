import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
// import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    const {data:images, loading} = useFetchGifs(category);

    return (
        <>
        <h3>{category}</h3>
        { loading && <p>Loading...</p> } { /*El && es para no evaluar el else*/}
        <div className="card-grid">         
            <ol>
                {
                    images.map((img) => 
                        <GifGridItem 
                            key = {img.id}
                            {...img}
                        />
                    )
                }
            </ol>
        </div>
        </>
    )
}
