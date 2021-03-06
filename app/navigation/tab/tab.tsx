import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RN } from '../../components/react-native';

import { icons, COLORS, FONTS } from '../../constants/';

// Screens
import { TVScreen, BizFmScreen, NewsScreen2, ProgroomsScreen, DotsScreen } from '../../screens/';

const Tab = createBottomTabNavigator();


function Vedios() {
  return (
    <RN.View style={{ flex: 1, backgroundColor: COLORS.white }}>
      <ProgroomsScreen marginBottom={true} />
    </RN.View>
  );
}


const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="tv"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          const tintColor = focused ? COLORS.red : COLORS.lightBlack;
          switch (route.name) {
            case 'tv':
              return (
                <RN.View style={{ paddingTop: 4 }}>
                  <RN.Image
                    source={icons.tabbar.tv}
                    style={{ width: 23, height: 21, tintColor }}
                  />
                </RN.View>
              );
            case 'radio':
              return (
                <RN.View style={{ paddingTop: 4 }}>
                  <RN.Image
                    source={icons.tabbar.radio}
                    style={{ width: 23, height: 21, tintColor }}
                  />
                </RN.View>
              );
            case 'news':
              return (
                <RN.View style={{ paddingTop: 4 }}>
                  <RN.Image
                    source={icons.tabbar.news}
                    style={{ width: 23, height: 21, tintColor }}
                  />
                </RN.View>
              );
            case 'vedios':
              return (
                <RN.View style={{ paddingTop: 4 }}>
                  <RN.Image
                    source={icons.tabbar.vedio}
                    style={{ width: 23, height: 21, tintColor }}
                  />
                </RN.View>
              );
            case 'dots':
              return (
                <RN.View style={{ paddingTop: 4 }}>
                  <RN.Image
                    source={icons.tabbar.dots}
                    style={{ width: 23, height: 21, tintColor }}
                    resizeMode={'contain'}
                  />
                </RN.View>
              );
          }
        },
        tabBarActiveTintColor: COLORS.red,
        headerShown: false,
        tabBarLabelStyle: {
          ...FONTS.body4,
          paddingVertical: 5,
        },
        tabBarStyle: {
          backgroundColor: COLORS.white,
        },
      })}>
      <Tab.Screen
        name="tv"
        component={TVScreen}
        options={{ tabBarLabel: 'Tv' }}
      />
      <Tab.Screen
        name="radio"
        component={BizFmScreen}
        options={{ tabBarLabel: 'Biz fm' }}
      />
      <Tab.Screen
        name="news"
        component={NewsScreen2}
        options={{ tabBarLabel: 'Yangiliklar' }}
      />
      <Tab.Screen
        name="vedios"
        component={Vedios}
        options={{ tabBarLabel: "Ko'rsatuvlar" }}
      />
      <Tab.Screen
        name="dots"
        component={DotsScreen}
        options={{ tabBarLabel: 'Boshqa' }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
