import React from 'react';
import { connect } from 'dva';
import  SignupForm from '../components/SignupForm';
import SignLayout from '../components/SignLayout';



function SignupPage({user, dispatch}) {
  return (
    <SignLayout>
      <SignupForm dispatch={dispatch} user={user} redirect="/"></SignupForm>
    </SignLayout>
  );
}

function mapStateToProps(state, ownProps) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps)(SignupPage);
