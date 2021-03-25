import React from 'react';
import {View} from 'react-native';
import {
    Header1Component,    
} from '@components';

const ProductDetailScreen = (props) => {
    //console.log({props});
    const {navigation} = props;

    return(
        <>
            <Header1Component text="Detail Product" />
        </>
    );
};

export default ProductDetailScreen;