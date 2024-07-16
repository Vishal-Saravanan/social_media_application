import { View, Text, Image, TextInput } from 'react-native';
import React, { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import Button from '~/src/components/Button';

export default function Profile() {
  const [image, setImage] = useState<string | null>(null);
  const [userName, setUserName] = useState('');

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View className='p-3 flex-1'>
      {/* Avatar Image Picker */}
      {image ? (
        <Image
          source={{ uri: image }}
          className='w-52 aspect-square self-center rounded-full shadow-md bg-slate-300'
        />
      ) : (
        <View className='w-52 aspect-square self-center rounded-full bg-slate-300' />
      )}
      <Text onPress={pickImage} className='text-blue-500 font-semibold m-5 self-center'>
        Change
      </Text>

      {/* Form */}
      <Text className='mb-2 text-gray-700 font-semibold'>Username</Text>
      <TextInput
        placeholder='Username'
        value={userName}
        onChangeText={setUserName}
        className='border border-gray-300 p-3 rounded-md shadow-sm shadow-lg'
      />

      {/* Button Container */}
      <View className='flex-1 justify-end gap-3 mt-3'>
        <Button title="Update profile" />
        <Button title="Sign out" />
      </View>
    </View>
  );
}
