import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import Wave from "react-native-waves"

const BlueWave = (props) => {
  const [waveStyle, setWaveStyle] = useState(0);

  useEffect(() => {
    const calculateTranslateY = () => {
      const humidity = props.humidity || 0;
      const translateY = -(humidity /100);
      setWaveStyle(translateY);
    };
    calculateTranslateY();
  }, [props.humidity]);

  return (
    <>
      <View style={styles.body}>
        <View style={styles.box}>
          <Text style={styles.title}>{props.humidity}</Text>
          <Wave speed={5} maxPoints={16} delta={10} height={100} color='#a5e5ff'></Wave>
          <Wave speed={15} maxPoints={10} delta={10} gap={waveStyle+ 30}  ></Wave>
          <Wave speed={15} maxPoints={13} delta={20} gap={waveStyle+ 35} color="#003d66" ></Wave>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 200,
    height: 200,
    borderRadius: 100,
    position: 'relative',
    overflow: "hidden",
    backgroundColor: '#0af',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 30,
  },
  title: {
    position: 'absolute',
    left: 0,
    top: '-25%',
    fontWeight: 'bold',
    width: '100%',
    zIndex: 1,
    lineHeight: 300,
    textAlign: 'center',
    color: 'white',
    textTransform: 'uppercase',
    letterSpacing: 0.4,
    fontSize: 24,
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 0,
    textIndent: 0.3,
  }
});

export default BlueWave;
