import React, { useState, useRef, useEffect } from 'react';
import { Animated, ViewPropTypes, Easing } from 'react-native';
import Svg, { Circle, Path } from 'react-native-svg';
import { GREY90 } from 'styles';

const AnimatedPath = Animated.createAnimatedComponent(Path);

const ActivityIndicator = ({ style }) => {
  const value = useRef(new Animated.Value(0)).current;

  const [startAngle, setStartAngle] = useState(Math.PI * 0.5);
  const [endAngle, setEndAngle] = useState(Math.PI);

  useEffect(() => {
    let cancel = false;
    const next = () => {
      if (cancel) {
        return;
      }

      Animated.timing(value, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: false,
      }).start(() => {
        value.setValue(0);
        next();
      });
    };
    next();
    return () => (cancel = true);
  }, []);

  useEffect(() => {
    const listener = value.addListener(({ value }) => {
      setStartAngle(Math.PI * 0.5 + 2 * Math.PI * value);
      setEndAngle(Math.PI + 2 * Math.PI * value);
    });
    return () => value.removeListener(listener);
  }, []);

  const width = 30;
  const height = 30;

  const radius = width / 2;
  const cx = (width + 2) / 2;
  const cy = (width + 2) / 2;

  const startX = cx - radius * Math.cos(startAngle);
  const startY = -radius * Math.sin(startAngle) + cy;
  const endX = cx - radius * Math.cos(endAngle);
  const endY = -radius * Math.sin(endAngle) + cy;

  const d = `M ${startX} ${startY} A ${radius} ${radius} 0 0 1 ${endX} ${endY}`;

  return (
    <Svg width={width + 2} height={height + 2} style={style}>
      <Circle
        cx={(width + 2) / 2}
        cy={(width + 2) / 2}
        r={radius}
        stroke={GREY90}
        strokeWidth={1}
        opacity={0.4}
      />
      <Path d={d} strokeWidth={1} stroke={GREY90} />
    </Svg>
  );
};

ActivityIndicator.propTypes = {
  style: ViewPropTypes.style,
};

export { ActivityIndicator };
