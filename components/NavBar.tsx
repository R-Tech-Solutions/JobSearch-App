import {View,Text,StyleSheet , TouchableOpacity} from 'react-native';
import React , { useState} from 'react';
import Icon from 'react-native-vector-icons/Feather'; // Import the Icon component from react-native-vector-icons
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { useRouter } from 'expo-router';

export default function NavBar(){

    const [menuVisible, setMenuVisible] = useState(false);
    const router = useRouter();
    const navigation = useNavigation();

    return (
        <View style={styles.navbar}>
            
            
            <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                <View style={styles.IconTextView}>
                    <Icon name="menu" size={24} color="#007bff" />
                    
                </View>
            </TouchableOpacity>
            <Text style={styles.TextView}>Find Your Dream Job</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    navbar:{
        paddingHorizontal:16,
        paddingVertical:20,
        marginTop:30,
        backgroundColor:'#fff',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        
        
        
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
    },
    IconTextView:{
        flexDirection:'row',
        alignItems:'center'
    },
    TextView:{
        marginLeft:8,
        fontSize:24,
        color:'#1976d2',
        fontWeight:'bold'
    }
})