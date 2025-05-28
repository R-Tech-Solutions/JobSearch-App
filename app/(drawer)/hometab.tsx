import { View, Text, StyleSheet, ImageBackground, Pressable , ScrollView } from 'react-native';
import NavBar from '@/components/NavBar';
import SearchBar from '@/components/SearchBar';
import { useRef, useState } from 'react';
import SubTabSelector from '@/components/SubTabSelector';
import JobCard from '@/components/JobCard';
import RecentJobs from '@/components/RecentJobs';
import PopularJobsList from '@/components/PopularJobsList';
import { popularJobs } from '@/data/popularjobs';
import { useRouter } from 'expo-router';
import { recentJobs } from '@/data/recentjob';


export default function HomeTab(){
    const [searchText, setSearchText] = useState('');
    const [activeTab, setActiveTab] = useState('All');
    const selectedTab = activeTab === 'All' ? null : activeTab;

   
    const router = useRouter()   
 
    return(
        <ScrollView style={styles.container} >
           <NavBar/>
           <SearchBar value={searchText} onChange={setSearchText} />
           <SubTabSelector activeTab={activeTab} onTabPress={setActiveTab} />

           {(!selectedTab || selectedTab === 'All') &&(
            <View style={styles.section}>
                <View style={styles.row}>
                    <Text style={styles.heading}>Popular Jobs</Text>
                    <Pressable onPress={() => router.push("/(tabs)/popularjobs")}>
                        <Text style={styles.seeMore}>See More</Text>
                    </Pressable>
                </View>
                
                <ScrollView style={styles.container} horizontal showsHorizontalScrollIndicator={false}>
                    {popularJobs.slice(0,2).map((popularJob)=> (
                        <PopularJobsList key={popularJob.id} popularjobs={popularJob} />
                    ))}
                </ScrollView>
            </View>
            
           )}
           {(!selectedTab || selectedTab === 'All') &&(
            <View style={styles.section}>
                <View style={styles.row}>
                    <Text style={styles.heading}>Recent Jobs</Text>
                    
                </View>
                
                <ScrollView showsVerticalScrollIndicator>
                    {recentJobs.slice(0,6).map((recentJob)=> (
                        <RecentJobs key={recentJob.id} recentJobs={recentJob} />
                    ))}
                </ScrollView>
            </View>
           )}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:10,
        backgroundColor:'#fff',
        
    },
    populartext:{
        fontSize:15,
        fontWeight:'bold',
        padding:10,
    },
    recentjobs:{
        fontSize:15,
        fontWeight:'bold',
        padding:10,
    },
    seeMore:{
        color:"#007AFF",
        marginBottom:10,
        fontWeight:"500",
    },
    section:{
        marginBottom:16
    },
    heading:{
        fontSize:15,
        fontWeight:'bold',
        marginBottom:10,
    },
    row:{
        flexDirection:'row',
        alignItems:'center',
        marginBottom:6,
        justifyContent:"space-between"
    },
    horizontal:{
        paddingHorizontal:16,
        paddingBottom:16,
        borderRadius:10,
        borderColor:"#f2f2f2",
        gap:1
    }
})