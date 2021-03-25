import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {
    Header2Component,
    ButtonNonFillComponent,
    ProductListComponent,
} from '@components';
import {fetchProduct} from '@redux/Product/action';
import {useDispatch, useSelector} from 'react-redux';

const ProductScreen = (props) => {
    //console.log({props});
    const {navigation} = props;
    const [showed, setShowed] = useState(false);

    const dispatch = useDispatch();

    const {token} = useSelector(state => {
        console.log("Product Screen");
        console.log({state});
        console.log(state.login.list.data.token);
        return{
            token: state.login.list.data.token,
        };
    });

    useEffect(() => {
        dispatch(fetchProduct(token));
    }, []);

    function showProduct() {
        setShowed(true);
    }

    function showDetail(id) {
        navigation.navigate('ProductDetail', {
            'id': id,
        });
    }
    
    return(
        <View>
            <Header2Component text="Product" />
            <ButtonNonFillComponent action={() => showProduct()} label="Show All Product" />
            {showed && 
                <View style={styles.whitespacetop}>
                    <ProductListComponent action={(id) => showDetail(id)} />
                </View>
            }
        </View>
    );
};

let {height} = Dimensions.get('window');
const styles = StyleSheet.create({
    whitespacetop: {
        marginTop: height * 0.05,
    },
});

export default ProductScreen;