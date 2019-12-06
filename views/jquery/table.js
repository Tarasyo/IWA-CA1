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
        document.getElementById('gamesID').value = games;
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
$(document).ready(function ()
{
	draw_table();
});