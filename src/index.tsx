import React, { useState } from 'react'
import { AppLoading } from 'expo'
import * as Font from 'expo-font'
import { Ionicons } from '@expo/vector-icons'
import { Text, View } from 'react-native'

type Props = {
  skipLoadingScreen: boolean
}

export const Root: React.FC<Props> = ({ skipLoadingScreen }) => {
  const [isLoadingComplete, setLoadingComplete] = useState(false)
  const loadResourcesAsync = async () => {
    return Promise.all([
      // Asset.loadAsync([
      //   require('../assets/marriage.jpg'),
      // ]),

      Font.loadAsync({
        Roboto: require('native-base/Fonts/Roboto.ttf'),
        Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
        // This is the font that we are using for our tab bar
        ...Ionicons.font,
      }),
    ])
  }
  const handleLoadingError = (error: Error) => {
    console.warn(error)
  }
  const handleFinishLoading = () => {
    setLoadingComplete(true)
  }

  return (
    <>
      {!isLoadingComplete && !skipLoadingScreen ? (
        <AppLoading
          // @ts-ignore
          startAsync={loadResourcesAsync}
          onError={handleLoadingError}
          onFinish={handleFinishLoading}
        />
      ) : (
        <View>
          <Text>Open up App.tsx to start working on your app!</Text>
        </View>
      )}
    </>
  )
}
