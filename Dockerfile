FROM node:18-alpine AS external-website
LABEL Developers="@akakshuki and Planthor team"
WORKDIR /app
COPY . .
RUN npm ci
RUN npm run build_node
RUN rm -rf src/ static/ .devcontainer/ svelte.config.js tsconfig.json
EXPOSE 3000
ENTRYPOINT ["node","build/index.js"]
