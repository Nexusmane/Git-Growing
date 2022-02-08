import { useState } from "react";

export default function PlantPostForm({handleAddPlant}) {
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