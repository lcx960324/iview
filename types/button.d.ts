import {IViewComponent} from './component'

export type Type =
    'primary' | 'ghost' | 'dashed' | 'text' | 'info' | 'success' | 'warning' | 'error'

export type Size = 'large' | 'small' | 'default'

export type HtmlType = 'button' | 'submit' | 'reset'

export declare class Button extends IViewComponent {
    type: Type
    size: Size
    shape: 'circle'
    long: boolean
    htmlType: HtmlType
    disabled: boolean
    loading: boolean
    icon: string
}