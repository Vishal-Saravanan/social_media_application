import { View, Text, Image, TextInput, Pressable } from 'react-native';
import React, { useState, useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker';

export default function CreatePost() {
  const [caption, setCaption] = useState();
  const [image, setImage] = useState<string | null>(null)

  useEffect(() =>{
    if(!image){
      pickImage();
    }
  }, [image])

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
    <View className='flex-1 p-3 justify-between'>
      {/*Content*/}
      <View className='items-center'>
        {/*Image Picker*/}
        {image? (<Image 
          source={{ uri: image }}
          className='w-52 aspect-[3/4] rounded-lg shadow-md bg-slate-300'
        />) :(
          <View className='w-52 aspect-[3/4] rounded-lg bg-slate-300'/>
        )}

        <Text onPress={(pickImage)} className='text-blue-500 font-semibold m-5'>
          Change
        </Text>

        {/*Text Input for Caption*/}
        <TextInput
          placeholder='What is on your mind'
          value={caption}
          onChangeText={(newValue) => setCaption(newValue)}
          className='w-full p-3'
        />
      </View>

      {/*Button*/}
      <View className='w-full'>
        <Pressable className='bg-blue-500 w-full p-3 items-center rounded-md'>
          <Text className='text-white font-semibold'>Share</Text>
        </Pressable>
      </View>
    </View>
  );
}
