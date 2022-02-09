//PAGEHEADER PAGE

//IMPORTING
import React, { ReactNode } from 'react';
import { View, Text, Image } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import backIcon from '../../assets/images/icons/back.png';
import logoImg from '../../assets/images/logo.png';
import styles from './styles';

//PROPS
interface PageHeaderProps {
  title: string;
  headerRight?: ReactNode;
  children?: ReactNode;
}

//AGEHEADER CONSTANT
const PageHeader: React.FC<PageHeaderProps> = ({ title, headerRight, children }: PageHeaderProps) => {
  const { navigate } = useNavigation();

  //GO BACK FUNCTION - RETURN LANDING BUTTON
  function handleGoBack() {
    navigate('Landing');
  }

  //RETURN
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <BorderlessButton onPress={handleGoBack}>
          <Image source={backIcon} resizeMode="contain" />
        </BorderlessButton>

        <Image source={logoImg} resizeMode="contain" />
      </View>

      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        {headerRight}
      </View>

      {children}
    </View>
  );
}

export default PageHeader;
