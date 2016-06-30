requirejs(['jquery','handlebars'], function($,Handlebars) {
    $(document).ready(function() {
        $.ajax({
            type: 'GET',
            url: 'categories.json',
            dataType: 'json',

            success: function(data) {
                displayData(data);
            },

            error: function(response) {
                console.log('error:', response);
            }

        });



        /*function displayData(data) {
            var $tbody = $('.tbody'),
                dataArray = data;

            dataArray.forEach(function(object) {
                var id = object.id,
                    gender = object.gender,
                    first_name = object.first_name,
                    last_name = object.last_name,
                    email = object.email,
                    ip = object.ip_address,

                    children = object.children,
                    subChildren = object.children.children;

                if (subChildren) {
                    var ssId = subChildren.id,
                        ssName = subChildren.name,
                        ssColor = subChildren.color,
                        ssPassword = subChildren.password;

                    var subElementsToAppend2 = '<div class="subElementsToAppend2">' +
                        '<div>' + ssId + '</div>' +
                        '<div>' + ssName + '</div>' +
                        '<div>' + ssColor + '</div>' +
                        '<div>' + ssPassword + '</div>' +
                        '</div>'

                }

                if (object.children) {
                    var sId = children.id,
                        sCurrency = children.currency,
                        sCompany = children.company,
                        sCountry = children.country;

                    var subElementsToAppend = '<div class="subElementsToAppend">' +
                        '<div>' + sId + '</div>' +
                        '<div>' + sCurrency + '</div>' +
                        '<div>' + sCompany + '</div>' +
                        '<div>' + sCountry + '</div>' +
                        '<div>' + '<br>' + subElementsToAppend2 + '<br>' + '</div>'
                    '</div>'

                }

                var rowToAppend = '<tr>' +
                    '<td>' + id + '</td>' +
                    '<td>' + gender + '</td>' +
                    '<td>' + first_name + '</td>' +
                    '<td>' + last_name + '</td>' +
                    '<td>' + email + '</td>' +
                    '<td>' + ip + '</td>' +
                    '<td class="subElements">' + subElementsToAppend + '</td>' +
                    '</tr>';

                $tbody.append(rowToAppend);
            })
        }*/

        function displayData(data){
            var source = $("#rowElement").html();
            var template = Handlebars.compile(source);
            var html = template(data);

            $(".tbody").append(html);
        }
    })

})
