import { StatusBar } from 'react-native'
import {useIsFocused} from '@react-navigation/core'

const FocusedStatusBar = (props) => {

    const isFocuses = useIsFocused();

  return isFocuses ? <StatusBar animated = {true} {...props} /> : null
}

export default FocusedStatusBar