import { Form, Input, Button } from 'antd'
import ImgUp from './imgUp'
import { Select } from 'antd'
import { DatePicker, Space } from 'antd'
import moment from 'moment'
import './newLaf.css'

import insert from '../../service/lost/insert'
import insertInformation from '../../service/information/insert'

const { Option } = Select
const dateFormat = 'YYYY-MM-DD'

const layout = {
  labelCol: {
    span: 8
  },
  wrapperCol: {
    span: 16
  }
}

const validateMessages = {
  required: '请填写${label}!'
}

const NewLaf = props => {
  const form = {}
  const onFinish = values => {
    // console.log(values)
    form.flag = values.flag
    form.pickupPlace = values.pickupPlace
    // form.pickupTime = values.pickupTime._i
    form.categoryId = values.typeId

    form.describe = values.describe

    // form.time = values.pickupTime._i
    form.informationCategoryId = form.typeId
    form.contactInformation = values.contactInformation
    console.log(form)
    if (form.flag) {
      insert(form)
    } else {
      insertInformation(form)
    }
  }

  function onChange (date, dateString) {
    console.log(date, dateString)
    form.pickupTime = dateString
    form.time = dateString
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
          name={'contactInformation'}
          label='联系方式'
          rules={[
            {
              required: true
            }
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name={'pickupTime'}
          label='时间'
          rules={[
            {
              required: true
            }
          ]}
        >
          <DatePicker
            onChange={onChange}
            defaultValue={moment('2021-06-06', dateFormat)}
          />
        </Form.Item>

        <Form.Item
          name={'pickupPlace'}
          label='地点'
          rules={[
            {
              required: true
            }
          ]}
        >
          <Input></Input>
        </Form.Item>

        {props.flag && (
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
          <Form.Item name='typeId' label='类型' rules={[{ required: true }]}>
            <Select placeholder='' onChange={handleChange} allowClear>
              {props.types.map((item, index) => {
                return (
                  <Option
                    value={item.informationCategoryId || item.lostCategoryId}
                    key={item.informationCategoryId || item.lostCategoryId}
                  >
                    {item.informationCategoryName || item.lostCategoryName}
                  </Option>
                )
              })}
            </Select>
          </Form.Item>
        )}
        <Form.Item name={'describe'} label='物品描述'>
          <Input.TextArea />
        </Form.Item>
        <Form.Item name={'imgs'} label='图片'>
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
