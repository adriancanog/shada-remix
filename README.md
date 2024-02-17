# Shada Remix

Proyecto Shada.

## Set Up Prisma

Instalar paquetes de prisma:
```sh
npm install --save-dev prisma 
npm install @prisma/client
```

Iniciar prisma con Sqlite:
```sh
npx prisma init --datasource-provider sqlite
```

En caso de que el resultado sea correcto, por consola se observa el siguiente resultado:
```sh
Your Prisma schema was created at prisma/schema.prisma
You can now open it in your favorite editor.

warn You already have a .gitignore file. Don't forget to add `.env` in it to not commit any private information.

Next steps:
1. Set the DATABASE_URL in the .env file to point to your existing database. If your database has no tables yet, read https://pris.ly/d/getting-started
2. Run prisma db pull to turn your database schema into a Prisma schema.
3. Run prisma generate to generate the Prisma Client. You can then start querying your database.

More information in our documentation:
https://pris.ly/d/getting-started
```

Para subir cambios en la base de datos:

```sh
npx prisma db push
```


Para ver el prisma client:

```sh
npx prisma studio
```

Para correr el seed:

```sh
npx ts-node --require tsconfig-paths/register prisma/seed.ts
```