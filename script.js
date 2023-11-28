        function gen(){
            var text = document.getElementById("mytext").value;
            document.getElementById("myimage").src = "https://chart.googleapis.com/chart?cht=qr&chs=200x200&chl=" + text;
        }