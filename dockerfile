# Use Node.js version 16 as base image
FROM node:16

# Set working directory to /app
WORKDIR /chat-microservice

# Copy package.json and package-lock.json to container
COPY backend/package*.json ./

# Install backend dependencies
RUN npm install

# Copy backend code to container
COPY backend .

# Set environment variables
#uri = mongodb+srv://dbChat:group12@cluster0.gochocx.mongodb.net/Chat
#uri = "mongodb+srv://dbChat:group12@cluster0.gochocx.mongodb.net/Chat?retryWrites=true&w=majority"
ENV NODE_ENV production
ENV PORT 3000
ENV MONGODB_URI mongodb+srv://dbChat:group12@cluster0.gochocx.mongodb.net/Chat?retryWrites=true&w=majority

# Expose port 3000 for incoming requests
EXPOSE 3000

# Start the Node.js server
CMD ["npm", "start"]
