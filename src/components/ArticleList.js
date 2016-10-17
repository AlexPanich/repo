import React, {Component} from 'react'
import Article from './Article'
import oneOpen from './../decorators/oneOpen'
import Select from 'react-select'
import 'react-select/dist/react-select.css'

class ArticleList extends Component {

  state = {
    selectedArticles: null
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

        return (
            <div>
                <h1>Article list</h1>
                <Select
                  options = {options}
                  value = {this.state.selectedArticles}
                  onChange = {this.handleSelectChange}
                  multi = {true}
                  />
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
}

export default oneOpen(ArticleList)
