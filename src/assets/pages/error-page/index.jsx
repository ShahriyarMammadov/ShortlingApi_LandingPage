import React from 'react'
import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
    const BackHome = useNavigate()
    return (
        <div>
            <Result
                status="404"
                title="404"
                subTitle="Sorry, the page you visited does not exist."
                extra={<Button type="primary" onClick={() => {
                    BackHome('/')
                }}>Back Home</Button>}
            />
        </div>
    )
}

export default ErrorPage