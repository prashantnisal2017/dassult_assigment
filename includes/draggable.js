const list_items = document.querySelectorAll('.list-item');
const lists = document.querySelectorAll('.list');

console.log(list_items);
console.log(lists);

let draggedItem = null;

for (let i = 0; i < list_items.length; i++) {
	const item = list_items[i];

	item.addEventListener('dragstart', function () {
		draggedItem = item;
		setTimeout(function () {
			item.style.display = 'none';
			console.log("dragstart");
		}, 0)
	});

	item.addEventListener('dragend', function () {
		setTimeout(function () {
			draggedItem.style.display = 'block';
			draggedItem = null;
			console.log("dragend");
		}, 0);
	})

	for (let j = 0; j < lists.length; j ++) {
		const list = lists[j];
		// element.addEventListener(event, function, useCapture)
		list.addEventListener('dragover', function (e) {
			e.preventDefault();
		});
		
		list.addEventListener('dragenter', function (e) {
			e.preventDefault();
			console.log("dragenter");
			this.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
		});

		list.addEventListener('dragleave', function (e) {			
			console.log("dragleave");
			this.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
		});

		list.addEventListener('drop', function (e) {
			this.append(draggedItem);
			this.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
		});
	}
}