import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        environment: 'happy-dom', // ← simule un navigateur
        globals: true,            // ← permet d'utiliser test(), expect() sans import
        include: ['test/**/*.test.ts'], // ← où vitest doit chercher tes tests
    },
});