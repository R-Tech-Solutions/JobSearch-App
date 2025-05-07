import {View, Text, TextInput, Button , StyleSheet , Image , TouchableOpacity} from 'react-native';
import { useState } from 'react';
import { router } from 'expo-router';

export default function Login(){
    const [email,setEmail] = useState('');
    const [newpassword,setnewPassword] = useState('');
    const [confirmpassword,setconfirmPassword] = useState('');

    const handleLogin =()=>{
        console.log('Logging in with:', email,newpassword,confirmpassword)
    }

    return(
        <View style={styles.container}>

            <Image 
                source={require('@/assets/images/JobImage.png')}
                style={styles.image} 
                resizeMode="contain"
            />
            <Text style={styles.heading}>Reset Your Password</Text>
            
            <Text style={styles.subheading}>Email</Text>
            <TextInput style={styles.TextInput} onChangeText={setEmail} value={email} placeholder="Email" />

            <Text style={styles.subheading}>New Password</Text>
            <TextInput style ={styles.TextInput} onChangeText={setnewPassword} value={newpassword} placeholder="Password" />

            <Text style={styles.subheading}>Confirm Password</Text>
            <TextInput style ={styles.TextInput} onChangeText={setconfirmPassword} value={confirmpassword} placeholder="Confirm Password" />
           

            <TouchableOpacity style={styles.forgetPasswordButton} onPress={() => router.push('/(auth)/login')}>
                <Text  style={styles.forgetPasswordButtonText}  onPress={handleLogin}>Reset Password</Text>
            </TouchableOpacity>
            
           
        </View>
    )
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:20,
        backgroundColor:'#fff',
        justifyContent:'center'
    },
    image:{
        width:'100%',
        height:300,
        marginBottom:20,
    },
    heading:{
        fontSize:20,
        fontWeight:'bold',
        color:'black',
        marginBottom:20,
        textAlign:'left'
    },
    subheading:{
        fontSize:16,
        fontWeight:'bold',
        color:'#007AFF',
        marginBottom:10,
        textAlign:'left'
    },
    TextInput :{
        height:45,
        borderRadius:6,
        backgroundColor:'#f2f2f2',
        paddingHorizontal:10,
        marginBottom:15,
        shadowColor:'#000',
        shadowOffset:{
            width:1,
            height:1
        },
        shadowOpacity:0.1,
        shadowRadius:2,
        elevation:2,
    },
    forgetPasswordButton:{
        backgroundColor:'#007bff',
        paddingVertical:12,
        borderRadius:6,
        alignItems:'center',
        marginBottom:10,
    },
    forgetPasswordButtonText:{
        color:'white',
        fontSize:16,
        fontWeight:'600',
    },
   
})