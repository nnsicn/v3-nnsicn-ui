interface optionsFormat{
    id?:number,
    name?: string,
    label?: string,
    labelAlign?: string,
    rows?: number,
    defaultValue?: null,
    placeholder?: string,
    columnWidth?: string,
    size?: string,
    labelWidth?: null,
    labelHidden?: boolean,
    readonly?: boolean,
    disabled?: boolean,
    hidden?: boolean,
    required?: boolean,
    requiredHint?: string,
    validation?: string,
    validationHint?: string,
    //-------------------
    customClass?: [] | string,  //自定义css类名
    labelIconClass?: null,
    // labelIconPosition?: 'rear',
    labelIconPosition?: string,
    labelTooltip?: null,
    minLength?: null,
    maxLength?: null,
    showWordLimit?: boolean,
    //-------------------
    onCreated?: string,
    onMounted?: string,
    onInput?: string,
    onChange?: string,
    onFocus?: string,
    onBlur?: string,
    onValidate?: string,
    displayStyle?:string
    buttonStyle?:string|boolean,
    border?:string|boolean,
    optionItems?:Array<{label?: string, value?: number}>,
  }
export interface basicFormat
    {
        type?: string,
        name:string,
        icon?: string,
        formItemFlag?: boolean,
        options: optionsFormat,
        id?:string
}
