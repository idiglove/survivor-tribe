import mongoose, { Connection } from "mongoose";

// let cachedConnection: Connection | null = null;
global.cachedConnection = null;
// Function to establish a connection to MongoDB
export async function connectToMongoDB() {
  // If a cached connection exists, return it
  if (global.cachedConnection) {
    console.log("Using cached db connection");
    return global.cachedConnection;
  }
  try {
    // If no cached connection exists, establish a new connection to MongoDB
    const cnx = await mongoose.connect(process.env.MONGODB_URI!);
    // Cache the connection for future use
    global.cachedConnection = cnx.connection;
    // Log message indicating a new MongoDB connection is established
    console.log("New mongodb connection established");
    // Return the newly established connection
    return global.cachedConnection;
  } catch (error) {
    // If an error occurs during connection, log the error and throw it
    console.log(error);
    throw error;
  }
}
