import React from 'react';
import { Link } from 'react-router-dom';

export default class NotFoundPage extends React.Component {
    render() {
        return (
            <>
                <div><b>404</b> Page Not Found!!</div>
                <Link to="/">Go Home</Link>
            </>
        );
    }
}