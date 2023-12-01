import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import Wave from "react-native-waves"

const BlueWave = (props) => {
  const [waveStyle, setWaveStyle] = useState(0);
  const [bgcolor, setBgcolor] = useState('#a5e5ff')
  // const [textColor, setTextColor] = useState('white')
  const [humidity, setHumidity] = useState(0)

  useEffect(() => {
    const calculateTranslateY = () => {
      setHumidity(props.humidity)
      setHumidity(37)
      const translateY = (150-humidity);

      if (humidity < 30){
        setBgcolor('brown')
      }else if(humidity < 50){
        setBgcolor('#DEB887')
      }else{
        setBgcolor('#a5e5ff')
      }
      setWaveStyle(translateY);
    };
    calculateTranslateY();
  }, [props.humidity])

  return (
    <>
      <View style={styles.body}>
        <View style={styles.box}>
          <Text style={styles.title}>{humidity}</Text>
          <Wave speed={5} maxPoints={16} delta={10} height={100} color={bgcolor}></Wave>
          <Wave speed={15} maxPoints={13} delta={12} gap={waveStyle+ 30}  ></Wave>
          <Wave speed={15} maxPoints={10} delta={10} gap={waveStyle+ 35} color="#003d66" ></Wave>
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
    width: 120,
    height: 120,
    borderRadius: 100,
    position: 'relative',
    overflow: "hidden",
    backgroundColor: '#0af',
    display: 'flex',
    justifyContent: 'center',

  },
  title: {
    left: 0,
    fontWeight: 'bold',
    zIndex: 1,
    lineHeight: 24,
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
