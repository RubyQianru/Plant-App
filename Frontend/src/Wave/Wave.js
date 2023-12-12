import React, { useEffect, useState, useRef } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Wave from 'react-native-waves';

const BlueWave = (props) => {
  const [bgcolor, setBgcolor] = useState('#a5e5ff');
  const [humidity, setHumidity] = useState(0);
  const [description, setDescription] = useState("")

  // Refs for waveStyle and the react-native-waves component
  const waveStyleRef = useRef(0);
  const wavesRef = useRef(null);

  useEffect(() => {
    const calculateTranslateY = () => {
      setHumidity(props.humidity);

      const translateY = 160 - humidity;
      if (humidity < 30) {
        setBgcolor('brown');
        setDescription("You plant needs water!")
      } else if (humidity < 50) {
        setBgcolor('#DEB887');
        setDescription("Your plant needs to be watered soon.")
      } else {
        setBgcolor('#a5e5ff');
        setDescription("Your plant is doing great!")
      }

      waveStyleRef.current = translateY;

      if (wavesRef.current) {
        wavesRef.current.animate();
      }
    };

    calculateTranslateY();
  }, [props, humidity]);

  return (
    <View style={styles.body}>
      <View style={[styles.box, { backgroundColor: bgcolor }]}>
        <Text style={styles.title}>{humidity}</Text>
        <Wave
          ref={(ref) => (wavesRef.current = ref)}
          speed={15}
          maxPoints={13}
          delta={12}
          gap={waveStyleRef.current + 30}
          color={bgcolor} 
        ></Wave>
        <Wave
          speed={15}
          maxPoints={10}
          delta={10}
          gap={waveStyleRef.current +10 }
        ></Wave>
        <Wave
          speed={15}
          maxPoints={12}
          delta={15}
          gap={waveStyleRef.current + 15}
          color="#003d66"
        ></Wave>
      </View>
        <Text style={{
          margin: 10
        }}>      
          {description}
      </Text>
    </View>
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
    overflow: 'hidden',
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
  },
});

export default BlueWave;
