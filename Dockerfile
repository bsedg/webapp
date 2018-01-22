FROM node:8-alpine as builder

RUN npm install -g npm@4.2.0
#RUN npm install -g angular-cli@1.6.3
#RUN npm install -g @angular-devkit/core

RUN mkdir /tmp/app
WORKDIR /tmp/app

COPY package.json /tmp/app
RUN npm install
RUN mkdir /app 
RUN cp -R ./node_modules /app 

WORKDIR /app 

COPY . .

RUN $(npm bin)/ng build --prod --build-optimizer

FROM nginx:1.13.3-alpine 

COPY nginx/default.conf /etc/nginx/conf.d/
RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /app/dist /usr/share/nginx/html/

CMD ["nginx", "-g", "daemon off;"]
