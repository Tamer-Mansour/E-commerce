import React from "react";
import {Spinner} from "react-bootstrap";

const Loader = () => {
    return (<>
        <Spinner
            animation="border"
            variant="secondary"
            style={{
                height: '10rem', width: '10rem', margin: 'auto', display: 'block',
            }}
        >
            <span className={'sr-only'}>Loading...</span>
        </Spinner>
    </>);
}

export default Loader;