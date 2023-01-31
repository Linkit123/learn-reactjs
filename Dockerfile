FROM node:14.4.0-alpine as build
# RUN apt update -y && apt upgrade -y && apt add --no-cache git
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app/package.json
COPY .npmrc .
# COPY package-lock.json /app/package-lock.json
COPY /public/media /app/public/media
# RUN apk update && apk upgrade && apk add --no-cache git
ENV NODE_OPTIONS="--max-old-space-size=8192"
RUN npm install --save
COPY . /app
RUN env-cmd -f .env npm run build

FROM nginx:1.16.0-alpine
COPY --from=build /app/build/index.html /usr/share/nginx/html
# RUN mkdir /usr/share/nginx/html/public
# COPY --from=build /app/build /usr/share/nginx/html/public
COPY --from=build /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]