import React from 'react';
import {FlatList, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';

const ProductListComponent = (props) => {
    const {product} = useSelector(state => {
        console.log("Product List Screen");
        console.log({state});
        console.log(state.product.list.data.data);
        return{
            product: state.product.list.data.data,
        };
    });

    return(
        <>
            <FlatList
                data={product}
                renderItem={({item}) => {
                    return(
                        <TouchableOpacity
                            style={styles.btn}>
                            <Text style={styles.label}>{item.name}</Text>
                        </TouchableOpacity>
                    );
                }}
            />
        </>
    );
};

const styles = StyleSheet.create({
    btn: {
        backgroundColor: 'darkblue',
        borderColor: 'black',
        borderWidth: 1,
        width: '90%',
        alignSelf: 'center',
        justifyContent: 'center',
    },

    label: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16,
    },
});

export default ProductListComponent;