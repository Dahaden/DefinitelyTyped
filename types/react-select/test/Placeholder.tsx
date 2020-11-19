import * as React from 'react';
import Select from 'react-select';
import { PlaceholderProps } from 'react-select/src/components/Placeholder';

const placeholderSelectStyles = {
    placeholder: (base: React.CSSProperties, { isDisabled, isFocused }: PlaceholderProps<{}, any>) => ({
        // TODO Do something
    }),
};

export const Content = () => <Select styles={placeholderSelectStyles} />;
