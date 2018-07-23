import Vue from 'vue'

export {Row} from './row'
export {Col} from './col'

export interface InstallationOptions {}

export function install (vue: typeof Vue, options: InstallationOptions): void