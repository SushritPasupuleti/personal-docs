---
sidebar_position: 1
---

# Introduction

Proxmox is a great tool for running virtual machines and containers. It's also a great tool for running a remote development server. This is a collection of guides and scripts to setup Proxmox to host all kinds of `Homelab` things.

All the services I'm running on my Proxmox instance.

## Table of Contents

- Setup

  - [Remote Development Server Setup](/docs/proxmox/remote-development-setup)

  - [GPU Passthrough](/docs/proxmox/gpu-passthrough)

  - [Docker Setup](/docs/proxmox/docker-setup)

- Apps

  - [Pihole](/docs/proxmox/pihole)

  - [Nginx Proxy Manager](#nginx-proxy-manager)

  - [n8n](#n8n)

### [Nginx Proxy Manager](https://nginxproxymanager.com/guide/#features)

Essential for all internal networking.

### [n8n](https://docs.n8n.io/hosting/installation/docker/)

For workflow automation

Run with:

```bash
docker run -it --rm \
    --name n8n \
    -p 5678:5678 \
    -v ~/.n8n:/home/node/.n8n \
    n8nio/n8n
```

Data is persisted to `.n8n`
