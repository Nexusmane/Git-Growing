import { useState, useEffect } from 'react';
import * as plantPostsAPI from '../../utilities/posts-api';
import PlantListItem from '../../components/PlantListItem/PlantListItem';

export default function PlantListPage() {
    const [plantPosts, setPlantPosts] = useState([]);

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
            {plantPosts.map((p, idx) => (
                <PlantListItem plant={p} key={idx} plantPosts={plantPosts} setPlantPosts={setPlantPosts} />
            ))}
        </ul>
        </>
    );
}