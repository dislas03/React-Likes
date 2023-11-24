import React, { useState } from "react";

const Like = () => {
    const [totalLikes, setTotalLikes] = useState(0);

    const handleLikeClick = () => {
        setTotalLikes(totalLikes + 1)
    };

    return(
        <div> 
            <button onClick = { handleLikeClick }>
                { totalLikes } 
            </button>
        </div>
    );
};

export default Like;