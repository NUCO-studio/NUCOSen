# -*- coding: utf-8 -*-
from requests import post
from pprint import pprint

def getNicoSession(mail_tel: str, password: str):
    """ログインを試み、セッションクッキーを返します

    Parameters
    ----------
    mail_tel : str
        ログインメールアドレス。
    password : str
        ログインパスワード。パスワードは平文で渡される必要があります

    Returns
    -------
    str
        生成された有効なログインセッション

    Raises
    ------
    ValueError
        ログイン情報が不正等の理由でログインに失敗した場合に発出されます
    """
    url = "https://account.nicovideo.jp/login/redirector"
    header = {"User-Agent": "NUCOSen Server"}
    payload = {"mail_tel": mail_tel, "password": password}
    resp = post(url, data=payload, headers=header, allow_redirects=False)
    try:
        return resp.cookies['user_session']
    except KeyError:
        raise ValueError


if __name__ == "__main__":
    pass