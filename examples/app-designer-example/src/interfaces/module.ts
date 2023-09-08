import { IDocumentSchema } from "@rxdrag/schema";

export interface IModule {
  id: string,
  title?: string,
  //场景 schema，一个功能由多个场景组成，比如：主页、对话框等
  scenes?: IDocumentSchema[],
}

export interface IModuleInput {
  id?: string,
  title?: string,
  scenes?: IDocumentSchema[]
}
