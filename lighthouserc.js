module.exports = {
    ci: {
        collect: {
            staticDistDir: './.next/server/pages',
        },
        upload: {
            target: 'temporary-public-storage',
        },
        assert: {
            preset: 'lighthouse:recommended',
            assertions: {
                'uses-rel-preload': 'off',
                'uses-rel-preconnect': 'off',
            },
        },
    },
};