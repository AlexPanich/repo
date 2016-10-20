import React, {Component, PropTypes} from 'react'
import ArticleList from '../components/ArticleList'
import {connect} from 'react-redux'
import Filters from '../components/Filters'

class Articles extends Component {
    static propTypes = {};

    render() {
        const {articles} = this.props
        return (
            <div>
                <Filters articles={articles}/>
                <ArticleList articles={articles}/>
            </div>
        )
    }
}

export default connect(
    ({articles}) => ({articles})
)(Articles)
