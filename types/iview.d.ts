import Vue, {PluginFunction} from 'vue'

export interface InstallationOpts {
    transfer?: boolean,
    size?: 'default' | 'small' | 'large'
}

export function install(): PluginFunction<InstallationOpts>