const isNotNull = <T,>(value: T | undefined) => {
    return !!value;
} 

const getValueIfNotNullOrThrow = <T,>(value: T | undefined) : T => {
    if (isNotNull(value)) {
        return value!;
    }
    throw new Error('value is null');
}

export default {isNotNull, getValueIfNotNullOrThrow};