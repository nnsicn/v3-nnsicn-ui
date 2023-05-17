interface EnumFormat {
    key: number,
    value: string
}

export const enumList: { [key: string]: Array<EnumFormat> } = {
    sexEnum: [
        { key: 0, value: "女" },
        { key: 1, value: "男" },
    ]
}