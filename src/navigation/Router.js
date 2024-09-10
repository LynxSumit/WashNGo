import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { useSelector } from 'react-redux';

// Import screens


import Splash from '../screens/Splash/Splash';
import Home from '../screens/home';
import Welcome from '../screens/auth/Welcome';
import Login from '../screens/auth/Login';
import SignUp from '../screens/auth/SignupDetails';
import { useAuth } from '../context/Auth.Context';

// Other necessary imports like Image, Platform, etc.

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

// function AuthenticatedTabs() {
//   return (
//     <Tab.Navigator initialRouteName='Home' screenOptions={{
//       headerShown: false,
//       tabBarStyle: { height: Platform.OS === 'ios' ? 71 : 80 },
//       tabBarActiveTintColor: "#25B8CB",
//       tabBarShowLabel : false,
      
//     }}>
//       <Tab.Screen name="Home" 
//       options={{
//     tabBarIcon : ({focused}) => (
     

//         <MaterialCommunityIcons style={{
//         tintColor : focused ? colors.themeColor : colors.secondaryColor
//         }} name={
//               focused ? 'home' : 'home-outline'
            
//         } size={28} color={focused ? colors.themeColor : colors.secondaryColor} />

//     )
//       }} 
      
        

//        component={Home} />
//       <Tab.Screen name="Inbox" options={{
//     tabBarIcon : ({focused}) => (
     

//         <Ionicons style={{
//         tintColor : focused ? colors.themeColor : colors.secondaryColor
//         }} name={
//               focused ? 'chatbubble' : 'chatbubble-outline'
            
//         } size={24} color={focused ? colors.themeColor : colors.secondaryColor} />

//     )
//       }} component={Inbox} />
//       <Tab.Screen name="Likes" options={{
//     tabBarIcon : ({focused}) => (
     

//         <AntDesign style={{
//         tintColor : focused ? colors.themeColor : colors.secondaryColor
//         }} name={
//            focused ? 'heart' : 'hearto'
            
//         } size={24} color={focused ? colors.themeColor : colors.secondaryColor} />

//     )
//       }} component={Likes} />
//       <Tab.Screen name="Notification" options={{
//     tabBarIcon : ({focused}) => (
     

//         <MaterialCommunityIcons name={
//         focused ? 'bell' : 'bell-outline'
            
//         } size={24} color={focused ? colors.themeColor : colors.secondaryColor} />

//     )
//       }} component={Notification} />
        
//       <Tab.Screen options={{
//     tabBarIcon : ({focused}) => (
     

//         <Ionicons style={{
//         tintColor : focused ? colors.themeColor : colors.secondaryColor
//         }} name={
//               focused ? 'person' : 'person-outline'
            
//         } size={24} color={focused ? colors.themeColor : colors.secondaryColor} />

//     )
//       }} name="Profile" component={Profile} />
//     </Tab.Navigator>
//   );
// }

// function AuthenticatedDrawer() {
//   return (
//     <Drawer.Navigator initialRouteName="MainTabs">
//       <Drawer.Screen name="MainTabs" component={AuthenticatedTabs} options={{ title: 'Home' }} />
//       <Drawer.Screen name="Settings" component={Settings} />
//       <Drawer.Screen name="FAQ" component={FAQ} />
//       <Drawer.Screen name="Support" component={Support} />
//     </Drawer.Navigator>
//   );
// }

export const Navigator = () => {
  const {isAuthenticated} = useAuth();
//   const { isAuthenticated } = useSelector(state => state.auth);

console.log(isAuthenticated)
  if (!isAuthenticated) {
  return  <Stack.Navigator screenOptions={{ 
headerShown: false


}} initialRouteName="Splash">
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignupDetails" component={SignUp} />
     
      
      </Stack.Navigator>
    // Stack.Navigator for unauthenticated users remains the same
  } else {
    return <Stack.Navigator screenOptions={{ 
      headerShown: false
      
      
      }} initialRouteName="Splash">
            <Stack.Screen name="Home" component={Home} />

         
            
            </Stack.Navigator>;
  }
}
