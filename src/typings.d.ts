/* SystemJS module definition */
interface NodeModule {
  id: string;
}
declare var module: NodeModule;

interface NavTreeData {
  label: string;
  link?: string;
  subs?: Array<NavTreeData>;
}
declare module '*nav-tree-data.json' {
  const navTreeDataJson: NavTreeData;
  export default navTreeDataJson;
}