import { normalizedArticles } from '../fixtures'
import { DELETE_ARTICLE, ADD_COMMENT, LOAD_ALL_ARTICLES, SUCCESS } from '../constants'
import { Record } from 'immutable'
import { recordsFromArray } from './utils'

const Article = Record({
    id: '',
    date: '',
    text: '',
    title: '',
    comments: []
});


const defaultArticles = recordsFromArray(Article, []);

export default (articles = defaultArticles, action) => {
  const {type, payload, randomId, response} = action;

  switch (type) {
      case DELETE_ARTICLE:
        return articles.delete(payload.id);
      case ADD_COMMENT:
          console.log('---Random', randomId)
        return articles.updateIn([payload.articleId, 'comments'], comments => comments.concat(randomId))
      case LOAD_ALL_ARTICLES + SUCCESS:
        return articles = recordsFromArray(Article, response)
  }
  //article.set()
  //articles.update()
  //articles.updateIn([id, 'comments'], comments = > comments.filter(...))
  return articles;
}
