import { AbstractReaction, IActivityFactoryOptions } from "@rxdrag/minions"
import { IConfigMeta, IReactionMeta, ActivityFactory } from "@rxdrag/schema"

export interface IConditionConfig extends IConfigMeta {
  trueExpression?: string
}

export class ConditionReaction extends AbstractReaction<IConditionConfig> {

  constructor(meta: IReactionMeta<IConditionConfig>, options?: IActivityFactoryOptions) {
    super(meta, options)

    if (Object.keys(meta.inPorts || {}).length !== 1) {
      throw new Error("Condition inputs count error")
    }

    this.getInputByName("input")?.connect(this.inputHandler)
  }

  inputHandler = (inputValue: string) => {
    let result = inputValue
    if (this.meta.config?.trueExpression) {
      // eslint-disable-next-line no-new-func
      const func = new Function('inputValue', "return " + this.meta.config?.trueExpression)
      result = func(inputValue)
    }
    if (result) {
      this.getOutputByName('true')?.push(inputValue)
    } else {
      this.getOutputByName('false')?.push(inputValue)
    }
  }
}

export const Condition: ActivityFactory = (meta: IReactionMeta<IConditionConfig>, options?: IActivityFactoryOptions) => {
  return new ConditionReaction(meta, options)
}