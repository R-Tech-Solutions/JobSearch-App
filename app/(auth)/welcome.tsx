import React from "react";
import { View, Text, StyleSheet ,TouchableOpacity,Image} from "react-native";
import { useRouter } from "expo-router";

export default function Welcome() {
    const router = useRouter();

  return (
    <View  style={styles.container}>
         <Image
                source={require('@/assets/images/JobImage.png')}
                style={styles.image}
                resizeMode="contain"
            />
        <Text style={styles.heading}>Get the Job that you dream </Text>

           

        <View style ={styles.content}>
            <Text style={styles.paragraph}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed porttitor fermentum odio quis lacinia. Maecenas,suscipit neque velit. Ut kuctus lectus porta at.Donec velit augue, ultricies at massa sodales, interdum laoreet dul.Morbi tempus non diam vitae laculis.Donec ut ,laculis arcu.
            </Text>
            
            <TouchableOpacity onPress={() => router.push('/sign-up')} style={styles.button}>
                <Text style={styles.buttonText}>Get Started →</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:20,
        backgroundColor:'#fff',
        justifyContent:'center',
    },
    heading:{
        fontSize:20,
        fontWeight:'bold',
        color:'blue',
        marginBottom:20,
        textAlign:'center',
    },
    content:{
        marginBottom:40,
    },
    paragraph:{
        fontSize:14,
        color:'#000',
        marginBottom:10,
        lineHeight:20,
        textAlign:'center'
    },
    button:{
        backgroundColor:'#007AFF',
        paddingVertical:15,
        paddingHorizontal:50,
        borderRadius:10,
        alignSelf:'center'
    },
    buttonText:{
        color:'#fff',
        fontSize:16,
        fontWeight:'600',
        textAlign:'center',
    },
    image:{
        width:'100%',
        height:300,
        marginBottom:30
    }
});