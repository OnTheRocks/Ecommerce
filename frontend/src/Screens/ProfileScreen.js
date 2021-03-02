import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { detailsUser } from '../actions/userActions';

export default function ProfileScreen() {
  const userSignin = useSelector(state => state.userSignin);
  const { userInfo } = userSignin;
  const userDetails = useSelector(state => state.userDetails);
  const { loading, error, user } = userDetails;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(detailsUser(userInfo._id));
  }, [dispatch, userInfo._id]);
  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>User Profile</h1>
        </div>
        {
          loading? <LoadingBox></LoadingBox>
          :
          error? <MessageBox variant="danger">{error}</MessageBox>
        }
      </form>
    </div>
  )
}
