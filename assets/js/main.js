// https://api.weatherapi.com/v1/current.json?key=6bc15cfb31414fbda9f95625221905&q=baku
jQuery(document).ready(function($) {
    $("#Submuit").click(function( event ) {
        var val = $(("#inputare")).val()
        console.log(val);
        try {   
            $.getJSON(`https://api.weatherapi.com/v1/current.json?key=6bc15cfb31414fbda9f95625221905&q=${val}`, function(data) {
                console.log(data.responseText);
                $(".test").html(`
                <img src="${data.current.condition.icon}" alt="">
                <p>Degree ${data.current.temp_c}</p>
                <p>Faranheigt ${data.current.temp_f}</p>
                <p>${data.location.country}</p>
                `);
            } );
        } catch (error) {
            alert("Enter correct")
        }
  });

    });