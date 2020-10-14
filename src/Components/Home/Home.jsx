import React, {useEffect} from 'react';
import { Link } from 'react-router-dom'
import Item from '../item'
import { connect } from 'react-redux'
import { firestore, collectionsssDataBring } from '../../Firebase/firebase'

const Home = ({collectionsss, updatedCollectionsss}) => {
    console.log(collectionsss)

    useEffect(() => {
        const collectionRef = firestore.collection('collectionsss')
        collectionRef.onSnapshot(async snapshot => {
            const collectionsssMap = collectionsssDataBring(snapshot)
            updatedCollectionsss(collectionsssMap)
        })
    }, [])

    return (
        <div className="container">
            <h2> <Link to='/signin' >SignIn</Link> </h2>
            <h2>Home page</h2>
            { collectionsss ? collectionsss.map(collection => (
                <div key={collection.id} >
                    <h2> {collection.title} </h2>
                    <Item items={collection.items} />
                </div>
            )) : '' }
        </div>
    );
};

const mapStateToProps = state => ({
    collectionsss : state.shop.collectionsss
})

const mapDispatchToProps = dispatch => ({
    updatedCollectionsss : collectionMap => dispatch({ type : 'UPDATE_COLLECTIONSSS', payload : collectionMap })
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);