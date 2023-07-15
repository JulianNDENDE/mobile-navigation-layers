import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import renderer from 'react-test-renderer';

import AppReactNativePaper from '../AppReactNativePaper';

describe('AppReactNativePaper', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<AppReactNativePaper />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  // it('renders HomeScreen correctly', () => {
  //   const { getByTestId, getByPlaceholderText, getAllByText } = render(
  //       <AppReactNativePaper />
  //   );

  //   const homeImage = getByTestId('home-image');
  //   const homeTextInput = getByPlaceholderText('Enter your name');
  //   const homeFlatList = getByTestId('home-flatlist');

  //   expect(homeImage).toBeTruthy();
  //   expect(homeTextInput).toBeTruthy();
  //   expect(homeFlatList).toBeTruthy();
  //   expect(getAllByText('John Doe')).toBeTruthy();
  //   expect(getAllByText('Jane Smith')).toBeTruthy();
  //   expect(getAllByText('Bob Johnson')).toBeTruthy();
  // });

//   it('renders ProfileScreen correctly', () => {
//     const { getByText, getByPlaceholderText, getAllByText } = render(<AppReactNativePaper />);
//     const profileTab = getByText('Profile');
//     fireEvent.press(profileTab);
//     const profileImage = getByTestId('profile-image');
//     const profileTextInput = getByPlaceholderText('Enter your email');
//     const profileFlatList = getByTestId('profile-flatlist');
//     expect(profileImage).toBeTruthy();
//     expect(profileTextInput).toBeTruthy();
//     expect(profileFlatList).toBeTruthy();
//     expect(getAllByText('john@example.com')).toBeTruthy();
//     expect(getAllByText('jane@example.com')).toBeTruthy();
//     expect(getAllByText('bob@example.com')).toBeTruthy();
//   });

//   it('renders SettingsScreen correctly', () => {
//     const { getByText, getByPlaceholderText, getAllByText } = render(<AppReactNativePaper />);
//     const settingsTab = getByText('Settings');
//     fireEvent.press(settingsTab);
//     const settingsImage = getByTestId('settings-image');
//     const settingsTextInput = getByPlaceholderText('Enter your username');
//     const settingsFlatList = getByTestId('settings-flatlist');
//     expect(settingsImage).toBeTruthy();
//     expect(settingsTextInput).toBeTruthy();
//     expect(settingsFlatList).toBeTruthy();
//     expect(getAllByText('johndoe')).toBeTruthy();
//     expect(getAllByText('janesmith')).toBeTruthy();
//     expect(getAllByText('bobjohnson')).toBeTruthy();
//   });

//   it('renders home FlatList items correctly', () => {
//     const { getByTestId, getAllByText } = render(<AppReactNativePaper />);
//     const homeFlatList = getByTestId('home-flatlist');
//     expect(homeFlatList.props.data.length).toBe(3);
//     expect(homeFlatList.props.data[0].name).toBe('John Doe');
//     expect(homeFlatList.props.data[1].name).toBe('Jane Smith');
//     expect(homeFlatList.props.data[2].name).toBe('Bob Johnson');
//     expect(getAllByText('John Doe')).toBeTruthy();
//     expect(getAllByText('Jane Smith')).toBeTruthy();
//     expect(getAllByText('Bob Johnson')).toBeTruthy();
//   });

//   it('renders profile FlatList items correctly', () => {
//     const { getByTestId, getAllByText } = render(<AppReactNativePaper />);
//     const profileTab = getByText('Profile');
//     fireEvent.press(profileTab);
//     const profileFlatList = getByTestId('profile-flatlist');
//     expect(profileFlatList.props.data[0].email).toBe('john@example.com');
//     expect(profileFlatList.props.data[1].email).toBe('jane@example.com');
//     expect(profileFlatList.props.data[2].email).toBe('bob@example.com');
//     expect(getAllByText('john@example.com')).toBeTruthy();
//     expect(getAllByText('jane@example.com')).toBeTruthy();
//     expect(getAllByText('bob@example.com')).toBeTruthy();
//   });

//   it('renders settings FlatList items correctly', () => {
//     const { getByTestId, getAllByText } = render(<AppReactNativePaper />);
//     const settingsTab = getByText('Settings');
//     fireEvent.press(settingsTab);
//     const settingsFlatList = getByTestId('settings-flatlist');
//     expect(settingsFlatList.props.data[0].username).toBe('johndoe');
//     expect(settingsFlatList.props.data[1].username).toBe('janesmith');
//     expect(settingsFlatList.props.data[2].username).toBe('bobjohnson');
//     expect(getAllByText('johndoe')).toBeTruthy();
//     expect(getAllByText('janesmith')).toBeTruthy();
//     expect(getAllByText('bobjohnson')).toBeTruthy();
//   });
});
