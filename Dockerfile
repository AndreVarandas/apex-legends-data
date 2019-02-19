#
# Webapp Dockerfile
#

# Do the npm install or yarn install in the full image
FROM mhart/alpine-node:11
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn --production

# Copy over node_modules, etc from that stage to the smaller base image
FROM mhart/alpine-node:base-8
WORKDIR /app
COPY --from=0 /app .
COPY . .
EXPOSE 3000
CMD ["node", "src/index.js"]