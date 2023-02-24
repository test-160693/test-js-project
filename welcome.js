function fire_open_api_submit() {

        var search = {}
        search["data"] = $("#text").val();
        //search["email"] = $("#email").val();
        search["targetLng"] = $("#countryID1").val();

        console.log("data === "+$("#text").val());

        $("#btn-search").prop("disabled", true);

        $.ajax({
            type: "POST",
            contentType: "application/json",
            url: "/api/v1/open/translate",
            data: JSON.stringify(search),
            dataType: 'json',
            cache: false,
            timeout: 600000,
            success: function (data) {
                var json = "<h4>Ajax Response</h4><pre>"
                    + JSON.stringify(data, null, 4) + "</pre>";
                var translatedText = data.data;
                var detectedLng = data.detectedSourceLanguage;
                console.log("data === "+translatedText);
                $('#translatedText').html(translatedText);
                console.log("SUCCESS : ", data);
                $("#translatedText").prop("disabled", true);

            },
            error: function (e) {

                var json = "<h4>Ajax Response</h4><pre>"
                    + e.responseText + "</pre>";
                $('#feedback').html(json);

                console.log("ERROR : ", e);
                $("#translatedText").prop("disabled", true);

            }
        });
