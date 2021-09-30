# build environment
FROM node:16.6.2-alpine as build
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --prod
COPY . ./
RUN yarn build

# production environment
FROM nginxinc/nginx-unprivileged:1.20.1-alpine
ARG SERVICE_VERSION
ENV SERVICE_VERSION=$SERVICE_VERSION

COPY nginx.conf /etc/nginx/nginx.conf

USER root
RUN apk add --no-cache bash tini

COPY --from=build /app/build /usr/share/nginx/html

COPY entrypoint.sh /
COPY build-config.sh /
RUN chmod +x /build-config.sh /entrypoint.sh

RUN chown -R nginx:nginx /usr/share/nginx/html

ENTRYPOINT ["/sbin/tini", "--"]

CMD ["/entrypoint.sh"]

USER nginx
