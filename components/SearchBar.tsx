import { View ,TextInput , StyleSheet} from 'react-native';

export default function SearchBar({value, onChange}:{value:string, onChange:(text:string) => void}){
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.TextInput}
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
    TextInput :{
        height:45,
        borderRadius:6,
        backgroundColor:'#f2f2f2',
        paddingHorizontal:10,
        marginBottom:15,
        elevation:4,
    },
});