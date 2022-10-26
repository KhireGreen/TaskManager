window.addEventListener('load', () => { // event listenr is waiting for the page to load
    saver = JSON.parse(localStorage.getItem('saver')) || []; // setting up my local storage as saver with the contents being saved in an array
    const form = document.querySelector("#new-task-form"); // setting the const form to the new-task-form id that is in the html file
    const input = document.querySelector("#new-task-input"); // setting the const input to the new-task-iput id that is in the html file
    const list_el = document.querySelector("#tasks") // setting the const list_el to the task id that is in the html file

    form.addEventListener('submit', (e) => { // adding an event listner to the form for the submit button
        e.preventDefault(); // stops the submit button from refreshing the page
        
        const task = input.value;

        localStorage.setItem('saver', JSON.stringify(saver));
        
        if (!task) { // if the task field is not filled with text
            alert("Please fill out the task"); // prompts user to fill out the task bar
            return;
        }

        const task_el = document.createElement("div"); // creating DOM node that we can place onto the page
        task_el.classList.add("task");

        const task_content_el = document.createElement("div"); // creating DOM node that we can place onto the page
        task_content_el.classList.add("content");

        task_el.appendChild(task_content_el);

        const task_input_el = document.createElement("input"); // creating DOM node that we can place onto the page
        task_input_el.classList.add("text"); // setting input to a class
        task_input_el.type = "text"; // setting the input type as text
        task_input_el.value = task;
        task_input_el.setAttribute("readonly", "readonly"); // input is only readable

        task_content_el.appendChild(task_input_el);

        const task_actions_el = document.createElement("div");
        task_actions_el.classList.add("actions");

        const task_edit_el = document.createElement("button"); // setting edit button
        task_edit_el.classList.add("edit");
        task_edit_el.innerHTML = "Edit";

        const task_delete_el = document.createElement("button"); // setting delete button
        task_delete_el.classList.add("delete");
        task_delete_el.innerHTML = "Delete";

        task_actions_el.appendChild(task_edit_el); // setting action for edit
        task_actions_el.appendChild(task_delete_el); // setting action for delete 

        task_el.appendChild(task_actions_el);

        list_el.appendChild(task_el);

        input.value = "";

        task_edit_el.addEventListener('click', () => { //activing on click onto the edit button
            localStorage.setItem('saver', JSON.stringify(saver));

            if (task_edit_el.innerText.toLowerCase() == "edit") {
                task_input_el.removeAttribute("readonly"); // will remove the readonly attribute from the text
            task_input_el.focus(); // instantly focus cursor 
            task_edit_el.innerText = "Save"; // swaps edit button to save
            } else {
                task_input_el.setAttribute("readonly", "readonly"); // setting input section to readonly 
                task_edit_el.innerText = "Edit";
            }
        });

        task_delete_el.addEventListener('click', () => { // activating on click onto the delete button
            localStorage.setItem('saver', JSON.stringify(saver));
            list_el.removeChild(task_el); // removes the child/item
        });
    });
}); 