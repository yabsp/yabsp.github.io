export interface LinkItem {
    readonly title: string
    readonly description: string
    readonly url: string
    readonly kind: 'guide' | 'project'
}