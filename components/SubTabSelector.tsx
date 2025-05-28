import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const tabs = ['All', 'Remote' , 'Full-Time', 'Part-Time'];

export default function SubTabSelector({activeTab, onTabPress}:{activeTab:string, onTabPress:(tab:string) => void}){
    return(
        <View style={styles.container}>
            {tabs.map(tab => (
                <TouchableOpacity key={tab} onPress={() => onTabPress(tab)} style={[styles.tabItem , activeTab === tab && styles.activeTabItem]} >
                    <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>{tab}</Text>
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
    tabText:{
        fontSize:10,
        color:'#777',
        fontWeight:'bold'
    },
    activeTab:{
        fontWeight:'bold',
        color:'#007bff'
    },
    tabItem:{
        paddingVertical:7,
        paddingHorizontal:15,
        borderWidth:1,
        borderColor:'#007bff',
        borderRadius:20,
    },
    activeTabItem:{
        backgroundColor:'#007bff',
        borderColor:'#e6f0ff'
    },
    activeTabText:{
        color:'#fff',
        fontWeight:'bold'
    }
});