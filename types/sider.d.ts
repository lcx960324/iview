import {VNode} from 'vue'
import {IViewComponent} from './compnent'

export interface CollapseEventHandler {
    (collapsed: boolean): void
}

export interface SiderSolts{
    trigger: VNode[],

    [key: string]: VNode[]
}

export declare class Sider extends IViewComponent {
    breakpoint: string
    value: boolean
    width: number
    collasible: boolean
    collapsedWidth: number
    hideTrigger: boolean
    defaultCollapsed: boolean
    reverseArrow: boolean

    onCollpase: CollapseEventHandler

    $slots: SiderSolts
}