import React, {useState} from 'react';
import {FlatList, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';

const ProductListComponent = (props) => {
    const [selectedId, setSelectedId] = useState(null);
    const {action} = props;

    const {product} = useSelector(state => {
        console.log("Product List Component");
        console.log({state});
        console.log(state.product.list.data.data);
        return{
            product: state.product.list.data.data,
        };
    });

    function showDetail(id) {
        console.log(id);
        action(id);
    }

    return(
        <>
            <FlatList
                data={product}
                renderItem={({item}) => {
                    return(
                        <TouchableOpacity
                            style={styles.btn}
                            onPress={() => {
                                setSelectedId(item.id);                                
                                showDetail(item.id);
                            }}>
                            <Text style={styles.label}>{item.name}</Text>
                        </TouchableOpacity>
                    );
                }}
                keyExtractor={(item) => item.id}
                extraData={selectedId}
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