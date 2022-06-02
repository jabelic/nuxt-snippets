export const isNumber = (arg: unknown): arg is number =>{
    return typeof arg === 'number';
}

export const isString = (arg: unknown): arg is string => {
    return typeof arg === 'string';
};