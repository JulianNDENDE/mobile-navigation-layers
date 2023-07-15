import React from 'react';
import { View, Text, Image, TextInput, FlatList, StyleSheet } from 'react-native';
import { BottomNavigation } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const HomeScreen = () => (
  <View testID="home-screen" style={styles.tabContent}>
    <Image testID="home-image" source={require('./assets/images/home.png')} style={styles.image} />
    <TextInput testID="home-input" placeholder="Enter your name" style={styles.input} />
    <FlatList
      testID="home-flatlist"
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
  <View testID="profile-screen" style={styles.tabContent}>
    <Image testID="profile-image" source={require('./assets/images/profile.png')} style={styles.image} />
    <TextInput testID="profile-input" placeholder="Enter your email" style={styles.input} />
    <FlatList
      testID="profile-flatlist"
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
  <View testID="settings-screen" style={styles.tabContent}>
    <Image testID="settings-image" source={require('./assets/images/settings.png')} style={styles.image} />
    <TextInput testID="settings-input" placeholder="Enter your username" style={styles.input} />
    <FlatList
      testID="settings-flatlist"
      data={[
        { key: '1', username: 'johndoe' },
        { key: '2', username: 'janesmith' },
        { key: '3', username: 'bobjohnson' },
      ]}
      renderItem={({ item }) => <Text>{item.username}</Text>}
    />
  </View>
);

export default function AppReactNativePaper() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Home', icon: 'home' },
    { key: 'profile', title: 'Profile', icon: 'account' },
    { key: 'settings', title: 'Settings', icon: 'settings' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeScreen,
    profile: ProfileScreen,
    settings: SettingsScreen,
  });

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <BottomNavigation
          navigationState={{ index, routes }}
          onIndexChange={setIndex}
          renderScene={renderScene}
          shifting={true}
          barStyle={styles.tabBar}
          activeColor="#6200ee"
          inactiveColor="#757575"
          renderIcon={({ route, color }) => (
            <Image
              source={
                route.key === 'home' ? require('./assets/images/home.png')
                  : route.key === 'profile' ? require('./assets/images/profile.png')
                    : require('./assets/images/settings.png')
              }
              style={[styles.icon, { tintColor: color }]}
            />
          )}
        />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 50,
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
  icon: {
    width: 25,
    height: 25,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    margin: 10,
    width: 200,
  },
});
