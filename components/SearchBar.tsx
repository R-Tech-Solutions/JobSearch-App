import { View ,TextInput , StyleSheet} from 'react-native';

export default function SearchBar({value, onChange}:{value:string, onChange:(text:string) => void}){
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Search for jobs..."
                value={value}
                onChangeText={onChange}
            />
        </View>

    );
}

const styles = StyleSheet.create({
    container:{
        margin:16,
    },
    input:{
        backgroundColor:'#f1f1f1',
        padding:16,
        borderRadius:8,
    },
});