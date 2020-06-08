import React from 'react'
import { View, ImageBackground, Text, Dimensions, StyleSheet, Platform } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'


const windowHeight = Dimensions.get('window').height;

const ListItem = (props) => {
    return (
        <View style={styles.container}>
            <ImageBackground source={{ uri: props.data.image }} style={styles.styleImage}>
                <View style={styles.styleTextContainer}>
                    <View>
                        <Text style={[styles.styleText, { fontSize: 18 }]}>{props.data.name}
                            <Icon
                                name="ios-back"
                                color="#ccc"
                                size={30}
                            />
                        </Text>
                        <Text style={styles.styleText}>{props.data.location}</Text>
                    </View>
                    <View>
                        <Text style={styles.styleText}>{props.data.likes}</Text>
                    </View>
                </View>

            </ImageBackground >

        </View>
    );
}

export default ListItem;

const styles = StyleSheet.create({
    container: {
        height: windowHeight / 4,
        marginBottom: 50,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,

    },
    styleImage: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "flex-end",

    },
    styleTextContainer: {
        backgroundColor: '#00000080',
        padding: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    styleText: {
        fontSize: 14,
        color: '#fff',
        marginBottom: 5,
    }
});