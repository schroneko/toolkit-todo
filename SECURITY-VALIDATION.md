# Compatible tooling audit repair (2026-10-25)

Although GitHub currently reports no open alerts, the exact default-branch graph still contained vulnerable glob-parent, cross-spawn, debug, word-wrap and semver releases. Compatible patch/minor resolutions fix those findings. The private matching adapter's declared Picomatch4.0.7 requirement is now resolved before the legacy global Picomatch2 rule, preserving the actual patched engine.

Frozen Yarn install, the existing Vitest reducer regression, both glob/adapter tests, TypeScript check and production build passed. A headless browser verified actual task create, complete, edit and delete with no external requests or page errors. Application source is unchanged.

Raw Yarn audit retains one moderate micromatch alias warning. Installed identity remains the truthful private @schroneko/match-compat1.0.1 adapter using Picomatch4.0.7, without the original micromatch.braces() API. No warning is dismissed and no version is falsified; this is not described as audit-zero. Hosted final-head application CI and default-branch verification remain separate conditions. No merge or deployment was performed.
