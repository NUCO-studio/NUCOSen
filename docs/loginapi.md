# ニコニコ ログインAPI

## URL
- Host: account.nicovideo.jp
- POST /login/redirector

## Input
### Header
```
POST /login/redirector?show_button_twitter=1&site=niconico&show_button_facebook=1 HTTP/1.1
Host: account.nicovideo.jp
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:87.0) Gecko/20100101 Firefox/87.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8
Accept-Language: ja,en-US;q=0.7,en;q=0.3
Accept-Encoding: gzip, deflate, br
Content-Type: application/x-www-form-urlencoded
Content-Length: 61
Origin: https://account.nicovideo.jp
DNT: 1
Connection: keep-alive
Referer: https://account.nicovideo.jp/login
Cookie: nicolivehistory=%5B330423192%2C330431847%2C330543938%2C330547868%2C330544078%2C330453689%2C330521066%2C330561762%2C330641188%2C330644789%2C330683223%2C330686587%2C330685709%5D; _ts_yjad=1613484707801; common-header-oshirase-open-date=2021-02-18T06:33:16.141Z; _ss_pp_id=a45268e750e3214dffe1613493411979; nicohistory=sm9364766%3A1614068761%3A1614068761%3Abed9bfc122e6aeed%3A1%2Csm37126158%3A1613629583%3A1613629583%3A91e1dd029327b56b%3A1; nico_gc=srch_s%3Dn%26srch_o%3Dd; nicosid=1614315306742.750294422; registrationActionTrackId=tijRsEN09F_1614477904974
Upgrade-Insecure-Requests: 1
Pragma: no-cache
Cache-Control: no-cache
```

### Payload
```
mail_tel=kotani.takumi%40g.wakayama-u.jp&password=nijikawa673
```

## Output
### Note
All Status code of response is "302 Found".
Please ignore redirect.

### Success
```
Location: https://www.nicovideo.jp/
Set-Cookie: user_session=deleted; Max-Age=0; Expires=Sun, 28 Feb 2021 02:05:20 GMT; Path=/
Set-Cookie: user_session=user_session_97479900_2a51ca85fb4014c599dad697637c81ba488addbea90a20fbcfed6c56dedf259e; Max-Age=2591999; Expires=Tue, 30 Mar 2021 02:05:19 GMT; Path=/; Domain=.nicovideo.jp
Set-Cookie: user_session_secure=OTc0Nzk5MDA6OXRpekNjZ1BZOTlwZlRSSUpkQnRGSUk1N1kuSy1QSnNDM0tuei5xNEVCSw; Max-Age=2591999; Expires=Tue, 30 Mar 2021 02:05:19 GMT; Path=/; Domain=.nicovideo.jp; Secure; HTTPOnly
Set-Cookie: registrationActionTrackId=; Max-Age=-86400; Expires=Sat, 27 Feb 2021 02:05:20 GMT; Path=/; Domain=.nicovideo.jp; Secure; HTTPOnly
```

### Error
#### Username or Password is not valid
```
Location: https://account.nicovideo.jp/login?site=niconico&sec=header_pc&next_url=%2F&facebook=1&message=cant_login&twitter=1
Set-Cookie: mail_for_retry=kotani.takumi%40wakayama-u.jp; Max-Age=60; Expires=Sun, 28 Feb 2021 02:14:04 GMT; Path=/; Domain=.nicovideo.jp; Secure; HTTPOnly
```
