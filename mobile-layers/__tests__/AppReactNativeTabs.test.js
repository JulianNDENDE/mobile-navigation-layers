import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import renderer from 'react-test-renderer';

import AppReactNativeTabs from '../AppReactNativeTabs';

describe('AppReactNativeTabs', () => {
  it('renders HomeScreen correctly', async () => {
    const { getByText } = render(<AppReactNativeTabs />);
    await waitFor(() => {
      expect(getByText('Home!')).toBeTruthy();
    });
  });

  it('renders SettingsScreen correctly', async () => {
    const { getByText } = render(<AppReactNativeTabs />);

    const settingsTab = getByText('Settings');
    fireEvent.press(settingsTab);

    await waitFor(() => {
      expect(getByText('Settings!')).toBeTruthy();
    });
  });

  it('renders correctly', () => {
    const tree = renderer.create(<AppReactNativeTabs />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
