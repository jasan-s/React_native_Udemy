import React from 'react'
import PropTypes from 'prop-types'
import { Scene, Router, Actions } from 'react-native-router-flux'
import { AuthContainer,
  EmployeeListContainer,
  EmployeeCreateFormContainer,
  LibraryListViewContainer,
  LibraryFlatListContainer,
  LibrarySectionListContainer } from '~/containers'

// sceneStyle is global style
export default function Routes(props) {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key='auth'>
        <Scene key='login' component={AuthContainer} title='Please Login' />
      </Scene>
      <Scene key='main'>
        <Scene
          key='employeeList'
          component={LibraryListViewContainer}
          title='Employees'
          rightTitle='ADD'
          onRight={() => Actions.employeeCreateForm()} />
        <Scene
          key='employeeCreateForm'
          component={EmployeeCreateFormContainer}
          title='Add Employee' />
      </Scene>
    </Router>
  )
}

Routes.propTypes = {}
Routes.defaultProps = {}
