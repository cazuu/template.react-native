import React from 'react'
import { Container, Content, Text, Title, View } from 'native-base'
import { DetailStackNavigationProps } from '../../../navigations'

type Props = DetailStackNavigationProps<'ListDetail'>

export const ListDetailScreen: React.FC<Props> = ({ route }) => {
  const { id } = route.params
  return (
    <Container>
      <Content>
        <View padder={true}>
          <Title>Detail - {id}</Title>
        </View>
        <View>
          <Text>TEST</Text>
          <Text>TEST</Text>
          <Text>TEST</Text>
        </View>
      </Content>
    </Container>
  )
}
