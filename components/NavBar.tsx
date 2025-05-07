import {View,Text,StyleSheet , TouchableOpacity} from 'react-native';
import React , { useState} from 'react';
import Icon from 'react-native-vector-icons/Feather'; // Import the Icon component from react-native-vector-icons
import { useNavigation } from '@react-navigation/native';

export default function NavBar(){

    const [menuVisible, setMenuVisible] = useState(false);

    return (
        <View style={styles.navbar}>
            

            <TouchableOpacity onPress={() => setMenuVisible(!menuVisible)}>
                <Icon name="menu" size={24} color="#000" />
            </TouchableOpacity>

            {/*Dropdown menu*/}
            {menuVisible && (
                <View style={styles.dropdown}>
                    <TouchableOpacity style={styles.menuItem}><Text>Profile</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.menuItem}><Text>Find Job</Text></TouchableOpacity>
                </View>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    navbar:{
        padding:25,
        flexDirection:'row',
        justifyContent:'space-between'
        
    },
    title:{
        fontSize:20,
        fontWeight:'bold',
    },
    dropdown:{
        position:'absolute',
        top:60,
        left:16,
        backgroundColor:'#fff',
        borderRadius:6,
        shadowColor:'#000',
        shadowOpacity:0.1,
        shadowRadius:4,
        elevation:4,
        zIndex:99,
    },
    menuItem:{
        padding:12,
        borderBottomWidth:1,
        borderColor:'#eee',
    }
})