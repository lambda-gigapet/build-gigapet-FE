import React from 'react'
import { connect } from 'react-redux'
import { fetchFood } from '../../ReduxState/actions/childActions'
import moment from 'moment'
import Select from 'react-select'

const options = [
    {value: 'By Day', label: 'By Day'},
    {value: 'By Month', label: 'By Month'},
    {value: 'By Year', label: 'By Year'}
]

class FoodHistory extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      name: 'Food History',
      foodEntries: [],
      byDay: false,
      byMonth: false,
      byYear: false
    }
  }
  componentDidMount () {
    const { params } = this.props.match
    this.props.fetchFood(params.id)
      .then(() => {
        this.setState({ foodEntries: this.props.foodEntries })
      })
  }

  handleSelect = (selectedOpt)=>{
      if(selectedOpt.value === 'By Day' ){
          this.setState({
              byDay: true,
              byMonth: false,
              byYear: false
          })
        } else if(selectedOpt.value === 'By Month'){
            this.setState({
                byDay: false,
                byMonth: true,
                byYear: false
            })
        } else {
            if(selectedOpt.value === 'By Year') {
                this.setState({
                    byDay: false,
                    byMonth: false,
                    byYear: true
                })
            }

      }
  }

  render () {
    const {byDay, byMonth} = this.state
    return (
      <div className='FoodHistoryContainer'>
        <h1 clsasName='FoodHistory'>{this.state.name}</h1>
        <div>
            <button onClick={
                ()=>{
                    this.props.history.push(`/child/${this.props.match.params.id}`)
                }
            } >Go Back To Child</button>
        </div>
        <div>
            <Select
            placeholder='Filter by Time'
            className='select-category'
            onChange={this.handleSelect}
            options={options}
            classNamePrefix='select'
            />
        </div>
        <ul>
          {
            this.state.foodEntries.filter((food) => {
              if (byDay) {
                return moment(food.date_update).format('YYYY MM DD') === moment().format('YYYY MM DD')
              } else if (byMonth) {
                return moment(food.date_update).format('YYYY MM') === moment().format('YYYY MM')
              } else {
                return moment(food.date_update).format('YYYY') === moment().format('YYYY')
              }
            //   return moment(food.date_update).format('YYYY MM') === moment().format('YYYY MM')
            }).map((food, i) => {
              return (
                <div key={i}>
                  <h5>{food.category}</h5>
                  <li>{food.name}</li>

                </div>
              )
            }
            )
          }
        </ul>
      </div>
    )
  }
};

const mapStateToProps = state => ({
  foodEntries: state.ChildReducer.foodEntries
})

export default connect(mapStateToProps, { fetchFood })(FoodHistory)
