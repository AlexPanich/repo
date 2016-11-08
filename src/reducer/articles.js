import { normalizedArticles } from '../fixtures'
import { DELETE_ARTICLE, ADD_COMMENT } from '../constants'
import { Record } from 'immutable'
import { recordsFromArray } from './utils'

const Article = Record({
    id: '',
    date: '',
    text: '',
    title: '',
    comments: []
});


const defaultArticles = recordsFromArray(Article, normalizedArticles);

export default (articles = defaultArticles, action) => {
  const {type, payload, randomId} = action;

  switch (type) {
      case DELETE_ARTICLE:
        return articles.delete(payload.id);
      case ADD_COMMENT:
        return article.updateIn([payload.articleId, 'comments'], comments => comments.concat(randomId))

  }
  //article.set()
  //articles.update()
  //articles.updateIn([id, 'comments'], comments = > comments.filter(...))
  return articles;
}
