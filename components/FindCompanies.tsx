import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Pressable } from 'react-native';
import { Company } from '@/types';
import Icon from 'react-native-vector-icons/FontAwesome';

interface CompanyCardListProps {
    company: Company;
}

const CompanyCard:React.FC<CompanyCardListProps> = ({company}) => {
    return (
        <Pressable>
            <View style={styles.card}>
                <Text style={styles.title}>{company.name}</Text>
                <View style={styles.row}>
                    <Icon name="building" size={30} color="#555" style={styles.icon}/>
                    
                </View>

            </View>
        </Pressable>
    )
}
export default CompanyCard;

const styles = StyleSheet.create({
    container:{
        padding:10,
        margin:8,
        borderRadius:8,
        backgroundColor:'#fff',
    },
    card:{
        width:150,
        backgroundColor:'#fff',
        marginHorizontal:10,
        padding: 10,
        borderRadius:8,
        elevation:3,
        shadowColor:'#000',
        shadowOffset:{width:0 , height:1},
        shadowRadius:4,
    },
    title:{
        fontSize:10,
        fontWeight:'bold',
    },
    row:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:4,
    },
    icon:{
        marginTop:4,
    },
    infoColumn:{
        flexDirection:"column",
    },
    jobTitle:{
        fontSize:18,
        fontWeight:'bold',
        marginBottom:8,
    },
    company:{
        fontSize:8,
        fontWeight:'bold',
    }
});