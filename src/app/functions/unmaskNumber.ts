export function unmaskNumber(inputValue: string) {
    const cleanedValue = inputValue.replace(/\D/g, '')
    return cleanedValue
 }
 