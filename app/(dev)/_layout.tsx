import CustomHeader from "@/components/customheader";
import CustomTabIcon from "@/components/customtabicon";
import { Tabs } from "expo-router";
import { GestureResponderEvent, TouchableOpacity } from "react-native";
export default function DevLayout() {
  return (
    <Tabs
        tabBar={(props) => <customTabBar {...props}/>}
      // screenOptions={{
      //   tabBarActiveTintColor: "white",
      //   tabBarInactiveTintColor: "white",
      //   tabBarInactiveBackgroundColor: "#A05729",
      //   tabBarActiveBackgroundColor: "#A05729",
      //   tabBarStyle: {
      //     height: 110,
      //     backgroundColor: "white",
      //   },
      //   tabBarLabelStyle: {
      //     fontSize: 15,
      //   },
      //   tabBarButton: ({ onPress, style, children }) => (
      //     <TouchableOpacity
      //       onPress={onPress as (event: GestureResponderEvent) => void}
      //       style={[style, { animationDelay: 0 }]}
      //     >
      //       {children}
      //     </TouchableOpacity>
      //   ),
      // }}
    >
      <Tabs.Screen
        name="calculator"
        options={{
          title: "Calculator",
          // headerTitleAlign: "center",
          header: () => <CustomHeader color="#A05729" title="Calculator" />,
          // headerTitleStyle: { fontWeight: "bold", fontSize: 25 },
          tabBarLabel: "Calc",
          tabBarIcon: ({ color, focused }) => (
            <CustomTabIcon
              color={color}
              focused={focused}
              iconName="calculator"
            />
          ),
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="weather"
        options={{
          title: "Weather",
          headerTitleAlign: "center",
          headerTitleStyle: { fontWeight: "bold", fontSize: 25 },
          tabBarIcon: ({ color, focused }) => (
            <CustomTabIcon color={color} focused={focused} iconName="cloud" />
          ),
        }}
      ></Tabs.Screen>
    </Tabs>
  );
}
