import React from 'react'
import { Root } from './src'

export default function App(skipLoadingScreen: boolean) {
  return <Root skipLoadingScreen={skipLoadingScreen} />
}
