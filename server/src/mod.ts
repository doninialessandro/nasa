import { Application, send } from "https://deno.land/x/oak@v6.5.0/mod.ts";

const app = new Application();
const PORT = parseInt(Deno.env.get("PORT") || "5000", 10);

app.use(async (ctx, next) => {
  await next();
  const time = ctx.response.headers.get("X-Resposne-Time");
  console.log(`${ctx.request.method} ${ctx.request.url}: ${time}`);
});

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const delta = Date.now() - start;
  ctx.response.headers.set("X-Resposne-Time", `${delta}ms`);
});

app.use(async (ctx) => {
  const filePath = ctx.request.url.pathname;
  const fileWithList = [
    "/images/favicon.png",
    "/javascripts/script.js",
    "/index.html",
    "/stylesheets/style.css",
  ];
  if (fileWithList.includes(filePath)) {
    await send(ctx, filePath, {
      root: `${Deno.cwd}/../client/public`,
    });
  }
});

app.use((ctx) => {
  ctx.response.body = `
    {___     {__      {_         {__ __        {_       
    {_ {__   {__     {_ __     {__    {__     {_ __     
    {__ {__  {__    {_  {__     {__          {_  {__    
    {__  {__ {__   {__   {__      {__       {__   {__   
    {__   {_ {__  {______ {__        {__   {______ {__  
    {__    {_ __ {__       {__ {__    {__ {__       {__ 
    {__      {__{__         {__  {__ __  {__         {__
                    Mission Control API`;
});

if (import.meta.main) {
  console.log(`Starting server on port ${PORT}...`);
  await app.listen({
    port: PORT,
  });
}
