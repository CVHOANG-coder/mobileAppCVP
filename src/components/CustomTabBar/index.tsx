import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { lightTheme } from '@src/utils/globalStyles';
import {
  Dimensions,
  StyleSheet,
  // Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
const { width } = Dimensions.get('window');
const WIDTH_TAB_ITEM = width * 0.2;
const MARGIN_INDICATE = width * 0.025;
function CustomTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const { bottom } = useSafeAreaInsets();

  return (
    <View style={styles.tabBarContainer}>
      <View style={styles.tabBar}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          // const label = options.title || route.name;

          const isFocused = state.index === index;
          const icon =
            typeof options.tabBarIcon === 'function'
              ? options.tabBarIcon({
                  color: isFocused
                    ? lightTheme.Colors.primary
                    : lightTheme.Colors.text,
                  focused: isFocused,
                  size: 28,
                })
              : null;

          const onPress = () => {
            if (!isFocused) {
              navigation.navigate(route.name);
            }
          };

          return (
            <TouchableOpacity
              key={route.key}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              onPress={onPress}
              style={[styles.tabItem, { paddingBottom: bottom }]}
              activeOpacity={0.8}
            >
              <View style={styles.iconWrapper}>{icon}</View>
              {/* <Text
                style={[styles.tabLabel, isFocused && styles.tabLabelActive]}
              >
                {label}
              </Text> */}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}
export default CustomTabBar;
const styles = StyleSheet.create({
  tabBarContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowOffset: { width: 0, height: -2 },
    shadowRadius: 8,
    elevation: 10,
    paddingHorizontal: 16,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  tabBar: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  tabItem: {
    width: WIDTH_TAB_ITEM,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
  },

  tabLabel: {
    fontSize: 14,
    color: lightTheme.Colors.inactive,
    marginTop: 2,
    fontWeight: '400',
    fontFamily: 'Quicksand',
  },
  tabLabelActive: {
    color: lightTheme.Colors.primary,
    fontWeight: '700',
  },
  animatedIndicate: {
    backgroundColor: lightTheme.Colors.primary,
    width: width * 0.15,
    marginHorizontal: MARGIN_INDICATE,
    height: 4,
    borderRadius: 90,
  },
});
