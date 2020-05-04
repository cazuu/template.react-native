import React, { useCallback } from 'react'
import { Button, Container, Content, Icon, Title, View } from 'native-base'
import { MenuStackNavigationProps } from '../../../navigations'
import { DrawerActions } from '@react-navigation/native'

type Props = MenuStackNavigationProps<'Menu'>

export const MenuScreen: React.FC<Props> = ({ navigation }) => {
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
          <Title>MENU</Title>
        </View>
      </Content>
    </Container>
  )
}
