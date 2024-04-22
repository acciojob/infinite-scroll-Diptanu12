//your code here!

document.addEventListener("DOMContentLoaded", function () {
  const list = document.getElementById("infi-list");
  const listItemHeight = 50; // Adjust this value according to your list item height
  const numItemsToAdd = 2;

  // Function to add more list items
  function addMoreItems() {
    for (let i = 0; i < numItemsToAdd; i++) {
      const listItem = document.createElement("li");
      listItem.textContent = "List Item " + (list.children.length + 1);
      list.appendChild(listItem);
    }
  }


  for (let i = 0; i < 10; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = "List Item " + (i + 1);
    list.appendChild(listItem);
  }


  list.addEventListener("scroll", function () {
    const scrollTop = list.scrollTop;
    const scrollHeight = list.scrollHeight;
    const clientHeight = list.clientHeight;


    if (scrollHeight - scrollTop === clientHeight) {

      addMoreItems();
    }
  });
});
