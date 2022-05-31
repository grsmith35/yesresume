import React, { useEffect, useState } from 'react';

export default function AppList(list) {
    const [theList, setTheList] = useState([]);

    useEffect(() => {
        setTheList(list.list)
    }, [list]);

    return(
        <div>
            {theList.map((p) => (
                <div key={p.name} className='card p-3 m-3'>
                    <h3 className='card-title'>{p.name}</h3>
                    <h4 className='card-subtitle'>{p.email}</h4>
                    <p className='card-text'>Application date: {p.date}</p>
                </div>
            ))}
        </div>
    )
};

