import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import Icon from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/FontAwesome';



export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
      
        screenOptions={{
          headerShown: false,
        }}
      >
        <Drawer.Screen 
          name="hometab"
          options={{
            drawerLabel: 'Home',
            drawerIcon:({color,size}) =>(
              <Icon name="home" size={24} color={color} />
            )
          }} 
        />
        <Drawer.Screen 
          name="findjobs"
          options={{
            drawerLabel: 'Find Jobs',
            drawerIcon:({color,size}) =>(
              <Icon name="briefcase" size={24} color={color} />
            )
          }} 
        />
        <Drawer.Screen 
          name="companies"
          options={{
            drawerLabel: 'Companies',
            drawerIcon:({color,size}) =>(
              <Icon2 name="building" size={24} color={color} />
            )
          }} 
        />
        <Drawer.Screen 
          name="interviews"
          options={{
            drawerLabel: 'Interviews',
            drawerIcon:({color,size}) =>(
              <Icon name="message-circle" size={24} color={color} />
            )
          }} 
        />
        
        
      </Drawer>

    </GestureHandlerRootView>
  );
}
