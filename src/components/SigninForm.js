/**
 * Created by william on 04/04/2017.
 */
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { routeTo } from '../utils/helper';
import Intl from '../utils/intl';
const FormItem = Form.Item;




class SigninForm extends React.Component {
  handleSubmit = (e) => {
    const {dispatch,form} =  this.props;
    e.preventDefault();
    const callback = ()=>{

    }
    form.validateFields((err, values) => {
      if (!err) {
        dispatch({type:'user/signin',payload: {
          username: form.getFieldValue('userName'),
          password: form.getFieldValue('password'),
          callback: () => (routeTo(this.props.redirect))}});
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder={Intl.get('username')} />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder={Intl.get('username')} />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>{Intl.get('remember_me')}</Checkbox>
          )}
          <a style={{float:'right'}}>{Intl.get('forget')}</a>
          <Button type="primary" htmlType="submit" style={{width:'100%'}}>
            {Intl.get('login')}
          </Button>
        </FormItem>
        <FormItem>

        </FormItem>
      </Form>
    );
  }
}

export default Form.create()(SigninForm);

