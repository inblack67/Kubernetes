import express from 'express';
import Redis from 'ioredis';
import dotenv from 'dotenv';

const main = async () => {
  dotenv.config();
  console.log(`my envs = `, process.env);
  const redis = new Redis({
    host: process.env.REDIS_HOST!,
    port: +process.env.REDIS_PORT!,
  });
  const app = express();

  app.get('/', async (_, res) => {
    const count = await redis.get('count');
    if (count) {
      await redis.set('count', +count + 1);
    } else {
      await redis.set('count', 1);
    }
    const newCount = await redis.get('count');
    res.json({ success: true, visited: +newCount! });
    res.end();
  });

  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server started on PORT ${PORT}`);
  });
};

main().catch((err) => console.error(err));
