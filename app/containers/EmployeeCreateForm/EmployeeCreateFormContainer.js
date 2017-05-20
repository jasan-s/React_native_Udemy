import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, TouchableOpacity } from 'react-native'
import { EmployeeCreateForm } from '~/components'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as ActionCreators from '~/redux/modules/employees'


class EmployeeCreateFormContainer extends Component {

  static propTypes = {}
  static defaultProps = {}
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    // access navigation dynamic params
    const { state } = this.props.navigation
    console.log('WWWWWWWW: ', state)
    return (
      <View>
      <EmployeeCreateForm
        handleEmployeeInputChange={(field, value) => this.props.employeeInputChange(field, value)}
        employeeName={this.props.name}
        employeePhone={this.props.phone}
        employeeShift={this.props.shift} />
          <TouchableOpacity
          onPress={ () => this.props.navigation.goBack() }
          style={{
            padding:20,
            borderRadius:20,
            backgroundColor:'yellow',
            marginTop:20
          }}>
        </TouchableOpacity>
        </View>
    )
  }
}

function mapStateToProps({ employees }, props) {
  const { name, phone, shift } = employees
  return {
    name,
    phone,
    shift,
  }
}

function mapDispatchToProps(dispatch, props) {
  return bindActionCreators(ActionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeCreateFormContainer)

