import { createConnection } from "typeorm";

export const connectDatabase = async () => {
  await createConnection({
    type: "sqlite",
    database: "database.sqlite",
    synchronize: true,
    entities: [__dirname + "/entity/*.ts"],
  });
};
