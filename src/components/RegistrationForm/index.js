// Write your JS code here
import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    first: '',
    second: '',
    isSubmitted: false,
    FirstNameBlur: false,
    LastNameBlur: false,
  }

  submit = event => {
    event.preventDefault()
    const {first, second} = this.state

    if (first === '' && second === '') {
      this.setState({FirstNameBlur: true, LastNameBlur: true})
    } else if (second === '') {
      this.setState({LastNameBlur: true})
    } else if (first === '') {
      this.setState({FirstNameBlur: true})
    } else {
      this.setState({isSubmitted: true})
    }
  }

  submitResponse = () => {
    this.setState({isSubmitted: false, first: '', second: ''})
  }

  onBlurFirstName = event => {
    if (event.target.value === '') {
      this.setState({FirstNameBlur: true})
    } else {
      this.setState({FirstNameBlur: false})
    }
  }

  onBlurLastName = event => {
    if (event.target.value === '') {
      this.setState({LastNameBlur: true})
    } else {
      this.setState({LastNameBlur: false})
    }
  }

  onChangeFistName = event => {
    this.setState({first: event.target.value})
  }

  onChangeLastName = event => {
    this.setState({second: event.target.value})
  }

  render() {
    const {isSubmitted, FirstNameBlur, LastNameBlur, first, second} = this.state
    const firstInputClass = FirstNameBlur ? 'input required' : 'input'
    const secondInputClass = LastNameBlur ? 'input required' : 'input'
    return (
      <div className="bg-container">
        <h1 className="heading">Registration</h1>
        <div className="card">
          {isSubmitted ? (
            <div className="submit-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
                className="image"
                alt="success"
              />
              <p className="suc"> Submitted Successfully</p>
              <button
                className="button"
                type="submit"
                onClick={this.submitResponse}
              >
                Submit Another Response
              </button>
            </div>
          ) : (
            <form className="form-container" onSubmit={this.submit}>
              <label className="label" htmlFor="first">
                {' '}
                FIRST NAME{' '}
              </label>
              <input
                id="first"
                type="text"
                className={firstInputClass}
                value={first}
                placeholder="First name"
                onBlur={this.onBlurFirstName}
                onChange={this.onChangeFistName}
              />
              {FirstNameBlur ? <p className="require"> Required </p> : null}

              <label className="label" htmlFor="second">
                {' '}
                LAST NAME
              </label>
              <input
                id="second"
                type="text"
                value={second}
                className={secondInputClass}
                placeholder="Last name"
                onBlur={this.onBlurLastName}
                onChange={this.onChangeLastName}
              />
              {LastNameBlur ? <p className="require"> Required </p> : null}
              <button className="button" type="submit">
                Submit
              </button>
            </form>
          )}
        </div>
      </div>
    )
  }
}
export default RegistrationForm
