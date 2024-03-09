FROM node:18-alpine AS external-website
LABEL Developers="@akakshuki and Planthor team"
WORKDIR /app/Planthor/Planthor_ClientFrontEndWebApp
COPY . .
RUN npm ci
RUN npm run build_node
# FROM node:18-alpine
# WORKDIR /app
# COPY --from=external-website /app/Planthor/Planthor_ClientFrontEndWebApp/build ./build
# COPY --from=external-website /app/Planthor/Planthor_ClientFrontEndWebApp/node_modules .
# RUN npm install
# This is the command that will be run inside the image when you tell Docker to start the container
CMD ["node","build/index.js"]