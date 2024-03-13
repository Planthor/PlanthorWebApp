FROM node:alpine3.18 AS build
WORKDIR /app
COPY . .
RUN npm install --ignore-scripts
RUN npm run build:node

FROM node:alpine3.18
LABEL Developers="@akakshuki and Planthor team"
WORKDIR /app
COPY package.json ./
COPY --from=build /app/build/ /app/build
COPY --from=build /app/node_modules/ /app/node_modules
USER planthordev
ENTRYPOINT ["node","build/index.js"]
