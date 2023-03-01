export default function Reducer(state, action) {
  switch (action.type) {
    case 'toggle_theme':
      const theme = state.theme==='light'?'dark':'light';
      localStorage.setItem('theme', theme);
      return{
        ...state,
        theme
      } //local storage'a ekleyecek değişme olunca, böylece oradan çekebileceğiz.
    case 'toggle_lang':
      return{
        ...state,
        lang: state.lang==='tr'?'en':'tr'
      }
  
    default:
      break;
  }
}
