import React from 'react';
import {View, StyleSheet} from 'react-native';
import {
    Header1Component,
    SubtitleComponent,
} from '@components';
import {useSelector} from 'react-redux';

const ProductDetailScreen = (props) => {
    //console.log({props});
    const {navigation, route} = props;
    console.log(route.params.id);
    const id = route.params.id - 1;

    const {product} = useSelector(state => {
        console.log("Product Detail Screen");
        console.log({state});
        console.log(state.product.list.data.data[id]);
        return{
            product: state.product.list.data.data[id],
        };
    });

    return(
        <View>
            <Header1Component text="Detail Product" />
            <View style={styles.detail}>
                <SubtitleComponent text={`ID: ${product.id}`} />
                <SubtitleComponent text={`Name: ${product.name}`} />
                <SubtitleComponent text={`Photo URL: ${product.photo_url}`} />
                <SubtitleComponent text={`Price: ${product.price}`} />
                <SubtitleComponent text={`Stok: ${product.stock}`} />
                <SubtitleComponent text={`Supplier: ${product.supplier.username}`} />
            </View>
        </View>
    );
};

const styles= StyleSheet.create({
    detail: {
        alignSelf: 'center',
        width: '80%',
        marginTop: 20,
        borderWidth: 1,
        borderColor: '#3C3A36',
    },
});

export default ProductDetailScreen;