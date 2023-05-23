import type { basicFormat } from "./tsInterface"
export const basicFields: Array<basicFormat> = [
  {
    type: 'enum-select-widget',
    icon: 'radio-field',
    name:"enum-select",
    formItemFlag: true,
    options: {
      name: '',
      label: '选择',
      labelAlign: '',
      labelWidth: 80,
      labelHidden: false,
      defaultValue: null,
      columnWidth: '200px',
      width:300,
      size: '',
      displayStyle: 'inline',
      buttonStyle: false,
      border: false,
      disabled: false,
      hidden: false,
      optionItems: [
        { label: 'radio 1', value: 1 },
        { label: 'radio 2', value: 2 },
        { label: 'radio 3', value: 3 },
      ],
      required: false,
      requiredHint: '',
      validation: '',
      validationHint: '',
      //-------------------
      customClass: '',  //自定义css类名
      labelIconClass: null,
      labelIconPosition: 'rear',
      labelTooltip: null,
      //-------------------
      onCreated: '',
      onMounted: '',
      onChange: '',
      onValidate: '',
    },
  }
]