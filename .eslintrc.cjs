// On exporte la config ESLint. Format CJS compatible Nuxt.
export default {
    // Le root indique que c'est la configuration ESLint principale du projet.
    root: true,
    
    // Environnements dans lesquels ton code tourne :
    env: {
        browser: true, // autorise les variables globales du navigateur (window, document, etc.)
        node: true,    // autorise les variables globales Node.js (process, __dirname…)
        es2021: true,  // permet les features modernes ES2021
    },
    
    // Le parser qui permet à ESLint de COMPRENDRE du TypeScript.
    parser: '@typescript-eslint/parser',
    
    // Options pour le parser TS.
    parserOptions: {
        ecmaVersion: 'latest', // autorise les syntaxes ES les plus modern
        sourceType: 'module',  // permet l'utilisation des "import / export"
    },
    
    // Liste des plugins activés.
    plugins: [
        '@typescript-eslint', // ajoute les règles spécifiques TypeScript
        'prettier',            // permet d'afficher les erreurs Prettier dans ESLint
    ],
    
    // Héritage de configurations existantes
    extends: [
        'eslint:recommended',               // règles de base ESLint
        'plugin:@typescript-eslint/recommended', // meilleures pratiques TypeScript
        'plugin:vue/vue3-recommended',      // règles adaptées à Vue 3
        'plugin:prettier/recommended',      // désactive les règles conflictuelles & active Prettier dans ESLint
    ],
    
    // Règles personnalisées du projet
    rules: {
        // --- TypeScript rules ---
        '@typescript-eslint/no-unused-vars': 'warn', // avertit quand une variable n'est pas utilisée
        '@typescript-eslint/no-explicit-any': 'error', // n'autorise pas "any" 
        
        // --- Vue rules ---
        'vue/multi-word-component-names': 'off', // autorise les components avec un seul mot (ex: "Navbar.vue")
        
        // --- Prettier rule ---
        // Force ESLint à lever une erreur si le formatage Prettier n'est pas respecté.
        'prettier/prettier': 'error',
    },
};