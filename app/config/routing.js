import React from 'react'
import { connect } from 'react-redux'
import { Scene, Router, Actions } from 'react-native-router-flux'
import { TabNavigator, StackNavigator, TabView, addNavigationHelpers } from 'react-navigation'
// import { AuthContainer,
//   EmployeeListContainer,
//   EmployeeCreateFormContainer,
//   LibraryListViewContainer,
//   LibraryFlatListContainer,
//   LibrarySectionListContainer,
//   TabBarContainer,
//   TabBarScrollContainer } from '~/containers'
import AuthContainer from '~/containers/Auth/AuthContainer'
import LibraryListViewContainer from '~/containers/LibraryListView/LibraryListViewContainer'
import LibraryFlatListContainer from '~/containers/LibraryFlatList/LibraryFlatListContainer'
import EmployeeCreateFormContainer from '~/containers/EmployeeCreateForm/EmployeeCreateFormContainer'
import InteractableContainer from '~/containers/Interactable/InteractableContainer'

// // sceneStyle is global style
// export function Root(props) {
//   return (
//     <Router sceneStyle={{ paddingTop: 65 }}>
//       <Scene key='auth'>
//         <Scene key='login' component={TabBarScrollContainer} title='Please Login' />
//       </Scene>
//       <Scene key='main'>
//         <Scene
//           key='employeeList'
//           component={LibraryListViewContainer}
//           title='Employees'
//           rightTitle='ADD'
//           onRight={() => Actions.employeeCreateForm()} />
//         <Scene
//           key='employeeCreateForm'
//           component={EmployeeCreateFormContainer}
//           title='Add Employee' />
//       </Scene>
//     </Router>
//   )
// }

// Root.propTypes = {}r
// Root.defaultProps = {}

export const Feed = StackNavigator({
  Auth: {
    screen: AuthContainer,
    navigationOptions: {
    },
  },
  library: {
    screen: LibraryFlatListContainer,
    navigationOptions: {
    },
  },
},)

const routeConfigurationB = {
  TAB_A: { screen: AuthContainer },
  TAB_B: { screen: LibraryListViewContainer },
}

const tabBarConfigurationB = {
  tabBarPosition: 'bottom',
  animationEnabled: true,
  swipeEnabled: false,
  tabBarOptions:{
    indicatorStyle: {height: 4}
  }
}


export const AppNavigatorB = TabNavigator(routeConfigurationB,tabBarConfigurationB)

export const Root = StackNavigator({
  Tabs: {
    screen: AppNavigatorB,
  }
})

const routeConfiguration = {
  Profile: { screen: Root },
  Handshake: { screen: InteractableContainer },
  contacts: { screen: LibraryListViewContainer },
}

const tabBarConfiguration = {
  tabBarPosition: 'top',
  animationEnabled: true,
  swipeEnabled: true,
  tabBarOptions:{
    indicatorStyle: {height: 4}
  }
}

export const AppNavigator = TabNavigator(routeConfiguration,tabBarConfiguration)

