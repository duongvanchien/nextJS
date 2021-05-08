import Head from 'next/head';
import styles from '../styles/Login.module.css';
import { Form, Input, Button, Checkbox } from 'antd';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { submitUsername } from '../store/user/action';

const layout = {
	labelCol: { span: 8 },
	wrapperCol: { span: 16 },
};
const tailLayout = {
	wrapperCol: { offset: 8, span: 16 },
};

const Login = (props) => {
	const router = useRouter();
	const [name, setName] = useState('');
	const [password, setPassword] = useState('');

	const onFinish = (values) => {
		console.log('Success:', name);
		props.submitUsername(name);
		router.push('/home');
	};

	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo);
	};
	return (
		<div className={styles.container}>
			<Head>
				<title>Đăng nhập hệ thống NextJS</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className={styles.container_fluid}>
				<h2 style={{ textAlign: 'center' }}>Đăng nhập</h2>
				<Form
					{...layout}
					name="basic"
					initialValues={{ remember: true }}
					onFinish={onFinish}
					onFinishFailed={onFinishFailed}
				>
					<Form.Item
						label="Username"
						name="username"
						rules={[{ required: true, message: 'Please input your username!' }]}
					>
						<Input onChange={(e) => setName(e.target.value)} />
					</Form.Item>

					<Form.Item
						label="Password"
						name="password"
						rules={[{ required: true, message: 'Please input your password!' }]}
					>
						<Input.Password onChange={(e) => setPassword(e.target.value)} />
					</Form.Item>

          <Form.Item {...tailLayout} name="remember" valuePropName="checked">
            <Checkbox>Ghi nhớ</Checkbox>
          </Form.Item>

					<Form.Item {...tailLayout}>
						<Button type="primary" htmlType="submit">
							Đăng nhập
						</Button>
					</Form.Item>
				</Form>
			</div>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {
		submitUsername: bindActionCreators(submitUsername, dispatch),
	};
};

export default connect(null, mapDispatchToProps)(Login);
