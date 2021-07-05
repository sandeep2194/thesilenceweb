import React from 'react';
import Select, { components } from 'react-select';
import FeatherIcon from 'feather-icons-react';
import CreatableSelect from 'react-select/creatable';

const Locations = ({ children, ...props }) => {
    return (
        <components.Control {...props}>
            <FeatherIcon icon='maps-pin' color='#2F80ED' size={22} />

            {children}
        </components.Control>
    );
};
const Langs = ({ children, ...props }) => {
    return (
        <components.Control {...props}>
            <FeatherIcon icon='globe' color='#2F80ED' size='22' />
            {children}
        </components.Control>
    );
};
const Topics = ({ children, ...props }) => {
    return (
        <components.Control {...props}>
            <FeatherIcon icon='hash' color='#2F80ED' size='22' />
            {children}
        </components.Control>
    );
};

export const LocationSelect = props => {
    return (
        <Select
            components={{ Locations }}
            {...props}
        />
    );
};
export const LangSelect = props => {
    return (
        <Select
            {...props}
            components={{ Langs }}
        />
    );
};
export const TopicSelect = props => {
    return (
        <CreatableSelect
            {...props}
            components={{ Topics }}
        />
    );
};


