import "./PlantListItem.css";
import * as plantPostsAPI from '../../utilities/posts-api';

export default function PlantListItem({ plant, plantPosts, setPlantPosts }) {

    function handleEdit() {
        console.log('Update Clicked')
    }

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
            <button 
                type='submit'
                value='submit'
                onClick={handleEdit}
                className="list-button"> Update Plant 
            </button>
            <button 
                type='submit' 
                value='submit' 
                onClick={handleDelete}
                className="list-button"> Remove Plant 
            </button>
        </div>
    )
}