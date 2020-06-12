import React from 'react'
import { 
  View, 
  ImageBackground, 
  Text, 
  Dimensions, 
  StyleSheet
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const windowHeight = Dimensions.get('window').height;

const ListItem = (props) => {
    return (
        <View style={styles.container}>
          <ImageBackground 
            source={{ uri: props.data.image }} 
            style={styles.styledImage}
          >
            <View style={styles.textLeftContainer}>
              <View>
                <Text style={[styles.styledText, { fontSize: 18 }]}>
                  {props.data.name}
                  {props.data.isOpenNow &&  
                    <Icon name="fire" color="red" size={20}/>
                  }
                </Text>
                <Text style={styles.styledText}>
                      {props.data.location}
                </Text>
              </View>

              <View style={styles.textRightContainer}>
                <Icon name="heart" color="red" size={20}/>
                <Text style={styles.styledText}>
                  {props.data.likes}
                </Text>
              </View>

            </View>
          </ImageBackground >
        </View>
    );
}

export default ListItem;

const styles = StyleSheet.create({
    container: {
        height: windowHeight / 3.5,
        marginBottom: 25,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 4,
    },
    styledImage: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "flex-end",
    },
    textLeftContainer: {
        backgroundColor: '#00000080',
        padding: 8,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    textRightContainer: {
      flexDirection:"row"
    },
    styledText: {
        fontSize: 14,
        color: '#fff',
        marginBottom:5,
    }
});