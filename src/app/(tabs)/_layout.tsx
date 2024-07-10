import { Tabs } from 'expo-router';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';


export default function TabsLayout() {
    return (
        <Tabs screenOptions={{ tabBarActiveTintColor: 'black' }}>
            <Tabs.Screen
                name="index"
                options={{
                    headerTitle: 'For you',
                    headerTitleAlign: 'center',
                    tabBarShowLabel: false,
                    tabBarIcon: ({ color }) => <Entypo name="home" size={26} color={color} />,
                }}
            />
            <Tabs.Screen
                name="honey"
                options={{
                    headerTitle: 'Create post',
                    headerTitleAlign: 'center',
                    tabBarShowLabel: false,
                    tabBarIcon: ({ color }) => <AntDesign name="pluscircleo" size={26} color={color} />,
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    headerTitle: 'Profile',
                    headerTitleAlign: 'center',
                    tabBarShowLabel: false,
                    tabBarIcon: ({ color }) => <AntDesign name="user" size={26} color={color} />, // Changed icon for profile
                }}
            />
        </Tabs>
    );
}
