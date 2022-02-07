import { useState } from "react";
import handleAddPlant from '../../pages/PlantListPage/PlantListPage';

export default function PlantPostForm({handleAddPost}) {
    const [content, setContent] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        handleAddPlant(content);
    }

    return (
        <form onSubmit={handleSubmit}>
            <textarea
                value={content}
                onChange={e => setContent(e.target.value)}
            />  
            <button type='submit'>Add Plant</button>
        </form>
    );
}