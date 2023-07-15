import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import AppReactNavigation from '../AppReactNavigation';
import renderer from 'react-test-renderer';

jest.mock('@react-navigation/native', () => {
  const actualNavigation = jest.requireActual('@react-navigation/native');
  return {
    ...actualNavigation,
    useNavigation: jest.fn().mockReturnValue({
      navigate: jest.fn(),
    }),
  };
});

describe('AppReactNavigation', () => {
  it('renders HomeScreen correctly', () => {
    const { getByText, getByPlaceholderText, getByTestId } = render(<AppReactNavigation />);
    const homeImage = getByTestId('home-image');
    const homeTextInput = getByPlaceholderText('Enter your name');
    const homeFlatList = getByTestId('home-flatlist');
    expect(homeImage).toBeTruthy();
    expect(homeTextInput).toBeTruthy();
    expect(homeFlatList).toBeTruthy();
    expect(getByText('John Doe')).toBeTruthy();
    expect(getByText('Jane Smith')).toBeTruthy();
    expect(getByText('Bob Johnson')).toBeTruthy();
  });

  it('renders ProfileScreen correctly', () => {
    const { getByText, getByPlaceholderText, getByTestId } = render(<AppReactNavigation />);
    const profileTab = getByText('Profile');
    fireEvent(profileTab, 'press');
    const profileImage = getByTestId('profile-image');
    const profileTextInput = getByPlaceholderText('Enter your email');
    const profileFlatList = getByTestId('profile-flatlist');
    expect(profileImage).toBeTruthy();
    expect(profileTextInput).toBeTruthy();
    expect(profileFlatList).toBeTruthy();
    expect(getByText('john@example.com')).toBeTruthy();
    expect(getByText('jane@example.com')).toBeTruthy();
    expect(getByText('bob@example.com')).toBeTruthy();
  });

  it('renders SettingsScreen correctly', () => {
    const { getByText, getByPlaceholderText, getByTestId } = render(<AppReactNavigation />);
    const settingsTab = getByText('Settings');
    fireEvent(settingsTab, 'press');
    const settingsImage = getByTestId('settings-image');
    const settingsTextInput = getByPlaceholderText('Enter your username');
    const settingsFlatList = getByTestId('settings-flatlist');
    expect(settingsImage).toBeTruthy();
    expect(settingsTextInput).toBeTruthy();
    expect(settingsFlatList).toBeTruthy();
    expect(getByText('johndoe')).toBeTruthy();
    expect(getByText('janesmith')).toBeTruthy();
    expect(getByText('bobjohnson')).toBeTruthy();
  });

  it('renders home FlatList items correctly', () => {
    const { getByTestId } = render(<AppReactNavigation />)
    const homeFlatList = getByTestId('home-flatlist');
    expect(homeFlatList.props.data.length).toBe(3);
    expect(homeFlatList.props.data[0].name).toBe('John Doe');
    expect(homeFlatList.props.data[1].name).toBe('Jane Smith');
    expect(homeFlatList.props.data[2].name).toBe('Bob Johnson');
  });

  it('renders profile FlatList items correctly', () => {
    const { getByTestId, getByText } = render(<AppReactNavigation />)
    const profileTab = getByText('Profile');
    fireEvent(profileTab, 'press');
    const profileFlatList = getByTestId('profile-flatlist');
    expect(profileFlatList.props.data[0].email).toBe('john@example.com');
    expect(profileFlatList.props.data[1].email).toBe('jane@example.com');
    expect(profileFlatList.props.data[2].email).toBe('bob@example.com');
  });

  it('renders settings FlatList items correctly', () => {
    const { getByTestId, getByText } = render(<AppReactNavigation />)
    const settingsTab = getByText('Settings');
    fireEvent(settingsTab, 'press');
    const settingsFlatList = getByTestId('settings-flatlist');
    expect(settingsFlatList.props.data[0].username).toBe('johndoe');
    expect(settingsFlatList.props.data[1].username).toBe('janesmith');
    expect(settingsFlatList.props.data[2].username).toBe('bobjohnson');
  });

  it('renders correctly', () => {
    const tree = renderer.create(<AppReactNavigation />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
