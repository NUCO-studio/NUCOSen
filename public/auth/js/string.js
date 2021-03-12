function getQueryString(string)
{
    let result = {};
    if( 1 < string.length )
    {
        // 最初の1文字 (?記号) を除いた文字列を取得する
        let query = string.substring( 1 );

        // クエリの区切り記号 (&) で文字列を配列に分割する
        let parameters = query.split( '&' );

        for( let i = 0; i < parameters.length; i++ )
        {
            // パラメータ名とパラメータ値に分割する
            let element = parameters[ i ].split( '=' );

            let paramName = decodeURIComponent( element[ 0 ] );
            let paramValue = decodeURIComponent( element[ 1 ] );

            // パラメータ名をキーとして連想配列に追加する
            result[ paramName ] = paramValue;
        }
    }
    return result;
}