export {api}

const api = window.api = {get, post, put, delete: delete_}

import { get } from './api-get.js'
import { post } from './api-post.js'
import { put } from './api-put.js'
import { delete_ } from './api-delete.js'
