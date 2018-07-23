import {IViewComponent} from './component'

export type LayoutMode = 'flex'

export type VerticalAlignment = 'top' | 'middle' | 'bottom'

export type HorizontalAlignment = 'start' | 'end' | 'center' | 'space-around' | 'space-between'

export declare class Row extends IViewComponent {
    gutter: number
    type: LayoutMode
    align: VerticalAlignment
    justify: HorizontalAlignment
    className: string
}