FROM node:18-alpine AS build
LABEL Developers="@akakshuki and Planthor team"
WORKDIR /app
COPY . .
RUN npm ci
RUN npm run build_node

FROM node:18-alpine
WORKDIR /app
COPY package.json ./
COPY --from=build /app/build/ /app/build
COPY --from=build /app/node_modules/ /app/node_modules
ENTRYPOINT ["node","build/index.js"]