import { Form, Input, InputNumber, Button } from 'antd'
import ImgUp from './imgUp'
import { Select } from 'antd'
import './newLaf.css'

const { Option } = Select

const layout = {
  labelCol: {
    span: 8
  },
  wrapperCol: {
    span: 16
  }
}

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!'
  },
  number: {
    range: '${label} must be between ${min} and ${max}'
  }
}

const NewLaf = props => {
  const onFinish = values => {
    console.log(values)
  }

  function handleChange (value) {
    console.log(`selected ${value}`)
  }

  return (
    <div id='newLaf'>
      <Form
        {...layout}
        name='nest-messages'
        onFinish={onFinish}
        validateMessages={validateMessages}
        layout='vertical'
        className='lafForm'
      >
        <Form.Item
          name={['user', 'name']}
          label='标题'
          rules={[
            {
              required: true
            }
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={['user', 'email']}
          label='联系方式'
          rules={[
            {
              required: true
            }
          ]}
        >
          <Input />
        </Form.Item>
        {props.types.length !== 0 && (
          <Form.Item name='type' label='类型' rules={[{ required: true }]}>
            <Select placeholder='' onChange={handleChange} allowClear>
              <Option value='wait'>失物招领</Option>
              <Option value='find'>寻物启事</Option>
              list=
              {props.types.map((type, index) => {
                ;<Option value={index}>{type}</Option>
              })}
            </Select>
          </Form.Item>
        )}
        <Form.Item name={['user', 'introduction']} label='物品描述'>
          <Input.TextArea />
        </Form.Item>
        <Form.Item name={['user', 'imgs']} label='图片'>
          <ImgUp />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type='primary' htmlType='submit'>
            发布
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default NewLaf
