import React from 'react';
import FilterLink from '../containers/FilterLink';

export default class Footer extends React.Component{
    render(){
        return(
            <p className="link">
                Show:
                {""}
                <FilterLink filter="SHOW_ALL">
                    All
                </FilterLink>
                {", "}
                <FilterLink filter="SHOW_ACTIVE">
                    Active
                </FilterLink>
                {","}
                <FilterLink filter="SHOW_COMPLETED">
                    Completed
                </FilterLink>
            </p>
        )
    }
}
