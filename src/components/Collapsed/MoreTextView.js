import React from 'react';
import { TouchableOpacity, Animated, View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import HTMLView from 'react-native-htmlview';
import { compose, withState, withHandlers, withProps } from 'recompose';

const enhancer = compose(
  withProps({
    animation: new Animated.Value(),
  }),
  withState('maxHeight', 'setMaxHeight', 0),
  withState('minHeight', 'setMinHeight', 0),
  withState('expanded', 'setExpanded', false),

  withHandlers({
    toggle: ({
      setExpanded, animation, expanded, maxHeight, minHeight,
    }) => () => {
      const initialValue = expanded ? maxHeight : minHeight;
      const finalValue = expanded ? minHeight : maxHeight;
      setExpanded(!expanded);

      animation.setValue(initialValue);
      Animated.spring(animation, {
        toValue: finalValue,
      }).start();
    },

    setMax: ({ setMaxHeight, setMinHeight }) => (event) => {
      setMinHeight(50);
      setMaxHeight(event.nativeEvent.layout.height);
    },
  }),
);
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    overflow: 'hidden',
    marginTop: 10,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: 'transparent',
  },
  title: {
    flex: 1,
    color: '#A1A1A1',
    fontWeight: 'normal',
  },
  moreText: {
    flex: 1,
    color: '#46DFE8',
    fontWeight: 'normal',
    fontSize: 14,
    marginRight: 5,
  },
  button: { flexDirection: 'row', flex: 1 },
});

const ModalScene = ({
  expanded, setMin, setMax, toggle, description, title, animation,
}) => (
  <View>
    <Animated.View
      style={[
        styles.container,
        {
          height: animation,
        },
      ]}
    >
      <View style={{ paddingBottom: 5 }} onLayout={setMax}>
        <HTMLView value={description} />
      </View>
    </Animated.View>
    <View style={styles.titleContainer}>
      <TouchableOpacity style={styles.button} onPress={toggle}>
        <Text style={styles.moreText}> {expanded ? 'More' : 'Less'} </Text>
        <Icon name={expanded ? 'arrow-up' : 'arrow-down'} />
      </TouchableOpacity>
    </View>
  </View>
);

export default enhancer(ModalScene);
