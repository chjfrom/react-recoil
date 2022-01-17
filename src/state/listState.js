import { atom , selector } from 'recoil';
import { axios } from 'axios'

export const todoListFilterState = atom({
  key: 'todoListFilterState',
  default: 'Show All',
});

export const filteredTodoListState = selector({
  key: 'filteredTodoListState',
  get: ({get}) => {
    const filter = get(todoListFilterState);
    // const list = get(todoListState);

    // switch (filter) {
    //   case 'Show Completed':
    //     return list.filter((item) => item.isComplete);
    //   case 'Show Uncompleted':
    //     return list.filter((item) => !item.isComplete);
    //   default:
    //     return list;
    // }
  },
});

//  const getList = async (list) => {
//    let list = [];
//    const result = await axios('http://makeup-api.herokuapp.com/api/v1/products.json?brand=dior');
//    console.log(result);
//    return result;
//  }