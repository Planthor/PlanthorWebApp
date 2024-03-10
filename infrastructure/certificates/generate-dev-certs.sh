#!/bin/bash

openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -days 365 -nodes -subj "/C=VN/ST=Ho Chi Minh City/L=Ho Chi Minh City/O=Planthor/OU=Planthor/CN=localhost"
openssl pkcs12 -export -out certificate.p12 -inkey key.pem -in cert.pem -passout pass:Planthor@123
