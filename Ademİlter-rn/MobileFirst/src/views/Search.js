import 'react-native-gesture-handler';
import * as React from 'react';
import {View, Button} from 'react-native';

import Box from '../component/box';
import BoxCenter from  '../component/BoxCenter'
import {History} from '../component/icons';
import {Search} from '../component/icons';

function SearchView ({navigation}) {
    return (
    <BoxCenter>
        <Button title="Go to details" onPress={()=> navigation.navigate('Details')} />
        <Box size={20} bg="gray" m={20}/>
        <Search width={50} height={50} stroke="red" />
    </BoxCenter>
    );
}

export default SearchView;

