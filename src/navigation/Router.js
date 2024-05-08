import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { useSelector } from 'react-redux';

// Import screens

import Inbox from '../screens/chat/index';
import Profile from '../screens/profile/index';
import Settings from '../screens/settings/index';

import Likes from '../screens/like';
import Notification from '../screens/notification';
import FAQ from '../screens/other/FAQ';
import Splash from '../screens/Splash/Splash';
import Home from '../screens/home';
import Support from '../screens/other/Support';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { MotiView } from 'moti';
import Animated from 'react-native-reanimated';
import { colors } from '../constants/colors';
import Login from '../screens/auth';
import SignUpDetails from '../screens/auth/SignupDetails';
import VerifyOtp from '../screens/auth/VerifyOtp';
import EnterPhone from '../screens/auth/EnterPhone';
import ProfileSetup from '../screens/auth/ProfileSetup';
import SelectGender from '../screens/auth/SelectGender';
import YourInterests from '../screens/auth/YourInterests';
import Introduction from '../screens/auth/Introduction';

// Other necessary imports like Image, Platform, etc.

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function AuthenticatedTabs() {
  return (
    <Tab.Navigator initialRouteName='Home' screenOptions={{
      headerShown: false,
      tabBarStyle: { height: Platform.OS === 'ios' ? 71 : 80 },
      tabBarActiveTintColor: "#25B8CB",
      tabBarShowLabel : false,
      
    }}>
      <Tab.Screen name="Home" 
      options={{
    tabBarIcon : ({focused}) => (
     

        <MaterialCommunityIcons style={{
        tintColor : focused ? colors.themeColor : colors.secondaryColor
        }} name={
              focused ? 'home' : 'home-outline'
            
        } size={28} color={focused ? colors.themeColor : colors.secondaryColor} />

    )
      }} 
      
        

       component={Home} />
      <Tab.Screen name="Inbox" options={{
    tabBarIcon : ({focused}) => (
     

        <Ionicons style={{
        tintColor : focused ? colors.themeColor : colors.secondaryColor
        }} name={
              focused ? 'chatbubble' : 'chatbubble-outline'
            
        } size={24} color={focused ? colors.themeColor : colors.secondaryColor} />

    )
      }} component={Inbox} />
      <Tab.Screen name="Likes" options={{
    tabBarIcon : ({focused}) => (
     

        <AntDesign style={{
        tintColor : focused ? colors.themeColor : colors.secondaryColor
        }} name={
           focused ? 'heart' : 'hearto'
            
        } size={24} color={focused ? colors.themeColor : colors.secondaryColor} />

    )
      }} component={Likes} />
      <Tab.Screen name="Notification" options={{
    tabBarIcon : ({focused}) => (
     

        <MaterialCommunityIcons name={
        focused ? 'bell' : 'bell-outline'
            
        } size={24} color={focused ? colors.themeColor : colors.secondaryColor} />

    )
      }} component={Notification} />
        
      <Tab.Screen options={{
    tabBarIcon : ({focused}) => (
     

        <Ionicons style={{
        tintColor : focused ? colors.themeColor : colors.secondaryColor
        }} name={
              focused ? 'person' : 'person-outline'
            
        } size={24} color={focused ? colors.themeColor : colors.secondaryColor} />

    )
      }} name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

function AuthenticatedDrawer() {
  return (
    <Drawer.Navigator initialRouteName="MainTabs">
      <Drawer.Screen name="MainTabs" component={AuthenticatedTabs} options={{ title: 'Home' }} />
      <Drawer.Screen name="Settings" component={Settings} />
      <Drawer.Screen name="FAQ" component={FAQ} />
      <Drawer.Screen name="Support" component={Support} />
    </Drawer.Navigator>
  );
}

export const Navigator = () => {
//   const { isAuthenticated } = useSelector(state => state.auth);
const isAuthenticated = false;

  if (!isAuthenticated) {
  return  <Stack.Navigator screenOptions={{ 
headerShown: false


}} initialRouteName="Splash">
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="EnterPhone" component={EnterPhone} />
      <Stack.Screen name="VerifyOtp" component={VerifyOtp} />
      <Stack.Screen name="SignupDetails" component={SignUpDetails} />
      <Stack.Screen name="ProfileSetup" component={ProfileSetup} />
      <Stack.Screen name="SelectGender" component={SelectGender} />
      <Stack.Screen name="YourInterests" component={YourInterests} />
      <Stack.Screen name="Introduction" component={Introduction} />
      
      </Stack.Navigator>
    // Stack.Navigator for unauthenticated users remains the same
  } else {
    return <AuthenticatedDrawer />;
  }
}
