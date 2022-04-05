// form component
const form = document.querySelector('#form');

// form component input elements
const destination = document.querySelector('#destination');
const city = document.querySelector('#location');
const timeframe = document.querySelector('#timeframe');

// form component submit buttos
const submit = document.querySelector('#submit');

// itinerary list component
const list = document.querySelector('.list');

/*
    create a item element to attach to the list component ( li )

    create 3 text elements to attach the form component data values ( p )

    get the form values from the component form input elements ( data values )

    set the form values to the created text elements ( data write )

    append the text elements to the created item elemenet ( dom manipulation )

    append the item element to the list component ( dom manipulation )

*/
// setup a click event on the form components submit button
submit.addEventListener('click', (e)=> {

    console.log('submission validation process active');

    e.preventDefault(); // prevent the default form submission function
    
    // validate and authenticate the form values on actual form submit
    if ( destination.value === '' || destination.value === null ) {
        alert('please enter a destination to proceed.'); // alert the user to their submission error
        destination.focus(); // reset the position of cursor / device input to the error effected input value
    }
    else if ( city.value === '' || city.value === null ) {
        alert('please enter a city or location to proceed.'); // alert the user to their submission error
        city.focus(); // reset the position of cursor / device input to the error effected input value
    }
    else if ( timeframe.value === '' || timeframe.value === null ) {
        alert('please enter a numbered value for your duration of stay.'); // alert the user to their submission error
        timeframe.focus(); // reset the position of cursor / device input to the error effected input value
    }
    else {
        // list.style.background = 'red'; // test the validation process

        createListItemElement(destination, city, timeframe); // initiate the create list item element function

        // reset the form input values to an empty string
        destination.value = '';
        city.value = '';
        timeframe.value = '';
    }

});

// declare a function that will create the required list elements for data write methods
createListItemElement = () => {

    console.log(destination.value); // test data pass-through

    console.log('create list function active'); // test the function has been called

    let itemAll = document.querySelectorAll('.item'); // select all created item elements for validation

    // validate and authenticate the number of already created list elements
    if ( itemAll.length > 4 ) {
        alert('the free version of this application can only create 5 entries.');

        return
    }
    else {
        // create a item element for data write and dom manipulation
        let item = document.createElement('li');
        item.classList = 'item';

        // create the 3 text elements for the create item object
        for ( let i = 0; i < 3; i++ ) {
            // create the text elements for each list component
            let text = document.createElement('p');
            text.classList = 'info';

            // append the created items to the list element
            item.appendChild(text);

            // test the text creation output
            console.log(text);

            // append the create item element to the list component
            list.appendChild(item);
            // item.style.background = '#FFF';
        }

        let text = document.querySelectorAll('.info');
        console.log(text);

        // validate if the first text element is an empty string
        if ( text[0].innerHTML === '' ) {

            // write the form input data values to the text information elements
            text[0].innerHTML = destination.value;
            text[1].innerHTML = city.value;
            text[2].innerHTML = timeframe.value + ' days';
        }
        else {
            console.log(item); // test which items are being selected

            // select the current created item for data write method
            let current = item.querySelectorAll('.info');
            console.log(current); // test the current output elements

            // set the form data values to the current text elements
            current[0].innerHTML = destination.value;
            current[1].innerHTML = city.value;
            current[2].innerHTML = timeframe.value + ' days';
        }
    }
    enableListItemEditingProtocol(); // initiate the enable editing protocol function
}

// itinerary component colorize button
const confirm = document.querySelector('#confirm');

// setup a click event on the confirm button
confirm.addEventListener('click', () => {
    enableItineraryCreationProtocol(); // initiate the itinerary view protocol function
});

// declare a function that will enable a user to click on any of the created list elements and open up the editing properties / tool panel
enableListItemEditingProtocol = () => {

    // select all items that have been created up until this point
    let items = document.querySelectorAll('.item');
    
    // loop through each of the list item elements
    items.forEach(element => {
        // add an event listener to each list item element
        element.addEventListener('click', ()=> {

            console.log('items element has been clicked'); // test the event listener has been attached to the required elements
            element.style.background = 'red'; // test that the element has an interactive function with the current user

            // select all the info elements that have been created up until this point
            let info =  element.querySelectorAll('.info');
            
            // loop through all current info inside the clicked element
            for (let i = 0; i < info.length; i++) {
                info[i].setAttribute('contenteditable', true); // set all info elements inside the clicked element to content editable
                info[i].classList = 'editing-items'; // set all info elements class name to current action [ editing ]
                info[0].focus(); // highlight and focus the user's to the first clicked element info item
            }
            
            return
        });
    });

    console.log(items); // test that all items have been selected once declared

    return
}





























// create a color scheme assignment function for the created list item elements
assignListItemColor = () => {

    // set a colors array for the created list items
    let colors = [
        'red', 'blue', 'limegreen', 'orange', 'purple'
    ];

    // select all the list item elements
    let listItems = document.querySelectorAll('.item');

    // loop through all created list item elements
    for( let i = 0; i < listItems.length; i++ ) {

        if (listItems.length === 1) {
            // assign the list item background colors to the color array object
            listItems[0].style.background = colors[0];
        }
        else if (listItems.length === 2) {
            // assign the list item background colors to the color array object
            listItems[0].style.background = colors[0];
            listItems[1].style.background = colors[1];
        }
        else if (listItems.length === 3) {
            // assign the list item background colors to the color array object
            listItems[0].style.background = colors[0];
            listItems[1].style.background = colors[1];
            listItems[2].style.background = colors[2];
        }
        else if (listItems.length === 4) {
            // assign the list item background colors to the color array object
            listItems[0].style.background = colors[0];
            listItems[1].style.background = colors[1];
            listItems[2].style.background = colors[2];
            listItems[3].style.background = colors[3];
        }
        else {
            // assign the list item background colors to the color array object
            listItems[0].style.background = colors[0];
            listItems[1].style.background = colors[1];
            listItems[2].style.background = colors[2];
            listItems[3].style.background = colors[3];
            listItems[4].style.background = colors[4];

            // remove the colorize button from itinerary overview section component
            colorize.style.display = 'none';

            // remove the form component from the itinerary setup section component
            form.style.display = 'none';
        }
        
        console.log(listItems); // test selection all of list item elements

        return
    }
}



