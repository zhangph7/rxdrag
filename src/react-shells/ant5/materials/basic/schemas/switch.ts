import { INodeSchema } from "core";
import { labelSchema } from "./base";

export const switchSchema: INodeSchema = {
  componentName: "Fragment",
  children: [
    labelSchema,
    {
      componentName: "FormItem",
      props: {
        label: "$outputPorts",
      },
      children: [
        {
          componentName: "PortsInput",
          "x-field": {
            name: "outPorts",
          },
          props: {
            title: "$configPorts",
            popoverTitle: "$outputPortsConfig",
            type: "output",
          }
        }
      ]
    },
  ],
}