import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, Image, TextInput, FlatList, StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();

const HomeScreen = () => (
  <View style={styles.tabContent}>
    <Image
      testID='home-image'
      source={require('./assets/images/home.png')}
      style={styles.image}
    />
    <TextInput placeholder="Enter your name" style={styles.input} />
    <FlatList
      testID='home-flatlist'
      data={[
        { key: '1', name: 'John Doe' },
        { key: '2', name: 'Jane Smith' },
        { key: '3', name: 'Bob Johnson' },
      ]}
      renderItem={({ item }) => <Text>{item.name}</Text>}
    />
  </View>
);

const ProfileScreen = () => (
  <View style={styles.tabContent}>
    <Image
      testID='profile-image'
      source={require('./assets/images/profile.png')}
      style={styles.image}
    />
    <TextInput placeholder="Enter your email" style={styles.input} />
    <FlatList
      testID='profile-flatlist'
      data={[
        { key: '1', email: 'john@example.com' },
        { key: '2', email: 'jane@example.com' },
        { key: '3', email: 'bob@example.com' },
      ]}
      renderItem={({ item }) => <Text>{item.email}</Text>}
    />
  </View>
);

const SettingsScreen = () => (
  <View style={styles.tabContent}>
    <Image
      source={require('./assets/images/profile.png')}
      style={styles.image}
      testID="settings-image"
    />
    <TextInput placeholder="Enter your username" style={styles.input} />
    <FlatList
      testID='settings-flatlist'
      data={[
        { key: '1', username: 'johndoe' },
        { key: '2', username: 'janesmith' },
        { key: '3', username: 'bobjohnson' },
      ]}
      renderItem={({ item }) => <Text>{item.username}</Text>}
    />
  </View>
);

export default function AppReactNavigation() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            style: styles.tabBar,
            tabStyle: styles.tab,
            labelStyle: styles.tabLabel,
          }}
        >
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarIcon: ({ color }) => (
                <Image source={require('./assets/images/home.png')} style={[styles.tabIcon, { tintColor: color }]} />
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              tabBarIcon: ({ color }) => (
                <Image source={require('./assets/images/profile.png')} style={[styles.tabIcon, { tintColor: color }]} />
              ),
            }}
          />
          <Tab.Screen
            name="Settings"
            component={SettingsScreen}
            options={{
              tabBarIcon: ({ color }) => (
                <Image source={require('./assets/images/settings.png')} style={[styles.tabIcon, { tintColor: color }]} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  tabBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    backgroundColor: '#fff',
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabLabel: {
    fontSize: 12,
  },
  tabIcon: {
    width: 20,
    height: 20,
  },
  tabContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    margin: 10,
    width: 200,
  },
});
