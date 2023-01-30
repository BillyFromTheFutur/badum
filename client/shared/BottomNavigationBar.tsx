import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Foundation, Feather, Ionicons} from '@expo/vector-icons';

function BottomNavigationTabBar({
  state,
  descriptors,
  navigation,
}: any): JSX.Element {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        height: 45,
        backgroundColor: '#000',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
        borderBottomLeftRadius: 8,
        width: '95%',
        marginLeft: '2.5%',
        marginBottom: 10,
      }}>
      {state.routes.map(
        (route: {key: string | number; name: any}, index: any) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;
          console.log(label);
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              // !event.defaultPrevented
              // The `merge: true` option makes sure that the params inside the tab screen are preserved
              navigation.navigate({name: route.name, merge: true});
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              touchSoundDisabled={true}
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Feather
                name="home"
                size={isFocused ? 24 : 22}
                color={isFocused ? 'white' : 'grey'}
              />
            </TouchableOpacity>
          );
        },
      )}
    </View>
  );
}
export default BottomNavigationTabBar;
/*
  * <Text
  style={{
    color: isFocused ? '#673ab7' : 'white',
    textAlign: 'center',
  }}>
  {label}
</Text>
*/
