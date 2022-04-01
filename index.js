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

        if ( text[0].innerHTML === '' ) {
            // write the form input data values to the text information elements
            text[0].innerHTML = destination.value;
            text[1].innerHTML = city.value;
            text[2].innerHTML = timeframe.value + ' days';
        }
        else {
            console.log('loop through item elements');

            console.log(item);

            // select the current created item for data write method
            let current = item.querySelectorAll('.info');
            console.log(current); // test the current output elements

            // set the form data values to the current text elements
            current[0].innerHTML = destination.value;
            current[1].innerHTML = city.value;
            current[2].innerHTML = timeframe.value + ' days';
        }
    }

}

// // delcare a function that will write the form data values to the newly created list item element
// writeDataToElement = () => {
    
//     console.log('write data function active'); // test the function has been called

// }

// // delcare a function that will write the form data values to the newly created list item element
// writeDataToElement = () => {

//     console.log('write data function active'); // test the function has been called

//     // test the validation output
//     console.log('dest : ' + destination.value + ' city : ' + city.value + ' days: ' + timeframe.value);

//     // select the first list item element that has been created
//     let item = document.querySelector('.item');

//     // validate if the item elements first child has an empty string or null value
//     if ( item.firstChild.innerHTML === '' ) {

        

//         console.log(item.firstChild);
//         // select all created text information elements
//         let info = document.querySelectorAll('.info');
//         console.log(info);

//         // write the form input data values to the text information elements
//         info[0].innerHTML = destination.value;
//         info[1].innerHTML = city.value;
//         info[2].innerHTML = timeframe.value + ' days';
//     }
//     else {

        
//         let itemAll = document.querySelectorAll('.item');

//         for ( let i = 0; i < itemAll.length; i++ ) {

//             console.log('more than 1 item has been created');

//             let nextItem = itemAll[ i + 1];

//             let info = nextItem.querySelectorAll('.info');

//             if (nextItem.firstChild.innerHTML === '') {
//                 info[0].innerHTML = destination.value;
//                 info[1].innerHTML = city.value;
//                 info[2].innerHTML = timeframe.value + ' days';

                
//             }
//             else {
//                 // let info = nextItem.querySelectorAll('.info');
//                 console.log(info);

//                 i++;

//                 // nextItem.style.background = 'black';
//             }
//         return
//         }
//         return
//     }

    

    
// }

