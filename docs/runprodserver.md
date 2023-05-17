# Run Production Server

### Built with:

- Docker: [https://www.docker.com/](https://www.docker.com/)
- Nginx: [https://nginx.org/end/](https://nginx.org/en/)
- Let's Encrypt [https://letsencrypt.org/](https://letsencrypt.org/)

# How To Start

```
1. Copy the .env.docker-example and rename to .env
2. Set .env variables as needed
```

### SSL Support

Configure the following in .env

- LE_DOMAIN=example.com
- LE_EMAIL=email@example.com
- LE_OPTIONS= (Extra certbot switches. ex. --staging) *(Optional)*
- RENEW_INTERVAL= (Any valid *sleep* values. Default: 12h) *(Optional)*

*Automatic Registration and renewal of certificates is provided using certbot by Let's Encrypt.*

### Build and Start

```bash
docker compose build
docker compose up -d
```

## Socket.IO Admin UI

:::danger
At the moment, this interface is not secured! Securing it is on the agenda.

Either secure it yourself or do not run the admin ui container.
:::

```
http://example.com:85

Enter 'http://example.com' as the Server URL
```
