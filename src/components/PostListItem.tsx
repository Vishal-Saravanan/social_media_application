import { View, Text, Image } from 'react-native';
import React from 'react';
import posts from '~/assets/data/posts.json';
import { AntDesign, FontAwesome, Feather } from '@expo/vector-icons';


export default function PostListItem({post}) {    
  return (
    <View className='bg-white '>

    {/*Header*/}
    <View className='p-2 flex-row items-center gap-2'>
      <Image
        className='w-12 aspect-square rounded-full'
        source={{ uri: post.user.image_url }}
      />
      <Text className='font-semibold'>{post.user.username}</Text>
    </View>
    <Image className='w-full aspect-[4/3]' source={{ uri: post.image_url }} />

    {/*Icons*/}
    <View className='flex-row items-center justify-between p-2'>
      <View className='flex-row gap-3'>
        <AntDesign name='hearto' size={20} color='black' />
        <FontAwesome name='comment-o' size={20} color='black' />
        <Feather name='send' size={20} color='black' />
      </View>
      <Feather name="bookmark" size={24} color="black" />
    </View>
  </View>
  )
}