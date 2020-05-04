import React, { useCallback } from 'react'
import { Button, Container, Content, Icon, Text, View } from 'native-base'
import { MainStackNavigationProps } from '../../../navigations'
import { DrawerActions } from '@react-navigation/native'

type Props = MainStackNavigationProps<'Home'>

export const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const onDrawerPress = useCallback(() => {
    navigation.dispatch(DrawerActions.openDrawer)
  }, [navigation])
  navigation.setOptions({
    headerLeft: () => (
      <Button transparent={true} onPress={onDrawerPress}>
        <Icon name="menu" type="MaterialCommunityIcons" />
      </Button>
    ),
  })
  return (
    <Container>
      <Content padder={true}>
        <View>
          <Text>TEST</Text>
        </View>
      </Content>
    </Container>
  )
}
