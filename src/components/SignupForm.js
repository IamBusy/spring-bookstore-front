/**
 * Created by william on 05/04/2017.
 */
import { Form, Icon, Input, Button, Checkbox, Alert } from 'antd';
import {routeTo} from '../utils/helper';
const FormItem = Form.Item;

class SignupForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      confirmDirty:false,
    }
    console.log(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.redirect = this.redirect.bind(this);
  }

  redirect(){
    routeTo(this.props.redirect);
  }

  handleSubmit(e) {
    const {dispatch,form} =  this.props;
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        dispatch({type:'user/signup',payload:{
          username: form.getFieldValue('userName'),
          password: form.getFieldValue('password'),
          callback: this.redirect}});
      }
    });
  };

  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  checkPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { signupErrorMsg, signupLoading } = this.props.user;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        {
          signupErrorMsg ? (<Alert message={signupErrorMsg} type="error" />):''
        }
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" onBlur={this.handleConfirmBlur} />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [
              { required: true, message: 'Please input your Password!' },
            ],
          })(
            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" onBlur={this.handleConfirmBlur} />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('rPassword', {
            rules: [
              { required: true, message: 'Please input your Password!' },
              {validator: this.checkPassword,}],
          })(
            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Repeat password" onBlur={this.handleConfirmBlur} />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>Remember me</Checkbox>
          )}
          <a style={{float:'right'}}>Forgot password</a>

          {
            signupLoading ? 
            (<Button type="primary" htmlType="submit" style={{width:'100%'}} disabled>Signup!</Button>)
            :
            (<Button type="primary" htmlType="submit" style={{width:'100%'}} >Signup!</Button>)
          }
        </FormItem>
        <FormItem>
        </FormItem>
      </Form>
    );
  }
}

export default Form.create()(SignupForm);
