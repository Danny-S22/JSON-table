$(document).ready(function () {
    $.getJSON('/data', function(data) {
        renderTable(data);

        $('#searchButton').click(function() {
            const searchText = $('#userInput').val().toLowerCase();
            const filteredData = data.filter(user => 
                user.username.toLowerCase().includes(searchText) || 
                user.email.toLowerCase().includes(searchText)
            );
            renderTable(filteredData);
        });
    });

    function renderTable(data) {
        var tableBody = $('#userTable');
        tableBody.empty();
        $.each(data, function(index, user) {
            var row = $('<tr></tr>');
            row.append('<td>' + user.username + '</td>');
            row.append('<td>' + user.email + '</td>');
            row.append('<td>' + user.gender + '</td>');
            tableBody.append(row);
        });
    }
});