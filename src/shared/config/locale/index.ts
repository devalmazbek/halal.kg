import { t } from 'i18next'

import { NestedPaths } from './nested-path'
import * as  translationRU from './ru.json'

type TranslationKeys = NestedPaths<typeof translationRU>;

export const $t = (key: TranslationKeys, options = {}) => t(key, options) === null ? key : t(key, options)