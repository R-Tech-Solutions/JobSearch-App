import {View, Text, StyleSheet, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


interface JobCardProps {
    title: string;
    company:string;
    location :string;
    description:string;
    datePosted:string;
    jobtype:string;
    salary:string;
    variant: 'card1' | 'card2';
}

export default function JobCard({title, company ,location ,  jobtype, salary ,variant ='card1'} :JobCardProps ){
    return (
        <Pressable>
            {variant === 'card1' ? (
                <View style={styles.card}>
                    <Text style={styles.title}>{title}</Text>
                    <View style={styles.row}>
                        <Icon name="map-marker" size={15} color="#555" style={styles.mapicon}/>
                        <Text style={styles.location}>{location}</Text>
                        <Text style={styles.jobtype}>{jobtype}</Text>
                    </View>
                    <View style={styles.row2}>
                    <Icon name="building" size={30} color="#555" style={styles.icon}/>
                        <View style={styles.infoColumn}>
                            <Text style={styles.company}>{company}</Text>
                            <Text style={styles.salarycompany1}>{salary}</Text>
                        </View>
                    </View>
                </View>
            ) : (
                <View style={styles.card2}>
                    <Text style={styles.card2title}>{title}</Text>
                    <View style={styles.row}>
                        <Icon name="map-marker" size={15} color="#555" style={styles.mapicon}/>
                        <Text style={styles.card2location}>
                             {location}
                        </Text>
                        <Text style={styles.jobtype}>{jobtype}</Text>
                    </View>
                    <View style={styles.row2}>
                        <Icon name="building" size={30} color="#555" style={styles.icon}/>
                        <View style={styles.infoColumn}>
                            <Text style={styles.card2company}>{company}</Text>
                            <Text style={styles.salarycompany2}>{salary}</Text>
                        </View>
                    </View>
                </View>
            )}
        </Pressable>
        
    );
}

const styles = StyleSheet.create({
    card:{
        width:150,
        backgroundColor:'#fff',
        marginHorizontal:10,
        padding:10,
        borderRadius:8,
        elevation:3,
        shadowColor:'#000',
        shadowOpacity:0.1,
        shadowOffset:{width:0 , height:1},
        shadowRadius:4,
    },
    card2:{
        width:150,
        backgroundColor:'#1976d2',
        marginHorizontal:10,
        padding:10,
        borderRadius:8,
        elevation:3,
        shadowColor:'#000',
        shadowOpacity:0.1,
        shadowOffset:{width:0 , height:1},
        shadowRadius:4,
    },
    title :{
        fontWeight:'bold',
        fontSize:10,
    },
    card2title:{
        fontWeight:'bold',
        fontSize:10,
        color: '#fff',
    },
    card2company:{
        fontSize:10,
        color: '#fff',
        marginTop:18
        
    },
    card2location:{
        fontSize:7,
        color: '#fff',
        marginTop:4,
        marginRight:10,
    },
    location:{
        fontSize:7,
        color: 'black',
        marginTop:4,
        marginRight:10,
    },
    company: {
        fontSize:10,
        color: '#555',
        marginTop:20,
    },
    row:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:4,
    },
    
    jobtype:{
        fontSize:8,
        backgroundColor: '#eee',
        paddingHorizontal:4,
        paddingVertical:2,
        borderRadius:4,
        color: '#555'
    },

    icon:{
        marginRight:4,
        marginTop:25,
    },
    mapicon:{
        marginTop:8,
    },
    row2:{
        flexDirection:"row",
        alignItems:'center',
    },
    salarycompany2:{
        fontSize:10,
    },
    salarycompany1:{
        fontSize:10,
    },
    infoColumn:{
        flexDirection:"column"
    }
})