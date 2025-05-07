import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const tabs = ['All', 'Remote' , 'Full-Time', 'Part-Time'];

export default function SubTabSelector({activeTab, onTabPress}:{activeTab:string, onTabPress:(tab:string) => void}){
    return(
        <View style={styles.container}>
            {tabs.map(tab => (
                <TouchableOpacity key={tab} onPress={() => onTabPress(tab)}>
                    <Text style={[styles.tab, activeTab === tab && styles.activeTab]}>{tab}</Text>
                </TouchableOpacity>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-around',
        marginVertical:10,
    },
    tab:{
        fontSize:16,
        color:'#777'
    },
    activeTab:{
        fontWeight:'bold',
        color:'#007bff'
    },
});