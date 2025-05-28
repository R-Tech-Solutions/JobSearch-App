import {View, Text, TextInput, Button , StyleSheet , Image , TouchableOpacity} from 'react-native';
import { useState } from 'react';
import { router } from 'expo-router';

export default function SignUp(){
    const [firstname,setFirstName] = useState('');
    const [lastname,setLastName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');

    const handleLogin =()=>{
        console.log('Logging in with:', email,password)
    }

    return(
        <View style={styles.container}>

           
            <Text style={styles.heading}>Sign Up</Text>

            <Text style={styles.subheading}>First Name</Text>
            <TextInput style={styles.TextInput} onChangeText={setFirstName} value={firstname} placeholder="First Name" />

            <Text style={styles.subheading}>Last Name</Text>
            <TextInput style={styles.TextInput} onChangeText={setLastName} value={lastname} placeholder="Last Name" />

            <Text style={styles.subheading}>Email</Text>
            <TextInput style={styles.TextInput} onChangeText={setEmail} value={email} placeholder="Email" />

            <Text style={styles.subheading}>Password</Text>
            <TextInput style ={styles.TextInput} onChangeText={setPassword} value={password} placeholder="Password" />

            <Text style={styles.subheading}>Confirm Password</Text>
            <TextInput style ={styles.TextInput} onChangeText={setConfirmPassword} value={confirmPassword} placeholder="Confirm Password" />

            

            <TouchableOpacity style={styles.signupButton} onPress={() => router.push('/(drawer)/hometab')}>
                <Text  style={styles.signupButtonText}  onPress={handleLogin}>Sign Up</Text>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => router.push('/(auth)/login')}>
                <Text style={styles.signupText}>Already Have an Account</Text>
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
    forgetPassword:{
        textAlign:'left',
        color:'#1976d2',
        marginBottom:10
    },
    signupButton:{
        backgroundColor:'#007bff',
        paddingVertical:12,
        borderRadius:6,
        alignItems:'center',
        marginBottom:10,
    },
    signupButtonText:{
        color:'white',
        fontSize:16,
        fontWeight:'600',
    },
    signupText:{
        fontSize:14,
        color:'#1976d2',
        fontWeight:'600',
        textAlign:'center',
    }
})