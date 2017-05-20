import { TabNavigator } from 'react-navigation'
import { Auth } from './components'
import { TestContainer } from './containers'

export const Tabs = TabNavigator({
  AuthContainer: {
    screen: TestContainer,
    navigationOptions: {
      tabBarLabel: 'AuthContainer',
    },
  },
})
