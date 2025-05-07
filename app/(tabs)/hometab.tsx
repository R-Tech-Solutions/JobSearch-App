import { View, Text, StyleSheet, ImageBackground, Pressable } from 'react-native';
import NavBar from '@/components/NavBar';
import SearchBar from '@/components/SearchBar';
import { useState } from 'react';




export default function HomeTab(){
    const [searchText, setSearchText] = useState('');
    const [activeTab, setActiveTab] = useState('Home');

    const jobs = [
        {title:'Frontend Developer',company:'Google',location:'Mumbai',salary:'$10000'},
        {title:'Backend Developer',company:'Amazon',location:'Mumbai',salary:'$10000'},
        {title:'Fullstack Developer',company:'Facebook',location:'Mumbai',salary:'$10000'},
        {title:'Data Scientist',company:'Microsoft',location:'Mumbai',salary:'$10000'},
    ]

    return(
        <View >
           <NavBar/>
        </View>
    );
}