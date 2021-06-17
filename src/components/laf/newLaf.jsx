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
  required: '请填写${label}!',
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
          <Form.Item
            name='flag'
            label='失与寻'
            rules={[
              {
                required: true
              }
            ]}
          >
            <Select>
              <Select.Option value={0}>寻物启事</Select.Option>
              <Select.Option value={1}>失物招领</Select.Option>
            </Select>
          </Form.Item>
        )}

        {props.types.length !== 0 && (
          <Form.Item name='type' label='类型' rules={[{ required: true }]}>
            <Select placeholder='' onChange={handleChange} allowClear>
              {props.types.map((item, index) => {
                return (
                  <Option
                    value={index}
                    key={item.informationCategoryId || item.lostCategoryId}
                  >
                    {item.informationCategoryName || item.lostCategoryName}
                  </Option>
                )
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
