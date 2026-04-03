# Additive Identity

React + Vite single-page app demonstrating additive identity: adding zero to a quantity leaves it unchanged. UI state drives numeric examples and feedback; implementation lives in `AdditiveIdentity.jsx`.

**Live site:** [https://content-interactives.github.io/additive_identity](https://content-interactives.github.io/additive_identity)

Curriculum alignment and placement: [Standards.md](Standards.md).

---

## Stack

| Layer | Notes |
|--------|--------|
| Build | Vite 6, `@vitejs/plugin-react` |
| UI | React 19 |
| Styling | Tailwind 3 |
| Icons | lucide-react |
| Deploy | `gh-pages -d dist`; `predeploy` runs `vite build` |

---

## Layout

```
vite.config.js          # base: '/additive_identity/'
src/
  main.jsx → App.jsx → components/AdditiveIdentity.jsx
  components/ui/        # shared UI (card, alert, slider, …)
```

---

## `vite.config.js`

`base: '/additive_identity/'` must match the GitHub Pages repository path.

---

## Scripts

| Command | Purpose |
|---------|---------|
| `npm run dev` | Vite dev server |
| `npm run build` | Production build → `dist/` |
| `npm run preview` | Preview production build |
| `npm run lint` | ESLint |
| `npm run deploy` | Build and push `dist/` to `gh-pages` |

---

## Embedding

Fixed-height layout via shared `Container` / UI components; confirm dimensions in `AdditiveIdentity.jsx` if embedding in an iframe.
