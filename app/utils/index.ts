export function prettifyNumber(num: number): string {
    const intl = new Intl.NumberFormat('en-IN', { maximumFractionDigits: 1 });

    if (num > 1_000_000) {
        return `${intl.format(num / 1_000_000)}m`;
    }

    if (num > 1_000) {
        return `${intl.format(num / 1_000)}k`;
    }

    return intl.format(num);
}
