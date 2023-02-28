
export default function ReducerFunc(state, payLoad){
  //console.log(state, payLoad)
  switch(payLoad.type){
    case 'SET_TODO':
      return{
        ...state,
        todo: payLoad.value
      }
    
      case 'ADD_TODO':
        return{
          ...state,
          todo:'',
          todos: [
            ...state.todos,
            payLoad.value //todo
          ]
        }
      
      case 'SET_SEARCH':
        return{
          ...state,
          search:payLoad.value
        }
    default:break;
  }
}