import h from './vi-dom';
import { renderNode} from './vi-dom';

const getRandomItemFromArray = (list) => {
    return list[
      Math.round(Math.random() * (list.length - 1))
    ];
  };

const App = (props) => {
    const { list } = props;
    return h ('div', { class: 'app'},
    h('h1',null,'Simple Virtual DOM Demo'),
    h('ul',null, ...list.map(item => h('li',null,item))
    )
    );
};

let currentApp;
const render = (state) => {
    const newApp = renderNode(App(state));
    currentApp ? document.body.replaceChild(newApp, currentApp) 
    : document.body.appendChild(newApp);

    currentApp = newApp;
};

const state = {
    list: [
        '🕺', '💃', '😀', '🙋‍', '💼',
        '🕶️️', '👏', '🤳', '🕵️', '👩‍🔧'
      ]
}

setInterval(() => {
    state.list = [
        ...state.list,
        getRandomItemFromArray(state.list)
    ];
    render(state);
},1000);