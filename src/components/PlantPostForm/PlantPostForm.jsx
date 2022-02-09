import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import * as plantPostsAPI from "../../utilities/posts-api";

export default function PlantPostForm() {
    const [formData, setFormData] = useState({name:'', watering:'', exposure:'', notes:''});
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        const plant = await plantPostsAPI.add(formData);
        navigate('/plants/list');
    }

    function handleChange(e) {
        setFormData({...formData,[e.target.name]:e.target.value})
    }

    return (
        <div className='inputForm'>
            <form onSubmit={handleSubmit}>
                <label> Plant Name:
                    <input type='text' name='name' onChange={handleChange}/>
                </label>
                <label> Desired Sunlight Exposure
                    <select value={formData.name} name='exposure' onChange={handleChange}> 
                        <option value='Direct'>Direct</option>
                        <option value='Indirect'>Indirect</option>
                        <option value='Shade'>Shade</option>
                        <option value='Growlight'>Growlight</option>
                    </select>
                </label>
                <label> Watering Frequency
                    <select value={formData.name} name='watering' onChange={handleChange}>
                        <option value='Daily'>Daily</option>
                        <option value='Weekly'>Weekly</option>
                        <option value='Bi-Weekly'>Bi-Weekly</option>
                    <   option value='Monthly'>Monthly</option>
                        <option value='Cactus'>Cactus</option>
                    </select>
                </label> 
                <label>Additional Notes, Plant Progress, etc. 
                    <textarea
                        // value={formData.name}
                        name='notes'
                        onChange={handleChange}
                    /> 
                </label> 
                <button type='submit' value='Submit'>Add Plant</button>
            </form>
        </div>
    );
}