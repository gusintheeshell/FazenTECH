import React from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { mocks, theme } from '../constants';
import { Badge, Block, Button, Card, Text } from '../components';

const { width } = Dimensions.get('window');

export default class Browse extends React.Component{
    render(){
        const { category, navigation, products, profile } = this.props;
        return (
            <Block>
                <Block flex={false} row center space="between" style={styles.header}>
                    <Text h1 bold>Browse</Text>
                    {/* <Button>
                        <Image source={profile.avatar} style={styles.avatar} />
                    </Button> */}
                </Block>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    style={{paddingVertical: theme.sizes.base * 2}}
                >
                    {products.map(product => (
                    <TouchableOpacity key={product.id} onPress={() => navigation.navigate('')}>
                        <Card center middle shadow style={styles.categories}>
                            <Badge>
                                <Image source={require('../assets/images/illus3.png')} style={styles.imageView}/>
                            </Badge>
                            <Text style={styles.textView}>Plants</Text>
                            <Text gray caption>123 products</Text>
                        </Card>
                    </TouchableOpacity>
                    ))}
                </ScrollView>
            </Block>
        )
    }
}

Browse.defaultProps = {
    profile: mocks.profile,
    categories: mocks.categories,
    products: mocks.products,
}

const styles = StyleSheet.create({
    header: {
        paddingHorizontal: theme.sizes.base * 2,
    },
    avatar: {
        height: theme.sizes.base * 2.2,
        width: theme.sizes.base * 2.2,
    },
    categories: {
        flex:1,
        margin: 5,
        flexDirection: 'row',
        // flexWrap: 'wrap',
        //paddingHorizontal: theme.sizes.base * 2,
        marginBottom: theme.sizes.base * 1.5,
        minWidth: (width - (theme.sizes.padding * 0.4) - theme.sizes.base) / 1,
        maxWidth: (width - (theme.sizes.padding) - theme.sizes.base) / 2,
        maxHeight: (width - (theme.sizes.padding) - theme.sizes.base) / 2,
        // marginLeft: theme.sizes.base * 2,
    },
    imageView: {
        width: 100,
        height: 50,
        margin: 7,
        borderRadius : 7,
    },
    textView: {
        width: '50%', 
        textAlignVertical: 'center',
        padding: 50,
        color: '#000',
    }
});