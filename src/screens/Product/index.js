import React from 'react';
import {View} from 'react-native';
import {
    Header2Component,
    ButtonNonFillComponent,
} from '@components';
import {fetchProduct} from '@redux/Product/action';
import {useDispatch, useSelector} from 'react-redux';

const ProductScreen = (props) => {
    //console.log({props});
    const {navigation} = props;

    const {token} = useSelector(state => {
        console.log("Product Screen");
        console.log({state});
        console.log(state.login.list.data.token);
        return{
            token: state.login.list.data.token,
        };
    });

    const dispatch = useDispatch();
    function showProduct() {
        dispatch(fetchProduct(token));
    }
    
    return(
        <View>
            <Header2Component text="Product" />
            <ButtonNonFillComponent action={() => showProduct()} label="Show All Product" />
        </View>
    );
};

export default ProductScreen;