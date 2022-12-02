import { Type } from 'react-toastify/dist/utils';
import { ApiConstants } from '../../api/ApiConstants';
import custome_axios from '../../axios/AxiosSetup';
import { ADD_TODO, REMOVE_TODO } from '../../utils/constants';

export const addTodo = async () => {
  const response = await custome_axios.post(
    ApiConstants.TODO.FIND_NOT_COMPLETED(),
    {
      headers: { Authorization: 'Bearer' + localStorage.getItem('token') },
    }
  );
  if (response.status == 202) {
    return {
      type: ADD_TODO,
      data: response.data.data,
    };
  }
};

export const removeTodo = async (id: number) => {
  const response = await custome_axios.delete(ApiConstants.TODO.DELETE(id), {
    headers: { Authorization: 'Bearer' + localStorage.getItem('token') },
  });

  if (response.status == 200) {
    console.log('Action Data from redux');
    return {
      type: REMOVE_TODO,
      data: response.data.data,
    };
  }
};

export const activeTodo = (data: any) => {
  return {
    type: 'ActiveTodo',
    data: data,
  };
};

export const notCompletTodo = async (data: any) => {
  const response = await custome_axios.get(
    ApiConstants.TODO.FIND_NOT_COMPLETED(),
    {
      headers: { Authorization: 'Bearer' + localStorage.getItem('token') },
    }
  );

  if (response.status == 200) {
    return {
      type: 'NotCompletTodo',
      data: response.data.data,
    };
  }
};
