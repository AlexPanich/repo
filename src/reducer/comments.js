import {  } from '../constants'
import { normalizedComments } from '../fixtures'
import { Record } from 'immutable'
import { recordsFromArray } from './utils'

const Comment = Record({
    id: '',
    user: '',
    text: ''
});

const defaultCommetns = recordsFromArray(Comment, normalizedComments)

export default (comments = defaultCommetns, action) => {
    const { type, payload } = action

    switch (type) {

    }

    return comments
}
