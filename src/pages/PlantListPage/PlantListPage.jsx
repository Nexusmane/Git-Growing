import { useState, useEffect } from 'react'

export default function PlantListPage() {
    const [plantPosts, setPlantPosts] = useState([]);

    useEffect(function() {
        async function getPlantPosts() {
            const plantPosts = await postsAPI.getAll();
            setPlantPosts(plants);
        }
        getPlantPosts();
    }, []);
    
    return (

    );
}