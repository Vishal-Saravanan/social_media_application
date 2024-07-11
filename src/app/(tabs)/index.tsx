import { FlatList } from 'react-native';
import React from 'react';
import posts from '~/assets/data/posts.json';
import PostListItem from '~/src/components/PostListItem';


export default function Index() {
  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={{ gap: 10, maxWidth: 512, width: '100%', alignSelf: 'center' }}
      renderItem={({ item }) => <PostListItem post={item} />}
      style={{ flex: 1 }}
    />
  );
}