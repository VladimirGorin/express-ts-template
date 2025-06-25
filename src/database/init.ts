import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
  process.env.POSTGRES_DB_NAME || "",
  process.env.POSTGRES_DB_USER || "",
  process.env.POSTGRES_DB_PASSWORD || "",
  {
    host: process.env.POSTGRES_DB_HOST,
    port: parseInt(process.env.POSTGRES_DB_PORT || "5432"),
    dialect: "postgres",
    logging: false,
  }
);

sequelize
  .sync()
  .then(() => console.log("Database synced"))
  .catch((error) => {
    console.error(`Error while trying to connect the database: ${error}`);
  });
