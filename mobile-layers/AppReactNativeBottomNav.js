import React from 'react';
import { View, Text, Image, TextInput, FlatList, StyleSheet } from 'react-native';
import BottomNavigationBar from 'react-native-bottom-navigation-bar';

const HomeScreen = () => (
  <View style={styles.tabContent}>
    <Image source={require('./assets/images/home.png')} style={styles.image} />
    <TextInput placeholder="Enter your name" style={styles.input} />
    <FlatList
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
    <Image source={require('./assets/images/profile.png')} style={styles.image} />
    <TextInput placeholder="Enter your email" style={styles.input} />
    <FlatList
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
    <Image source={require('./assets/images/settings.png')} style={styles.image} />
    <TextInput placeholder="Enter your username" style={styles.input} />
    <FlatList
      data={[
        { key: '1', username: 'johndoe' },
        { key: '2', username: 'janesmith' },
        { key: '3', username: 'bobjohnson' },
      ]}
      renderItem={({ item }) => <Text>{item.username}</Text>}
    />
  </View>
);

export default function AppReactNativeBottomNav() {
  const tabs = [
    {
      text: 'Home',
      icon: require('./assets/images/home.png'),
      component: HomeScreen,
    },
    {
      text: 'Profile',
      icon: require('./assets/images/profile.png'),
      component: ProfileScreen,
    },
    {
      text: 'Settings',
      icon: require('./assets/images/settings.png'),
      component: SettingsScreen,
    },
  ];

  const handleTabPress = (newTabIndex) => {
    console.log(`Tab ${newTabIndex} is pressed.`);
    setActiveTab(newTabIndex);
  };


  return (
    <View style={styles.container}>
      <BottomNavigationBar
        tabs={tabs}
        activeTab={0}
        onTabPress={handleTabPress}
        style={styles.tabBar}
        barColor="#fff"
        activeTextColor="#6200ee"
        inactiveTextColor="#757575"
      />
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
