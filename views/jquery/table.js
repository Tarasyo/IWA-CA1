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
		delete_row(games, game);
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
function change_row(gas, ga){
    $("#edit").click(function (){
        $.ajax(
            {
            data:
            {
                name: result.ga.name,
            }
            })
    })

}

$(document).ready(function ()
{
	draw_table();
});