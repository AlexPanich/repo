import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import 'react-day-picker/lib/style.css'
import Select from 'react-select'
import 'react-select/dist/react-select.css'

class Filters extends Component {
    state = {
        selectedArticles: null,
        from: null,
        to: null
    }
    render() {
        const {articles} = this.props;
        const {from, to} = this.state;
        const options = articles.map((article) => ({
            label: article.title,
            value: article.id
        }));
        return (
            <div>
                <Select
                    options = {options}
                    value = {this.state.selectedArticles}
                    onChange = {this.handleSelectChange}
                    multi = {true}
                />
                <DayPicker
                    numberOfMonths = {2}
                    selectedDays={ day => DateUtils.isDayInRange(day, {from, to}) }
                    onDayClick={ this.handleDayClick }
                />

                { !from && !to && <p>Please select the <strong>first day</strong>.</p> }
                { from && !to && <p>Please select the <strong>last day</strong>.</p> }
                { from && to &&
                <p>
                    You chose from { from.toLocaleDateString() } to { to.toLocaleDateString() }.
                    { ' ' }<a href="#" onClick={ this.handleResetClick }>Reset</a>
                </p>
                }
            </div>
        )
    }

    handleDayClick = (e, day) => {
        const range = DateUtils.addDayToRange(day, this.state);
        this.setState(range);
    }
    handleResetClick = (e) => {
        e.preventDefault();
        this.setState({
            from: null,
            to: null
        })
    }
    handleSelectChange = (selectedArticles) => {
        this.setState({
            selectedArticles
        })
    }
}

export default Filters