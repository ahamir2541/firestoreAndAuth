import React from 'react';

const Item = ({items}) => {
    return (
        <div>
            {items.map(item => (
                <div key={item.id}>
                    <h6 > {item.name} </h6>
                    <img className="img-fluid img_container " src={item.imageUrl} alt=""/>
                </div>
            ))}
        </div>
    );
};

export default Item;