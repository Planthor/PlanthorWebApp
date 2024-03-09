FROM node:alpine3.18 AS build
LABEL Developers="@akakshuki and Planthor team"
WORKDIR /app
COPY . .
RUN npm install --ignore-scripts
RUN npm run build_node

FROM node:alpine3.18
WORKDIR /app
COPY package.json ./
COPY --from=build /app/build/ /app/build
COPY --from=build /app/node_modules/ /app/node_modules
USER planthordev
ENTRYPOINT ["node","build/index.js"]