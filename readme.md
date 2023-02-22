# Toodooey

A UI for the [Keel example project](https://github.com/teamkeel?q=ex&type=all&language=&sort=). For more information follow along with our [getting started tutorial](https://keel.notaku.site/getting-started/tutorial).

Try it out at - https://toodooey.netlify.app/

### Technologies

- React
- Vite
- GraphQL
- React Query
- Tailwind

### Running locally

```
npm run dev
```

### Adding fields

1. Update the schema url in `codegen.yml` to point at your GraphQL endpoint
1. Update the queries in the `src/graphql` directory
1. Run `npm run generate` (or `npm run generate-watch` to continuously watch for changes) to generate updated types for the data hooks
1. New todo fields returned should render automatically or by updating `src/components/Todo.tsx`
