//FAVORITES PAGE

//IMPORTING
import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import styles from './styles';

//FAVORITES FUNCTION
function Favorites() {
  const [favorites, setFavorites] = useState([]);

  //LOAD FAVORITES FUNCTION
  function loadFavorites() {
    AsyncStorage.getItem('favorites').then(response => {
      if (response) {
        const favoritedTeachers = JSON.parse(response);

        setFavorites(favoritedTeachers);
      }
    });
  }

  //FOCUS EFFECT
  useFocusEffect(
    React.useCallback(() => {
      loadFavorites();
    }, [])
  );

  //FAVORITES PAGE STRUCTURE
  return (
    <View style={styles.container}>
      <PageHeader title="Meus teachers favoritos" />

      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        {favorites.map((teacher: Teacher) => {
          return (
            <TeacherItem
              key={teacher.id}
              teacher={teacher}
              favorited
            />
          );
        })}
      </ScrollView>
    </View>
  );
}

export default Favorites;
