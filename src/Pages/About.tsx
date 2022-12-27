import { Button, Form, Input } from 'antd'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function About() {
  const navigate = useNavigate()
  //   const [form] = Form.useForm()
  const [userName, setUserName] = useState<string>()
  const [passWord, setPassword] = useState<string>()
  const onFinish = (name: string) => {
    console.log('Your name is:', name)
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed to capture your information', errorInfo)
  }

  //   const onReset = () => {
  //     form.resetFields()
  //   }
  return (
    <div>
      <Form
        name='basic'
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete='off'
      >
        <Form.Item
          label='Username'
          name='username'
          rules={[{ required: true, message: 'Please enter a valid username' }]}
        >
          <Input
            onChange={(e: any) => {
              setUserName(e.target.value)
            }}
          />
        </Form.Item>
        <Form.Item
          label='Password'
          name='password'
          rules={[{ required: true, message: 'Please enter a valid password' }]}
        >
          <Input
            onChange={(e: any) => {
              setPassword(e.target.value)
            }}
          />
        </Form.Item>
        <Form.Item>
          <Button type='primary' htmlType='submit'>
            Submit
          </Button>
          {/* <Button onClick={onReset}>Reset</Button> */}
        </Form.Item>
      </Form>
      <Button onClick={() => navigate('/')}>Back to Home</Button>
    </div>
  )
}

export default About
