import React from 'react';
import './index.css'

type StructureProps = { children?: React.ReactNode }

const Structure = (props: StructureProps) => {
    return (
        <div className="Outer">
            <div className="Inner">
                {props.children}
            </div>
        </div>
    )
}

export default Structure;
