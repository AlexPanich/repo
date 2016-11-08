import {  } from '../constants'
import { normalizedComments } from '../fixtures'
import { Record } from 'immutable'
import { recordsFromArray } from './utils'
import { ADD_COMMENT } from '../constants'

const Comment = Record({
    id: '',
    user: '',
    text: ''
});

const defaultCommetns = recordsFromArray(Comment, normalizedComments)

export default (comments = defaultCommetns, action) => {
    const { type, payload, randomId } = action;

    switch (type) {
        case ADD_COMMENT:
            const { user, text } = payload;
            return comments.merge(recordsFromArray(Comment, [{id: randomId, user, text}]));
    }

    return comments
}
