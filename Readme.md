Pour générer les certificats auto-signés :
linux : openssl req -nodes -new -x509 -keyout server.key -out server.cert -days 365
windows : C:\'Program Files'\Git\usr\bin\openssl.exe req -nodes -new -x509 -keyout server.key -out server.cert -days 365
