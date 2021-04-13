module.exports = {
    root: true,                 // Make sure eslint picks up the config at the root of the directory
    parserOptions: {
        ecmaVersion: 2020,      // Use the latest ecmascript standard
        sourceType: 'module',   // Allows using import/export statements
        ecmaFeatures: {
            jsx: true           // Enable JSX since we're using React
        }
    },
    settings: {
        react: {
            version: 'detect'   // Automatically detect the react version
        }
    },
    env: {
        browser: true,          // Enables browser globals like window and document
        amd: true,              // Enables require() and define() as global variables as per the amd spec.
        node: true,             // Enables Node.js global variables and Node.js scoping.
        jest: true            
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:jsx-a11y/recommended',
        "plugin:testing-library/react",
        "plugin:jest-dom/recommended"
    ],
    rules: {
        'react/react-in-jsx-scope': 'off',
        'jsx-a11y/anchor-is-valid': [
            'error',
            {
                components: ['Link'],
                specialLink: ['hrefLeft', 'hrefRight'],
                aspects: ['invalidHref', 'preferButton']
            }
        ],
        "no-console": 1,
        "testing-library/no-render-in-setup": "error",
    "testing-library/prefer-explicit-assert": "error",
    "testing-library/prefer-presence-queries": "error",
    "testing-library/prefer-screen-queries": "error",
    "testing-library/prefer-wait-for": "error"
    }
};