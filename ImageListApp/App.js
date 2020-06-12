import React from 'react'
import { 
  SafeAreaView, 
  ScrollView, 
  View, 
  Text, 
  FlatList, 
  StyleSheet,
  Dimensions 
} from 'react-native'

import ListItem from './src/components/ListItem'
import data from './src/data.json'



const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.headerText}>RESTAURANTS</Text>
        <FlatList
          keyExtractor={ (item) => item.id.toString() }
          data={data}
          renderItem={
            ({ item }) => <ListItem data={item} />
          }
        >
        </FlatList>
      </View>
    </SafeAreaView>
  );
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: '#FFF',
  },
  headerText: {
    fontSize:20,
    textAlign:'center',
    marginBottom:10,
  }
});