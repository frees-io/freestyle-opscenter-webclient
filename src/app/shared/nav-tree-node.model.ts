/**
 * Navigation Tree Node model
 */
export class NavTreeNode implements NavTreeData {

  public label: string;
  public link?: string;
  public subs?: Array<NavTreeNode>;

  constructor(data: object) {
    this.label = data['label'];
    if (data['link']) {
      this.link = data['link'];
    }
    else if (data['subs']) {
      this.subs = data['subs'].map(
        (elem) => new NavTreeNode(elem)
      );
    }
  }

}
