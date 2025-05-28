import NavBar from '@/components/NavBar';
import { View, Text, StyleSheet, TouchableOpacity ,ScrollView} from'react-native';
import { companies } from '@/data/companies';
import { Company } from '@/types';
import CompanyCardListProps from '@/components/FindCompanies';

export default function findjobs() {
    return (
        <ScrollView style={styles.container}>
            <NavBar />
            <ScrollView style={styles.container} horizontal showsHorizontalScrollIndicator={false}>
                    {companies.slice(0,2).map((Company)=> (
                        <CompanyCardListProps key={Company.id} company={Company} />
                    ))}
                </ScrollView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10,
        
    },
});