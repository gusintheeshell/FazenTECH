import React, { useState, useContext } from 'react';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import { Image, FlatList, View, Text, StyleSheet, ToastAndroid, TouchableOpacity } from 'react-native';
import NumericInput from 'react-native-numeric-input';

import { theme } from '../../constants';
import { useCart } from '../../contexts/cart';
import AuthContenxt from '../../contexts/auth';
import api from '../../services/api';

export default function Checkout(){
    const { remove, cart, addQuantidade, quantidade, totalValue } = useCart();
    const { nome, email } = useContext(AuthContenxt);

    const showToastWithGravity = () => {
        ToastAndroid.showWithGravity(
          'Enviando e-mail.',
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM
        );
    };

    async function sendEmail(){
        showToastWithGravity();
        const response = await api.post('usuario/finalizar', {
            usuario: {
                nome,
                email
            },
            produtos: cart
        });
        alert(response.data.response);
    }

    return (
        <>
            <View style={styles.container}>
                <FlatList 
                    data={cart}
                    renderItem={({index, item}) => (
                        <View style={styles.incident}>
                            <View style={{ flexDirection: 'row', marginBottom: 30}}>
                                <View style={{ flex: 1 }}>
                                    <Image source={item.image} />
                                </View>
                                <View style={{ flex: 1 }}>
                                    <Text style={styles.incidentProperty}>NOME:</Text>
                                    <Text style={styles.incidentValue}>{item.nome}</Text>
                                </View>
                                <View style={{ flex: 1 }}>
                                    <Text style={styles.incidentProperty}>VALOR:</Text>
                                    <Text style={styles.incidentValue}>
                                    {Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL'
                                    }).format(item.preco)}
                                    </Text>
                                </View>
                            </View>
                        <Text style={styles.incidentProperty}>DESCRIÇÃO:</Text>
                        <Text style={styles.incidentValue}>{item.descricao}</Text>
                        <View style={{flexDirection: 'row'}}>
                            <View style={{ flex: 1 }}>
                            <NumericInput value={quantidade} onChange={quantidade => addQuantidade(quantidade)} />
                            </View>
                            <View style={{ flex: 1, marginRight: 20 }}>
                            <TouchableOpacity 
                                style={styles.detailsButton}
                                onPress={() => remove(index)}
                            >
                            <Text>Remover do carrinho</Text>
                        </TouchableOpacity>
                            </View>
                        </View>  
                    </View>
                    )} 
                    keyExtractor={item => String(item.id)}
                />
            </View>
            <View style={{flexDirection: 'row', backgroundColor: 'white'}}>
                <View style={{ flex:1 }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold'}}>Total: {Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                    }).format(totalValue)}</Text> 
                </View>
                <View style={{ flex:1 }}>
                <TouchableOpacity style={styles.detailsButton} onPress={sendEmail}>
                    <Text>Fechar pedido</Text>
                </TouchableOpacity>
                </View>
            
            </View>
        </>
    );  
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    headerText: {
        fontSize: 15,
        color: '#737380'
    },

    headerTextBold: {
        fontWeight: 'bold'
    },

    title: {
        fontSize: 30,
        marginBottom: 16,
        marginTop: 48,
        color: '#13131a',
        fontWeight: 'bold'
    },

    description:{
      fontSize: 16,
      lineHeight: 24,
      color: '#737380'  
    },

    incidentList: {
        marginTop: 32,
    },

    incident: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16,
    },

    incidentProperty: {
        fontSize: 14,
        color: '#41414d',
        fontWeight: 'bold',
    },

    incidentValue: {
        marginTop: 8,
        fontSize: 15,
        marginBottom: 20,
        color: '#737380'
    },

    detailsButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
        width: 170,
        borderRadius: 8,
        padding: 10,
        backgroundColor: theme.colors.secondary,
    },

    detailsButtonText: {
        color: theme.colors.secondary,
        fontSize: 15,
        fontWeight: 'bold'
    }
});