export async function submitSearch(searchObject){
    if(searchObject.isPerson){

    }else{
        alert("here")
        // Perform Find Place query
        var axios = require('axios');

        const url = "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=Museum%20of%20Contemporary%20Art%20Australia&inputtype=textquery&fields=formatted_address%2Cname%2Crating%2Copening_hours%2Cgeometry&key=AIzaSyC_HTYsXRMRVQKUwMNU1zEBvj81qhnzgGw"
        // fetch(url, {mode: 'cors'})
        // .then(function(response) {
        // alert(JSON.stringify(response.data))
        // }).catch(function(error) {  
        // console.log('Request failed', error)  
        // });

        var config = {
            method: 'get',
            url: 'https://maps.googleapis.com/maps/maps/api/place/findplacefromtext/json?input=Museum%20of%20Contemporary%20Art%20Australia&inputtype=textquery&fields=formatted_address%2Cname%2Crating%2Copening_hours%2Cgeometry&key=AIzaSyC_HTYsXRMRVQKUwMNU1zEBvj81qhnzgGw',
            headers: {}
        };
        
        axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            console.log(error);
        });
        
        // console.log(response.json());
    }
}