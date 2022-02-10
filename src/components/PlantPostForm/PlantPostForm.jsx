import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import * as plantPostsAPI from "../../utilities/posts-api";
import './PlantPostForm.css';

export default function PlantPostForm() {
    const [formData, setFormData] = useState({name:'', watering:'', exposure:'', notes:''});
    const navigate = useNavigate();
    const [error, setError] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();
    try {
        const plant = await plantPostsAPI.add(formData);
        navigate('/plants/list');
    } catch {
        setError('All fields are required for plant creation.');
      }
    }

    function handleChange(e) {
        setFormData({...formData,[e.target.name]:e.target.value})
    }

    return (
        <>
        <div className='inputForm'>
            <form className='new-plant-form' onSubmit={handleSubmit}>
                <label className='input-label'> Plant Name:
                    <input type='text' name='name' onChange={handleChange}/>
                </label>
                <label className='input-label'> Desired Sunlight Exposure
                    <select name='exposure' onChange={handleChange}> 
                        <option value=''></option>
                        <option value='Direct'>Direct</option>
                        <option value='Indirect'>Indirect</option>
                        <option value='Shade'>Shade</option>
                        <option value='Growlight'>Growlight</option>
                    </select>
                </label>
                <label className='input-label'> Watering Frequency
                    <select name='watering' onChange={handleChange}>
                        <option value='Daily'>Daily</option>
                        <option value='Weekly'>Weekly</option>
                        <option value='Bi-Weekly'>Bi-Weekly</option>
                    <   option value='Monthly'>Monthly</option>
                        <option value='Cactus'>Cactus</option>
                    </select>
                </label> 
                <label className='input-label'>Additional Notes, Plant Progress, etc. 
                    <textarea
                        name='notes'
                        onChange={handleChange}
                    /> 
                </label> 
                <button type='submit' value='Submit'>Add Plant</button>
            </form>
        </div>
        <p className="error-message">&nbsp;{error}</p>
        </>
    );
}