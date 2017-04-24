import React from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet, Text, Picker } from 'react-native'
import { TextFieldInput, Card, CardSection, Button } from '~/components'

export default function EmployeeCreateForm(props) {
  const { pickerTitleStyle, cardSectionStyle} = styles
  return (
    <Card>
      <CardSection>
        <TextFieldInput
          title={'Name'}
          placeholder={'JOHN DOE'}
          handleUserInput={value => props.handleEmployeeInputChange('name', value)}
          value={props.name} />
      </CardSection>
      <CardSection>
        <TextFieldInput
          title={'Phone'}
          placeholder={'123-456-7890'}
          handleUserInput={value => props.handleEmployeeInputChange('phone', value)}
          value={props.phone}
          keyboardType={'number-pad'} />
      </CardSection>
      <CardSection style={{flexDirection: 'column' }}>
        <Text style={pickerTitleStyle}> Select Shift Day </Text>
        <Picker style={{ flexDirection: 'column' }}
        selectedValue={props.employeeShift}
        onValueChange={value => props.handleEmployeeInputChange('shift', value)}>
          <Picker.Item label='monday' value='monday' />
          <Picker.Item label='tuesday' value='tuesday' />
          <Picker.Item label='wednesday' value='wednesday' />
          <Picker.Item label='thursday' value='thursday' />
          <Picker.Item label='friday' value='friday' />
          <Picker.Item label='saturday' value='saturday' />
          <Picker.Item label='sunday' value='sunday' />
        </Picker>
      </CardSection>
      <CardSection>
        <Button title={'create'} />
      </CardSection>
    </Card>
  )
}

EmployeeCreateForm.propTypes = {}
EmployeeCreateForm.defaultProps = {}

const styles = StyleSheet.create({
  pickerTitleStyle: {
    fontSize: 18,
  },
  cardSectionStyle: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
})
