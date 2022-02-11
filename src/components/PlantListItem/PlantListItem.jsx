import "./PlantListItem.css";
import * as plantPostsAPI from '../../utilities/posts-api';
import Switch from '../Switch/Switch';
import { useState } from 'react';

export default function PlantListItem({ plant, plantPosts, setPlantPosts }) {
    const [value, setValue] = useState(false);

    async function handleDelete() {
        let plantPostCopy = [...plantPosts];
        const removePlant = await plantPostsAPI.removePlant(plant);
        let mutatedPlantPost = [];
        plantPostCopy.forEach(function(p) {
            if (p._id !== removePlant._id)
            {mutatedPlantPost.push(p)};
        });
        setPlantPosts(mutatedPlantPost);
    }

    return (
        <div className='plant-container'> 
            <li className="PlantListItem">
                <span className="plant-field"> Plant Name: </span> 
                {plant.name} 
            </li>
            <li className="PlantListItem">
                <span className="plant-field"> Desired Sunlight Exposure: </span>
                {plant.exposure} 
            </li>
            <li className="PlantListItem"> 
                <span className="plant-field"> Watering Frequency: </span>
                {plant.watering} 
            </li>
            <li className="PlantListItem"> 
                <span className="plant-field"> Plant Notes: </span>
                {plant.notes} 
            </li>
            <Switch 
                isOn={value}
                handleToggle={() => setValue(!value)}/>
            <button 
                type='submit' 
                value='submit' 
                onClick={handleDelete}
                className="list-button"> Remove Plant 
            </button>
        </div>
    )
}