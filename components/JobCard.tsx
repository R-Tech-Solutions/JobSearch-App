import {View, Text, StyleSheet} from 'react-native';


export default function JobCard({title, company} :{title:string, company:string}){
    return (
        <View style={styles.card}>
            <Text style={styles.title}></Text>
            <Text>{company}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card:{
        padding:16,
        margin:8,
        borderRadius:8,
        backgroundColor:'#fff',
        shadowColor:'#000',
        shadowOpacity: 0.1,
        elevation:2,
        shadowRadius:4,
    },
    title :{
        fontWeight:'bold',
        fontSize:16,
    },
})