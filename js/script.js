let selectedCount = 0;

function updateSelection() {
    const flavors = document.getElementById('flavors').value;
    const sweeteners = document.getElementById('sweeteners').value;
    const coldFoams = document.getElementById('coldFoams').value;
    const toppings = document.getElementById('toppings').value;
    const addIns = document.getElementById('addIns').value;

    selectedCount = [flavors, sweeteners, coldFoams, toppings, addIns].filter(item => item !== 'none').length;
    console.log(`Số lựa chọn: ${selectedCount}`);
}
function removeItem(itemId) {
    const item = document.getElementById(itemId);
    if (item) {
        const price = parseFloat(item.querySelector('span:nth-child(2)').textContent.replace('Giá: $', ''));
        const totalElement = document.getElementById('total');
        let total = parseFloat(totalElement.textContent);
        total -= price;
        totalElement.textContent = total.toFixed(2);
        item.remove();
    }
}