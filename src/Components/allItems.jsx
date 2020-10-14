import React from 'react';
import { connect } from 'react-redux'
import Item from './item'

const AllItems = ({collections}) => {

    const collectionsArray = collections ? Object.keys(collections).map(key => collections[key]) : ''
    console.log(collectionsArray)

    return (
        <div>
             <h2>all items</h2>
             { collectionsArray ? collectionsArray.map(items => {
                 return (
                     <div  key={items.id}>
                         <h2> {items.title} </h2>
                         <Item items={items.items} />
                     </div>
                 )
             }) : '' }
        </div>
    );
};

const mapStateToProps = state => ({
    collections : state.shop.collections
})

export default connect(mapStateToProps)(AllItems);