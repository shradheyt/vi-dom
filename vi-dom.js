export default function createElement(nodeName, attributes, ...children) {
    return {nodeName, attributes, children};
}

export const renderNode = vnode => {
    let el;
    const { nodeName, attributes, children} = vnode;
    if(vnode.split) return document.createTextNode(vnode);  //if vnode is textnode

    el = document.createElement(nodeName);
    for(let key in attributes) {
        el.setAttribute(key,attributes[key]);
    } 

    (children || []).forEach(child => {
        el.appendChild(renderNode(child));
    });
    return el;
};