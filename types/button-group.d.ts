import {IViewComponent} from './component'

export type Type =
    'primary' | 'ghost' | 'dashed' | 'text' | 'info' | 'success' | 'warning' | 'error'

export type Size = 'large' | 'small' | 'default'

export type HtmlType = 'button' | 'submit' | 'reset'

export declare class ButtonGroup extends IViewComponent {
    size: Size
    shape: 'circle'
    vertical: boolean
}