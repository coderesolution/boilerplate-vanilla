# Agent instructions

This project uses **Cursor Project Rules** for conventions and patterns. Rules are in [.cursor/rules](.cursor/rules), version-controlled and scoped by topic or file.

- **Layout / grid**: see `.cursor/rules/grid-system.mdc` — use the `u-grid` utility for multi-column and responsive layouts.
- **Components (sections)**: see `.cursor/rules/components.mdc` — header, hero, about, projects, careers, contact, footer; one folder per component with CSS (required) and optional JS.

Add new rules in `.cursor/rules` as the project grows (e.g. components, JS patterns, tooling). Keep each rule focused and under ~500 lines; reference code instead of duplicating it.
