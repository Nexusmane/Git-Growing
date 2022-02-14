import { useState, useEffect } from 'react';
import * as plantPostsAPI from '../../utilities/posts-api';
import PlantListItem from '../../components/PlantListItem/PlantListItem';
import './PlantListPage.css';

export default function PlantListPage({ user }) {
    const [plantPosts, setPlantPosts] = useState([]);
    const [rotten, setRotten] = useState(false);

    useEffect(function() {
        async function getPlantPosts() {
            const plantPosts = await plantPostsAPI.getAll();
            setPlantPosts(plantPosts);
        }
        getPlantPosts();
    }, [rotten]);
    
    function toggleRotten() { 
        setRotten(!rotten);
    }

    return (
        <>
        <h1> {user.name}'s Plant List </h1>
            <ul> 
                {plantPosts.map((p, idx) => (
                    <PlantListItem plant={p} key={idx} plantPosts={plantPosts} setPlantPosts={setPlantPosts} toggleRotten={toggleRotten}/>
                ))}
            </ul>
        </>
    );
}