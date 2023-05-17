interface EnumFormat {
    key: string,
    value: number
}

export const enumList: { [key: string]: Array<EnumFormat> } = {
    sexEnum: [
        { key: "女", value: 0 },
        { key: "男", value: 1 },
    ]
}