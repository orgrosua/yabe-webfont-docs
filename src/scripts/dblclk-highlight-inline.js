document.addEventListener('dblclick', (el) => {
    const node = el.target;
    if (!node) return;
    if (node.nodeName !== 'CODE') return;
    if (node.parentElement?.nodeName === 'PRE') return;

    let range = new Range();
    range.setStart(node, 0);
    range.setEnd(node, 1);
    const selection = document.getSelection();
    if (selection) {
        selection.removeAllRanges();
        selection.addRange(range);
    }
});