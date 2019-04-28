import { renderComponent} from './vi-dom';


export default class Component {
    constructor(props) {
        this.props = props;
        this.state = {};
    }
    setState(state) {
        this.state = Object.assign({},state);
        renderComponent(this);
    }
}