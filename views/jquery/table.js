//THE MAIN STRUCTURE OF THE CODE WAS TAKING FROM https://github.com/mikhail-cct/CA1-In-class-Demo
function draw_table()
{
	$("#results").empty();
	$.getJSONuncached = function (url)
	{
		return $.ajax(
		{
			url: url,
			type: 'GET',
			cache: false,
			success: function (html)
			{
				$("#results").append(html);
				select_row();
			}
		});
	};
	$.getJSONuncached("/get/html")
};

function select_row()
{
	$("#table tbody tr[id]").click(function ()
	{
		$(".selected").removeClass("selected");
		$(this).addClass("selected");
		var games = $(this).prevAll("tr").children("td[colspan='2']").length - 1;
        var game = $(this).attr("id") - 1;
         console.log(games, game);
        delete_row(games, game);
        document.getElementById('gamesID').value = games;   //passing ID's of the row to the hiden input in index.html to pass after to the eding function  in index.js
        document.getElementById('gameID').value = game;
	})
};

function delete_row(gas, ga)
{
	$("#delete").click(function ()
	{
		$.ajax(
		{
			url: "/post/delete",
			type: "POST",
			data:
			{
				games: gas,
				game: ga
			},
			cache: false,
			success: setTimeout(draw_table, 1000)
		})
	})
};
    //TAKEN FROM https://github.com/okowl/CA_2Barbers_web
    //Function to change betwen tabs add and edit
    function opentab(evt, usertype) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(usertype).style.display = "block";
        evt.currentTarget.className += " active";
    }

    document.getElementById("defaultOpen").click();
$(document).ready(function ()
{
	draw_table();
});