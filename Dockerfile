# Choose the base image for the build stage
FROM --platform=linux/arm64 node:16-alpine as build

# Create the working directory
WORKDIR /app

# Install python and make
RUN apk add --update --no-cache python3 make g++

# Copy the entire monorepo into the working directory
COPY . .

# Install dependencies
RUN npm install --legacy-peer-deps

# Generate the Prisma client
RUN cd /app/apps/api && npx prisma generate

# Build the application
RUN cd /app/apps/api && npm run build

# Start the final image
FROM --platform=linux/arm64 node:16-alpine

# Create a new directory for the app
WORKDIR /app

# Install python and make
RUN apk add --update --no-cache python3 make g++

# Copy the built files from the previous stage
COPY --from=build /app/apps/api/dist ./dist

# Copy the package.json file
COPY --from=build /app/apps/api/package.json ./package.json
COPY --from=build /app/apps/api/prisma ./prisma

# Install dependencies in the new directory
RUN npm install --omit=dev

# Expose the application port
EXPOSE 3000

# Start the application
CMD ["node", "dist/src/main"]
