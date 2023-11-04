import { IMaterial } from "@rxdrag/react-core";
import { treeListIcon } from "./icon";
import { locales, resourceLocales } from "./locales";
import { boxSchema } from "./schema";
import { TreeList } from "@rxdrag/react-antd-components"

const name = "TreeList"
export const TreeListMaterial: IMaterial = {
  componentName: name,
  component: TreeList,
  designer: TreeList,
  designerLocales: locales,
  propsSchema: boxSchema,
  designerProps: {
    selectable: false,
    dataSource: [{
      id:"designer",
    }]
  },
  resource: {
    name: name,
    icon: treeListIcon,
    color: "#dfa324",
    resourceLocales: resourceLocales,
    elements: [
      {
        componentName: name,
      }
    ]
  },
  behaviorRule: {
    droppable: true,
  }
}
