import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";

function HomeScreen() {
  return (
    <View style={styles.home}>
      <Text style={styles.Text}>Tela inicial</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={styles.settings}>
      <Text style={styles.Text}>Configurações</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "#F44336",
          tabBarInactiveTintColor: "#303F9F",
          tabBarActiveBackgroundColor: "#BBDEFB",
          tabBarInactiveBackgroundColor: "#BBDEFB",
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: () => <Icon name="home" size={25} color="green" />,
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarIcon: () => <Icon name="settings" size={25} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  home: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1976D2",
  },

  settings: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1976D2",
  },

  Text: {
    color: "#ffffff",
  },
});
