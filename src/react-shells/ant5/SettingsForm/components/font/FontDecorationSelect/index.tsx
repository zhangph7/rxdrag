import { Radio, RadioChangeEvent } from "antd"
import { memo, useCallback } from "react"
import { FoldExtraItem, FoldIcon } from "../../Fold/FoldExtraItem"

export const textDecorationIcon = ` <svg viewBox="0 0 1024 1024" height="1em" width="1em" fill="currentColor" focusable="false" aria-hidden="true"><path d="M551.208577,113.100229 C571.408577,121.400229 587.508577,137.900229 595.408577,158.200229 L734.856,519 L863,519 C890.061953,519 912,540.938047 912,568 C912,595.061953 890.061953,617 863,617 L772.732,617 L867.308577,861.700229 C875.308577,882.300229 865.008577,905.500229 844.408577,913.400229 C839.708577,915.200229 834.808577,916.100229 830.008577,916.100229 C814.008577,916.100229 798.808577,906.400229 792.708577,890.500229 L687.001,617 L343.875,617 L231.008577,891.300229 C222.608577,911.700229 199.208577,921.500229 178.808577,913.100229 C158.408577,904.700229 148.608577,881.300229 157.008577,860.900229 L257.366,617 L161,617 C133.938047,617 112,595.061953 112,568 C112,540.938047 133.938047,519 161,519 L297.69,519 L446.808577,156.600229 C454.908577,136.800229 470.308577,121.400229 490.008577,113.200229 C509.708577,105.000229 531.508577,104.900229 551.208577,113.100229 Z M520.808577,187.000229 L384.199,519 L649.125,519 L520.808577,187.000229 Z"></path></svg>`

export const textUnlineIcon = `<svg viewBox="0 0 1024 1024" height="1em" width="1em" fill="currentColor" focusable="false" aria-hidden="true"><path d="M772,844 C794.09139,844 812,861.90861 812,884 C812,906.09139 794.09139,924 772,924 L252,924 C229.90861,924 212,906.09139 212,884 C212,861.90861 229.90861,844 252,844 L772,844 Z M272,100 C274.155215,100 276.27062,100.17045 278.333468,100.498605 L752,100.5 L752,100.5 C774.09139,100.5 792,118.40861 792,140.5 L792,190.5 C792,212.59139 774.09139,230.5 752,230.5 C729.90861,230.5 712,212.59139 712,190.5 L712,180.5 L552,180.5 L552,663.5 L672,663.5 C694.09139,663.5 712,681.40861 712,703.5 C712,725.59139 694.09139,743.5 672,743.5 L352,743.5 C329.90861,743.5 312,725.59139 312,703.5 C312,681.40861 329.90861,663.5 352,663.5 L472,663.5 L472,180.499 L312,180.499 L312,190 C312,212.09139 294.09139,230 272,230 C249.90861,230 232,212.09139 232,190 L232,140 C232,117.90861 249.90861,100 272,100 Z"></path></svg>`

export const textLineThrough = `<svg viewBox="0 0 1024 1024" height="1em" width="1em" fill="currentColor" focusable="false" aria-hidden="true"><path d="M551.208577,113.100229 C571.408577,121.400229 587.508577,137.900229 595.408577,158.200229 L734.856,519 L863,519 C890.061953,519 912,540.938047 912,568 C912,595.061953 890.061953,617 863,617 L772.732,617 L867.308577,861.700229 C875.308577,882.300229 865.008577,905.500229 844.408577,913.400229 C839.708577,915.200229 834.808577,916.100229 830.008577,916.100229 C814.008577,916.100229 798.808577,906.400229 792.708577,890.500229 L687.001,617 L343.875,617 L231.008577,891.300229 C222.608577,911.700229 199.208577,921.500229 178.808577,913.100229 C158.408577,904.700229 148.608577,881.300229 157.008577,860.900229 L257.366,617 L161,617 C133.938047,617 112,595.061953 112,568 C112,540.938047 133.938047,519 161,519 L297.69,519 L446.808577,156.600229 C454.908577,136.800229 470.308577,121.400229 490.008577,113.200229 C509.708577,105.000229 531.508577,104.900229 551.208577,113.100229 Z M520.808577,187.000229 L384.199,519 L649.125,519 L520.808577,187.000229 Z"></path></svg>`

export const FontDecorationSelect = memo((props: {
  title?: string,
  span?: number,
  value?: string,
  onChange?: (value?: string | null) => void
}) => {
  const { title, span = 24, value, onChange } = props
  const handleChange = useCallback((e: RadioChangeEvent) => {
    onChange?.(e.target.value)
  }, [onChange])
  
  return (
    <FoldExtraItem span={span}
      title={title}
      icon={textDecorationIcon}
      marginTop = {8}
    >
      <Radio.Group  value={value} onChange={handleChange} options={[
        { label: '--', value: 'none' },
        { label: <FoldIcon icon={textUnlineIcon} />, value: 'underline' },
        { label: <FoldIcon icon={textLineThrough} />, value: 'line-through' },
      ]}
        optionType="button" />
    </FoldExtraItem>
  )
})