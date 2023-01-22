# NLW Setup - Habits 

![image](https://user-images.githubusercontent.com/23152592/213938237-70a6baf1-f2b7-42cc-a07e-42eb7388c099.png)

# Contexto
Este projeto trata-se de uma aplicação para criação e acompanhamento de hábitos do seu dia a dia.

## Técnologias usadas

Front-end:
> Desenvolvido usando: [React](https://pt-br.reactjs.org/), Typescript, [Tailwind CSS](https://tailwindcss.com/), [Vite](https://vitejs.dev/), [Radix-ui](https://www.radix-ui.com/), [axios](https://axios-http.com/ptbr/docs/intro), [dayjs](https://day.js.org/), [Phosphors-react](https://phosphoricons.com/)

Back-end:
> Desenvolvido usando: [NodeJS](https://nodejs.org/en/), [Fastify](https://www.fastify.io/), [Prisma](https://www.prisma.io/), [Sqlite](https://www.sqlite.org/index.html), Typescript, [zod](https://zod.dev/), [tsx](https://www.npmjs.com/package/tsx)

Mobile:
> Desenvolvido usando: [Expo](https://expo.dev/), [React-native](https://reactnative.dev/), [nativewind](https://www.nativewind.dev/), axios, dayjs, react-navigation, Typescript

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Fastify](https://img.shields.io/badge/fastify-%23000000.svg?style=for-the-badge&logo=fastify&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
![SQLite](https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white)
![React Native](https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Expo](https://img.shields.io/badge/expo-1C1E24?style=for-the-badge&logo=expo&logoColor=#D04A37)


## Para rodar localmente

#### Clone o repo:

```bash
git clone git@github.com:Vitosoaresp/nlw-habits.git
```

#### Entre na pasta do projeto:

```bash
cd nlw-habits/ 
```

### Instalando Dependências

> Backend
```bash
cd server/ 
npm install
``` 
> Frontend
```bash
cd web/
npm install
``` 
> Mobile
```bash
cd mobile/
npm install
```

## Configurações para o banco de dados

##### URL do database para o prisma
 - Caso queira usar o sqlite mesmo, so faça a copia do env.
```bash
cd server/ && cp .env-example .env
```
##### Rode a seed
```bash
npx prisma db seed
```


## Executando aplicação

* Para rodar o back-end:

  ```bash
  cd server && npm run dev
  ```
* Para web:

  ```bash
    cd web/ && npm run dev
  ```
* Para mobile:
  
  ##### Caso não tenha preparado ainda o seu ambiente mobile clique [aqui.](https://react-native.rocketseat.dev/)
  
  ```bash
    cd mobile && npm start
  ```

## Fotos

![image](https://user-images.githubusercontent.com/23152592/213938237-70a6baf1-f2b7-42cc-a07e-42eb7388c099.png)
![image](https://user-images.githubusercontent.com/23152592/213939660-7b7c7aef-8e2b-4ebc-9103-9e5eb2d7e07b.png)
![image](https://user-images.githubusercontent.com/23152592/213939693-bc682536-582b-4cf1-9a65-e891806cf99c.png)
