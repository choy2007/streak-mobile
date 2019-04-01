import { AsyncStorage } from 'react-native';

export const storeData = async (key, value) => {
  try {
    console.log(key, value)
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    // Error saving data
    console.log('storeData error', error);
  }
}

export const retrieveData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);

    if (value !== null) {
      console.log('retrieveData success', value);
      return value;
    }
  } catch (error) {
    // Error retrieving data
    console.log('retrieveData error', error);
  }
}

export const removeData = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    // Error removing data
    console.log('removeData error', error);
  }
}
