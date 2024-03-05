const displayOptions = () => {
    const options = {
        full: 'u-md-sizeFull',
        wide: 'u-md-size2of3',
        half: 'u-md-size1of2',
        narrow: 'u-md-size1of3',
    };

    const getDisplayOption = (value: string) => {
        const keys = Object.keys(options);
        const values = Object.values(options);

        for (let i = 0; i < keys.length; i += 1) {
            if (value === keys[i]) {
                return values[i];
            }
        }

        return null;
    };

    return {
        options,
        getDisplayOption,
    };
};

export default displayOptions;
