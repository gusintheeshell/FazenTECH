import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

import { theme } from '../../../constants';
import { useCart } from '../../../contexts/cart';


function ShoppingCartIcon(){
    const { cart } = useCart();
    const navigation = useNavigation();

    function navigateToCheckout(){
        navigation.navigate('Checkout');
    }

    return (
        <TouchableOpacity onPress={() => navigateToCheckout()}>
            <View style={{ padding: 5 }}>
                <View style={styles.backNumItens}>
                    
                    <Text style={styles.numItens}>{Object.keys(cart).length}</Text>
                
                </View>
                <Icon name="ios-cart" size={30} />
            </View>
        </TouchableOpacity>
    )
}

// const ShoppingCartIcon = (props) => (
//     <View style={{ padding: 5 }}>
//         <View style={styles.backNumItens}>
//             <Text style={styles.numItens}>0</Text>
//         </View>
//         <Icon name="ios-cart" size={30} />
//     </View>
// )

export default ShoppingCartIcon;

const styles  = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center',
        justifyContent: 'center'
    },
    backNumItens: {
        position: 'absolute',
        height: 30, 
        width: 30,
        borderRadius: 15,
        backgroundColor: theme.colors.secondary,
        right: 15,
        bottom: 15,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 2000,
    },
    numItens: {
        color: 'white',
        fontWeight: 'bold',
    },
});