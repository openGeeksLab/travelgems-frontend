import React from 'react';
import {
  TouchableOpacity,
  Animated,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import HTMLView from 'react-native-htmlview';
import {
  compose,
  withState,
  withHandlers,
  withProps,
  lifecycle,
} from 'recompose';

const MIN_HEIGHT = 50;
const enhancer = compose(
  withProps({
    animation: new Animated.Value(0),
  }),
  withState('maxHeight', 'setMaxHeight', 0),
  withState('expanded', 'setExpanded', false),

  withHandlers({
    toggle: ({ setExpanded, animation, expanded, maxHeight }) => () => {
      const initialValue = expanded ? maxHeight : MIN_HEIGHT;
      const finalValue = expanded ? MIN_HEIGHT : maxHeight;
      setExpanded(!expanded);

      animation.setValue(initialValue);
      Animated.spring(animation, {
        toValue: finalValue,
      }).start();
    },

    setMax: ({ setMaxHeight }) => event => {
      setMaxHeight(event.nativeEvent.layout.height);
    },
  }),
  lifecycle({
    componentDidMount() {
      Animated.spring(this.props.animation, {
        toValue: MIN_HEIGHT,
      }).start();
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
    paddingTop: 5,
  },
  title: {
    flex: 1,
    color: '#A1A1A1',
    fontWeight: 'normal',
  },
  moreText: {
    color: '#46DFE8',
    fontWeight: 'normal',
    fontSize: 14,
    marginRight: 5,
  },
  icon: {
    color: '#46DFE8',
    fontWeight: 'normal',
    fontSize: 20,
  },
  button: { flexDirection: 'row', flex: 1 },
});

const ModalScene = ({
  expanded,
  setMin,
  setMax,
  toggle,
  description,
  title,
  animation,
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
        <Text style={styles.moreText}> {!expanded ? 'More' : 'Less'} </Text>
        <Icon
          style={styles.icon}
          name={expanded ? 'chevron-small-up' : 'chevron-small-down'}
        />
      </TouchableOpacity>
    </View>
  </View>
);

export default enhancer(ModalScene);
