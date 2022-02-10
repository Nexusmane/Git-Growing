import { useState, useEffect } from 'react';
import * as plantPostsAPI from '../../utilities/posts-api';
import PlantListItem from '../../components/PlantListItem/PlantListItem';

export default function PlantListPage({ plant }) {
    const [plantPosts, setPlantPosts] = useState([]);


    // function handleDelete(e) {
    //     e.preventDefault();
    //     const removePlant = plantPostsAPI.removePlant(plant._id);
    // }

    useEffect(function() {
        async function getPlantPosts() {
            const plantPosts = await plantPostsAPI.getAll();
            setPlantPosts(plantPosts);
        }
        getPlantPosts();
    }, []);
    

    return (
        <>
        <h1> User's Plant List Page </h1>
        <ul> 
            {plantPosts.map((p) => (
                <PlantListItem plant={p}  />
            ))}
        </ul>
        </>
    );
}