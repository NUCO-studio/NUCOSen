function getToken(code) {
    let url = "https://oauth.nicovideo.jp/oauth2/token"
    let request = new XMLHttpRequest();
    let data = ""
    + "grant_type=authorization_code&"
    + "code=" + code + "&"
    + "redirect_uri=https%3A%2F%2Ftest.nucosen.live%2Fauth%2F&"
    + "client_id=Ux6enUTxHUFI0PAc&"
    request.open('POST', url);
    request.onreadystatechange = function () {
        console.time("REQUEST")
        if (request.readyState != 4) {
            // リクエスト中
        } else if (request.status != 200) {
            // 失敗
            console.log("BAD");
            console.timeEnd("REQUEST")
            console.log(request.status);
            console.log(request.responseText);
        } else {
            // 送信成功
            console.log("GOOD");
            console.timeEnd("REQUEST")
            tokenGet(request.responseText);
        }
    };
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    request.send(data);
}

function tokenGet(result) {
    console.log(result);
}