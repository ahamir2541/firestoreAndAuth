import React, {useEffect} from 'react';
import AllItems from './allItems'
import { firestore, convertCollectionsSnapshotToMap } from '../Firebase/firebase'
import { connect } from 'react-redux'
import Registration from './Registration/Registration'

const AllComponents = ({collections, updatedCollection}) => {

    useEffect(() => {
        const collectionRef = firestore.collection('collectionItems')
        
        collectionRef.onSnapshot(async snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
            updatedCollection(collectionsMap)
        })

    }, [])

    return (
        <div>
            <Registration/>
            <div className="container">
                <AllItems />
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    collections : state.shop.collections
})

const mapDispatchToProps = dispatch => ({
    updatedCollection : collectionMap => dispatch({ type : 'UPDATE_COLLECTION', payload : collectionMap })
})

export default connect(mapStateToProps, mapDispatchToProps)(AllComponents);