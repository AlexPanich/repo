import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import 'react-day-picker/lib/style.css'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import { connect } from 'react-redux'
import { changeFilters } from '../AC/filters'

class Filters extends Component {

    render() {
        const {articles, filters} = this.props;
        const {from, to} = filters;
        const options = articles.map((article) => ({
            label: article.title,
            value: article.id
        }));
        return (
            <div>
                <Select
                    options = {options}
                    value = {filters.selectedArticles}
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
        const { changeFilters } = this.props
        const range = DateUtils.addDayToRange(day, this.props.filters);
        changeFilters(range);
    }
    handleResetClick = (e) => {
        e.preventDefault();
        const { changeFilters } = this.props
        changeFilters({
            from: null,
            to: null
        })
    }
    handleSelectChange = (selectedArticles) => {
        const { changeFilters } = this.props
        changeFilters({
            selectedArticles: selectedArticles.map(o => o.value)
        })
    }
}

export default connect(state => {
    const { articles, filters } = state;
    return { articles, filters }
}, { changeFilters })(Filters)
