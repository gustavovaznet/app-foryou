//GIVE CLASSES PAGE

//IMPORTING
import React from 'react';
import { View, ImageBackground, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import giveCLassesBgImage from '../../assets/images/give-classes-background.png';

//GIVE CLASSES FUNCTION
function GiveClasses() {
  const { goBack } = useNavigation();

  //NAVIGATE BACK FUNCTION
  function handleNavigateBack() {
    goBack();
  }

  //GIVE CLASSES INFRASTRUCTURE
  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="contain"
        source={giveCLassesBgImage}
        style={styles.content}
      >
        <Text style={styles.title}>
          Quer ser um teacher?
        </Text>
        <Text style={styles.description}>
          Para começar, você precisa se cadastrar em nossa plataforma web.
        </Text>
      </ImageBackground>
      <RectButton 
        style={styles.okButton}
        onPress={handleNavigateBack}
      >
        <Text style={styles.okButtonText}>Tudo bem</Text>
      </RectButton>
    </View>
  );
}

export default GiveClasses;
