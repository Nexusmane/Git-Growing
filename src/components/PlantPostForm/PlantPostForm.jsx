import { useState } from "react";
import * as plantPostsAPI from "../../utilities/posts-api";

export default function PlantPostForm() {
    const [content, setContent] = useState('');
    const [plantPosts, setPlantPosts] = useState([]);
    const [formData, setFormData] = useState({name:'', watering:'', exposure:'', notes:''});

    function handleSubmit(e) {
        e.preventDefault();
        handleAddPlant(content);
    }

    function handleChange(e) {
        setFormData({...formData,[e.target.name]:e.target.value})
    }


    async function handleAddPlant(plantData) {
        const plant = await plantPostsAPI.add(plantData);
        setPlantPosts([...plantPosts, plant]);
    }

    return (
        <div className='inputForm'>
            <form onSubmit={handleSubmit}>
                <label>
                    Plant Name:
                    <input type='text' name='name' />
                </label>
                <label> Desired Sunlight Exposure
                <select value='Sunlight Exposure' name='exposure'> 
                    <option selected value='Direct'>Direct</option>
                    <option value='Indirect'>Indirect</option>
                    <option value='Shade'>Shade</option>
                    <option value='Growlight'>Growlight</option>
                </select>
                </label>
                <label> Watering Frequency
                <select value='Watering Freqeuncy' name='watering'>
                    <option selected value='Daily'>Daily</option>
                    <option selected value='Weekly'>Weekly</option>
                    <option value='Bi-Weekly'>Bi-Weekly</option>
                    <option value='Monthly'>Monthly</option>
                    <option value='Cactus'>Cactus</option>
                </select>
                </label> 
                <label>Additional Notes, Plant Progress, etc. 
                <textarea
                    value={content}
                    onChange={e => setContent(e.target.value)}
                    name='notes'
                /> 
                </label> 
                <button type='submit'>Add Plant</button>
            </form>
        </div>
    );
}