import { useState, useEffect } from 'react';

export default function PlantListPage() {
    const [plantPosts, setPlantPosts] = useState([]);

    useEffect(function() {
        async function getPlantPosts() {
            const plantPosts = await postsAPI.getAll();
            setPlantPosts(plants);
        }
        getPlantPosts();
    }, []);

    async function handleAddPlant(plantData) {
        const plant = await postsAPI.add(postData);
        setPlantPosts([...plants, plant]);
    }

    return (
        <h1> User's Plant List Page </h1>
    );
}