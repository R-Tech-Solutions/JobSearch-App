import NavBar from '@/components/NavBar';
import { View, Text, StyleSheet, TouchableOpacity ,ScrollView} from'react-native';

export default function companies() {
    return (
        <ScrollView style={styles.container}>
            <NavBar />
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