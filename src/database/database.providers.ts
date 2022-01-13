import { createConnection } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () =>
      await createConnection({
        type: 'sqlite',
        database: ':memory:',
        entities: ['dist/**/*.entity{.ts,.js}'],
        synchronize: true,
      }),
  },
];
