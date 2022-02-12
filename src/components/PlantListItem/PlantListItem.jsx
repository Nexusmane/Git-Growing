import "./PlantListItem.css";
import * as plantPostsAPI from '../../utilities/posts-api';
import Switch from '../Switch/Switch';
import { useState } from 'react';

export default function PlantListItem({ plant, plantPosts, setPlantPosts, toggleRotten }) {
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

        async function handleCheckbox(e) {
            e.preventDefault();
            const waterPlant = await plantPostsAPI.isWatered(plant);
            toggleRotten();
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
            <li className="PlantListItem">
                <span className="plant-field">Has this plant been watered recently? </span>
                <Switch 
                    isOn={value}
                    handleCheckbox={handleCheckbox}
                    handleToggle={() => setValue(!value)}
                    />
            </li>
            <button 
                type='submit' 
                value='submit' 
                onClick={handleDelete}
                className="list-button"> Remove Plant 
            </button>
        </div>
    )
}