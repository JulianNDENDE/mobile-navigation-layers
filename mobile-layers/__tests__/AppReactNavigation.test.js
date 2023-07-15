import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import AppReactNavigation from '../AppReactNavigation';
import renderer from 'react-test-renderer';

describe('AppReactNavigation', () => {
  it('renders HomeScreen correctly', () => {
    const { getByText, getByPlaceholderText, getByTestId } = render(<AppReactNavigation />);
    const homeImage = getByTestId('home-image');
    const homeTextInput = getByPlaceholderText('Enter your name');
    const homeFlatList = getByTestId('home-flatlist'); // Update to 'home-flat-list'
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
    fireEvent.press(profileTab);
    const profileImage = getByTestId('profile-image');
    const profileTextInput = getByPlaceholderText('Enter your email');
    const profileFlatList = getByTestId('profile-flatlist'); // Update to 'profile-flat-list'
    expect(profileImage).toBeTruthy();
    expect(profileTextInput).toBeTruthy();
    expect(profileFlatList).toBeTruthy();
    expect(getByText('John Smith')).toBeTruthy();
    expect(getByText('Jane Doe')).toBeTruthy();
    expect(getByText('Bob Williams')).toBeTruthy();
  });

  it('updates TextInput value correctly', () => {
    const { getByPlaceholderText } = render(<AppReactNavigation />);
    const homeTextInput = getByPlaceholderText('Enter your name');
    fireEvent.changeText(homeTextInput, 'John');
    expect(homeTextInput.props.value).toBe('John');
  });

  it('renders FlatList items correctly', () => {
    const { getByText } = render(<AppReactNavigation />);
    expect(getByText('John Doe')).toBeTruthy();
    expect(getByText('Jane Smith')).toBeTruthy();
    expect(getByText('Bob Johnson')).toBeTruthy();
  });

  it('renders correctly', () => {
    const tree = renderer.create(<AppReactNavigation />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
