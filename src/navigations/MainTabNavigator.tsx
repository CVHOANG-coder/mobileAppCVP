/* eslint-disable react/no-unstable-nested-components */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeScreen from '@src/screens/HomeScreen';
import HomeIcon from '@src/assets/imageSvg/bottomTab/home.svg';
import ScoreIcon from '@src/assets/imageSvg/bottomTab/score.svg';
import ActivityIcon from '@src/assets/imageSvg/bottomTab/activity.svg';
import CalendarIcon from '@src/assets/imageSvg/bottomTab/calendar.svg';
import ProfileIcon from '@src/assets/imageSvg/bottomTab/profile.svg';
import CustomTabBar from '@src/components/CustomTabBar';
import { lightTheme } from '@src/utils/globalStyles';
import CalendarScreen from '@src/screens/CalendarScreen';
import ScoreScreen from '@src/screens/ScoreScreen';
import ProfileScreen from '@src/screens/ProfileScreen';
import ActivityScreen from '@src/screens/ActivityScreen';
// import ListCourseScreen from '@src/screens/Courses/ListCourseScreen';
export type TBottomTabParamList = {
  HOME: undefined;
  CALENDAR: undefined;
  ACTIVITY: undefined;
  SCORE: undefined;
  PROFILE: undefined;
};
const BottomTab = createBottomTabNavigator<TBottomTabParamList>();

const MainTabNavigator = () => {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
        // tabBarStyle: {
        //   backgroundColor: 'white',
        // },
        sceneStyle: {
          backgroundColor: 'white',
        },
      }}
      tabBar={props => <CustomTabBar {...props} />}
    >
      <BottomTab.Screen
        name="HOME"
        component={HomeScreen}
        options={{
          title: 'Trang chủ',
          tabBarIcon: ({ focused }) => (
            <HomeIcon
              width={24}
              height={24}
              color={
                focused ? lightTheme.Colors.primary : lightTheme.Colors.inactive
              }
            />
          ),
        }}
      />

      <BottomTab.Screen
        name="CALENDAR"
        component={CalendarScreen}
        options={{
          title: 'Calendar',
          tabBarIcon: ({ focused }) => (
            <CalendarIcon
              height={24}
              width={24}
              color={
                focused ? lightTheme.Colors.primary : lightTheme.Colors.inactive
              }
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="SCORE"
        component={ScoreScreen}
        options={{
          title: 'Điểm số',
          tabBarIcon: ({ focused }) => (
            <ScoreIcon
              width={24}
              height={24}
              color={
                focused ? lightTheme.Colors.primary : lightTheme.Colors.inactive
              }
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="ACTIVITY"
        component={ActivityScreen}
        options={{
          title: 'Hoạt động',
          tabBarIcon: ({ focused }) => (
            <ActivityIcon
              width={24}
              height={24}
              color={
                focused ? lightTheme.Colors.primary : lightTheme.Colors.inactive
              }
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="PROFILE"
        component={ProfileScreen}
        options={{
          title: 'Tài khoản',
          tabBarIcon: ({ focused }) => (
            <ProfileIcon
              width={24}
              height={24}
              color={
                focused ? lightTheme.Colors.primary : lightTheme.Colors.inactive
              }
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default MainTabNavigator;
