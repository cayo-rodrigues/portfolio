export type IMenuActiveTab = "about" | "projects"

export interface IMenuContextData {
  activeTab: IMenuActiveTab
  switchTab: (tab: IMenuActiveTab) => void
}
