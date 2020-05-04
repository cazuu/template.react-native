import React, { useCallback } from 'react'
import { Container, Content, List, ListItem, Text } from 'native-base'
import { ListStackNavigationProps } from '../../../navigations'

type Props = ListStackNavigationProps<'List'>

export const ListScreen: React.FC<Props> = ({ navigation }) => {
  const onPress = useCallback(() => {
    navigation.navigate('ListDetail', { id: 1 })
  }, [navigation])
  return (
    <Container>
      <Content>
        <List>
          <ListItem onPress={onPress}>
            <Text>TEST1</Text>
          </ListItem>
          <ListItem onPress={onPress}>
            <Text>TEST2</Text>
          </ListItem>
          <ListItem onPress={onPress}>
            <Text>TEST3</Text>
          </ListItem>
        </List>
      </Content>
    </Container>
  )
}
