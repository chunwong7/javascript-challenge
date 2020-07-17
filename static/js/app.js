var tableData = data;

var button = d3.select('#filter-btn')
var tableBody = d3.select('tbody')
var clearbutton = d3.select('#clear-btn')
//var dropmenu = d3.select('#dropdownMenuLink') 
var dropdown = d3.select('#filter-by-btn')
var form_default = d3.select('#filterby-null')
var form_by_date = d3.select('#filterby-date')
var form_by_city = d3.select('#filterby-city')
var form_by_state = d3.select('#filterby-state')
var form_by_country = d3.select('#filterby-country')
var form_by_shape = d3.select('#filterby-shape')
//var form_by_dur = d3.select('#filterby-minutes')
let selector = 'default'
//var return_values = ['date', 'city', 'state', 'country', 'shape', 'minutes']
clearbutton.on('click', cleartable)

function cleartable(){
    tableBody.html("")
}
function createtable(aliens){
    tableBody.html("")
    Object.entries(aliens).forEach(([key, value]) => {
        let row = tableBody.append('tr')
        let cell1 = row.append("td")
        cell1.text(value.datetime)
        let cell2 = row.append("td")
        cell2.text(value.city)
        let cell3 = row.append("td")
        cell3.text(value.state)
        let cell4 = row.append("td")
        cell4.text(value.country)
        let cell5 = row.append("td")
        cell5.text(value.shape)
        let cell6 = row.append("td")
        cell6.text(value.durationMinutes)
        let cell7 = row.append("td")
        cell7.text(value.comments)   
    })
}


button.on('click', function(){
    event.preventDefault()
    if (selector === 'default'){
        alert('Please choose a filter')
    }
    else {
        let inputelement = d3.selectAll('.chosenform')
        let inputdata = inputelement.property('value')

        if (selector === 'date'){
            let filtereddata = tableData.filter(ufo => ufo.datetime === inputdata)
            createtable(filtereddata)
        }
        if (selector === 'city'){
            let filtereddata = tableData.filter(ufo => ufo.city === inputdata)
            createtable(filtereddata)
        }
        if (selector === 'state'){
            let filtereddata = tableData.filter(ufo => ufo.state === inputdata)
            createtable(filtereddata)
        }
        if (selector === 'country'){
            let filtereddata = tableData.filter(ufo => ufo.country === inputdata)
            createtable(filtereddata)
        }
        if (selector === 'shape'){
            let filtereddata = tableData.filter(ufo => ufo.shape === inputdata)
            createtable(filtereddata)
        }
    }
    //if (selector === 'minutes'){

        //let filtereddata = tableData.filter(ufo => ufo.durationMinutes === inputdate)
        //createtable(filtereddata)
    //}

    //let filtereddata = tableData.filter(ufo => ufo.datetime === inputdate)
    //tableBody.html("")
    //Object.entries(filtereddata).forEach(([key, value]) => {
        //let row = tableBody.append('tr')
        //let cell1 = row.append("td")
        //cell1.text(value.datetime)
        //let cell2 = row.append("td")
        //cell2.text(value.city)
        //let cell3 = row.append("td")
        //cell3.text(value.state)
        //let cell4 = row.append("td")
        //cell4.text(value.country)
        //let cell5 = row.append("td")
        //cell5.text(value.shape)
        //let cell6 = row.append("td")
        //cell6.text(value.durationMinutes)
        //let cell7 = row.append("td")
        //cell7.text(value.comments)    
    //});
})

dropdown.on('change', function(){
    selector = dropdown.property('value');
    //console.log(selector)
    //selectedform = return_values.filter(form => form === selector);
    if (selector === 'date') {
        form_default.style('display', 'none').attr('class', 'form-control')
        form_by_date.style('display', 'block').attr('class', 'form-control chosenform')
        form_by_city.style('display', 'none').attr('class', 'form-control')
        form_by_state.style('display', 'none').attr('class', 'form-control')
        form_by_country.style('display', 'none').attr('class', 'form-control')
        form_by_shape.style('display', 'none').attr('class', 'form-control')
        //form_by_dur.style('display', 'none').attr('class', 'form-control')
    }
    else if (selector === 'city') {
        form_default.style('display', 'none').attr('class', 'form-control')
        form_by_date.style('display', 'none').attr('class', 'form-control')
        form_by_city.style('display', 'block').attr('class', 'form-control chosenform')
        form_by_state.style('display', 'none').attr('class', 'form-control')
        form_by_country.style('display', 'none').attr('class', 'form-control')
        form_by_shape.style('display', 'none').attr('class', 'form-control')
        //form_by_dur.style('display', 'none').attr('class', 'form-control')
        
    }
    else if (selector === 'state') {
        form_default.style('display', 'none').attr('class', 'form-control')
        form_by_date.style('display', 'none').attr('class', 'form-control')
        form_by_city.style('display', 'none').attr('class', 'form-control')
        form_by_state.style('display', 'block').attr('class', 'form-control chosenform')
        form_by_country.style('display', 'none').attr('class', 'form-control')
        form_by_shape.style('display', 'none').attr('class', 'form-control')
       //form_by_dur.style('display', 'none').attr('class', 'form-control')
        
    }
    else if (selector === 'country') {
        form_default.style('display', 'none').attr('class', 'form-control')
        form_by_date.style('display', 'none').attr('class', 'form-control')
        form_by_city.style('display', 'none').attr('class', 'form-control')
        form_by_state.style('display', 'none').attr('class', 'form-control')
        form_by_country.style('display', 'block').attr('class', 'form-control chosenform')
        form_by_shape.style('display', 'none').attr('class', 'form-control')
        //form_by_dur.style('display', 'none').attr('class', 'form-control')
        
    }
    else if (selector === 'shape') {
        form_default.style('display', 'none').attr('class', 'form-control')
        form_by_date.style('display', 'none').attr('class', 'form-control')
        form_by_city.style('display', 'none').attr('class', 'form-control')
        form_by_state.style('display', 'none').attr('class', 'form-control')
        form_by_country.style('display', 'none').attr('class', 'form-control')
        form_by_shape.style('display', 'block').attr('class', 'form-control chosenform')
        //form_by_dur.style('display', 'none').attr('class', 'form-control')
        
    }
    //else if (selector === 'minutes') {
        //form_default.style('display', 'none').attr('class', 'form-control')
        //form_by_date.style('display', 'none').attr('class', 'form-control')
        //form_by_city.style('display', 'none').attr('class', 'form-control')
        //form_by_state.style('display', 'none').attr('class', 'form-control')
        //form_by_country.style('display', 'none').attr('class', 'form-control')
        //form_by_shape.style('display', 'none').attr('class', 'form-control')
        //form_by_dur.style('display', 'block').attr('class', 'form-control chosenform')
    //}
    else if (selector === 'default') {
        form_default.style('display', 'block').attr('class', 'form-control')
        form_by_date.style('display', 'none').attr('class', 'form-control')
        form_by_city.style('display', 'none').attr('class', 'form-control')
        form_by_state.style('display', 'none').attr('class', 'form-control')
        form_by_country.style('display', 'none').attr('class', 'form-control')
        form_by_shape.style('display', 'none').attr('class', 'form-control')
        //form_by_dur.style('display', 'none').attr('class', 'form-control')
    }
    return selector
});

