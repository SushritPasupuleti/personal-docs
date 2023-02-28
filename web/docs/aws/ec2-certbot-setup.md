---
sidebar_position: 2
---

# Certbot Setup for Ubuntu-Server with Nginx

 Setting up certbot on ubuntu server (with EC2 support)

## Install Certbot

```bash
sudo add-apt-repository ppa:certbot/certbot
sudo apt-get update
sudo apt-get install python-certbot-nginx
```

## Certbot Setup

To autoconfigure Nginx (certbot will edit the config and automatically serve the certificates)

```bash
sudo certbot --nginx
```

Just generate a certificate (manually configure Nginx)

```bash
sudo certbot certonly --nginx
```

[Follow this if the above doesn't work](https://certbot.eff.org/lets-encrypt/ubuntufocal-nginx)

