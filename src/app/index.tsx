import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link, Redirect } from 'expo-router'

const index = () => {
  return <Redirect href='/(tabs)'/>
}

export default index