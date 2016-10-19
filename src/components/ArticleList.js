import React, {Component} from 'react'
import Article from './Article'
import oneOpen from './../decorators/oneOpen'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import DayPicker, { DateUtils } from 'react-day-picker'
import 'react-day-picker/lib/style.css'

class ArticleList extends Component {

  state = {
    selectedArticles: null,
    from: null,
    to: null
  }

    render() {
        const {articles, openArticleId, openArticle} = this.props;
        const listItems = articles.map((article) => <li key={article.id}>
            <Article
                article={article}
                isOpen={article.id == openArticleId}
                openArticle={openArticle(article.id)}
            />
        </li>);

        const options = articles.map((article) => ({
            label: article.title,   
            value: article.id
          }));

        const {from, to} = this.state;

        return (
            <div>
                <h1>Article list</h1>
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
                <ul>
                    {listItems}
                </ul>
            </div>
        )
    }

    handleSelectChange = (selectedArticles) => {
      this.setState({
        selectedArticles
      })
    }

    handleDayClick = (e, day) => {
      const range = DateUtils.addDayToRange(day, this.state)
      this.setState(range);
    }
    handleResetClick = (e) => {
      e.preventDefault();
      this.setState({
        from: null,
        to: null
      })
    }
}

export default oneOpen(ArticleList)
