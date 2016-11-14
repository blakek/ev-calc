import React, { Component } from 'react'
import { Container, Input, Label, Text } from 'rebass'
import styles from './style.css'
import { getConditions } from 'services/exposure-value-conditions'
import { getExposureValue } from 'services/calculate-exposure-value'

export class EVCalculator extends Component {
  constructor() {
    super()

    this.state = {
      aperature: 1.4,
      exposureTime: 15,
      exposureValue: null,
      sensitivity: 1600
    }

    this.inputChanged = this.inputChanged.bind(this)
  }

  componentWillMount() {
    this.setState({
      exposureValue: this.getEV(
        this.state.aperature,
        this.state.exposureTime,
        this.state.sensitivity
      )
    })
  }

  getEV(aperature, exposureTime, sensitivity) {
    return Math.round(getExposureValue(aperature, exposureTime, sensitivity))
  }

  inputChanged(value, type) {
    switch (type) {
      case 'aperature':
        this.setState({
          aperature: value,
          exposureValue: this.getEV(value, this.state.exposureTime, this.state.sensitivity)
        })
        break
      case 'exposureTime':
        this.setState({
          exposureTime: value,
          exposureValue: this.getEV(this.state.aperature, value, this.state.sensitivity)
        })
        break
      case 'sensitivity':
        this.setState({
          sensitivity: value,
          exposureValue: this.getEV(this.state.aperature, this.state.exposureTime, value)
        })
        break
      default: return
    }
  }

  render() {
    return (
      <div className={styles.calculatorContainer}>
        <Input
          onChange={e => this.inputChanged(e.currentTarget.value, 'aperature')}
          label="Aperature (ƒ/number)"
          value={this.state.aperature}
          type="number"
        />

        <Input
          onChange={e => this.inputChanged(e.currentTarget.value, 'exposureTime')}
          label="Exposure time (seconds)"
          value={this.state.exposureTime}
          type="number"
        />

        <Input
          onChange={e => this.inputChanged(e.currentTarget.value, 'sensitivity')}
          label="Sensitivity (ISO)"
          value={this.state.sensitivity}
          type="number"
        />

        <div>
          <Label>Exposure Value (EV)</Label>

          <Text>
            {this.state.exposureValue}
          </Text>
        </div>

        <div>
          <Label>Example Conditions</Label>

          {getConditions(this.state.exposureValue).map((condition, index) => (
            <Text key={index}>
              {condition}
            </Text>
          ))}
        </div>
      </div>
    )
  }
}

export default EVCalculator
