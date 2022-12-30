export const uniqueId = (str = ''): string =>
    str + Date.now().toString() + '-' + Math.random().toString(36).substr(2, 9);
