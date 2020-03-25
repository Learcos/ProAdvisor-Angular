### STAGE 1: Build ###
FROM node AS build
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --no-optional

### STAGE 2: Run ###
FROM nginx:alpine
COPY --from=build /usr/src/app/dist/R-Pro-Angular /usr/share/nginx/html
COPY /docker/nginx-custom.conf /etc/nginx/conf.d/default.conf