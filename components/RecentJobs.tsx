import {View , Text, StyleSheet, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { RecentJob } from '@/types';

interface RecentJobsProps {
    recentJobs: RecentJob;
}

const RecentJobs: React.FC<RecentJobsProps> =({recentJobs}) => {
    return(
        <Pressable>
            <View style={styles.container}>
            
                <View style={styles.row}>
                    <Icon name="building" size={30} color="#555" style={styles.icon}/>
                        <View style={styles.infoColumn}>
                            <Text style={styles.jobtitle}>{recentJobs.title}</Text>
                            <Text style={styles.company}>{recentJobs.company}</Text>
                        </View>
                    
                    <Text style={styles.jobtype}>{recentJobs.type}</Text>  
                    
                </View>
                  
                <View style={styles.row2}>
                    
                    
                </View>
            </View>
        </Pressable>
        
        
            
    );
}
export default RecentJobs;

const styles = StyleSheet.create({
    container:{
        padding:10,
        margin:8,
        borderRadius:8,
        backgroundColor:'#fff',
        shadowColor:'#000',
        shadowOpacity: 0.1,
        elevation:2,
        shadowOffset:{
            width:0,
            height:2,
        },
        shadowRadius:4,
    },
    jobtitle:{
        fontSize:15,
        fontWeight:'bold',
        marginBottom:8,
    },
    jobtype:{
        fontSize:8,
        color:'#777',
        backgroundColor: '#eee',
        paddingVertical:2,
        borderRadius:4,
        paddingHorizontal:4,
    },
    company:{
        fontSize:8,
        fontWeight:'bold',
    },
    row:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:4,
        
    },
    icon:{
        marginTop:8,
    },
    infoColumn:{
        flexDirection:"column",
        
    },
    row2:{
        flexDirection:"row",
        alignItems:'center',
    },
})