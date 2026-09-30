// Dynamic mega menu header — content managed via Django Admin
// The old hardcoded nav has been replaced with a server component that
// fetches NavItems from /api/navigation/ at request time (revalidates every 60s).
export { Header } from "./mega-menu-header-export"
