const classNames = (arr: (string | undefined)[]) =>
    arr.filter(Boolean).join(' ');

export default classNames;
