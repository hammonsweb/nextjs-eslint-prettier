import micromatch from 'micromatch'

const config = {
    'src/**/*.{js,jsx,ts,tsx,css,scss}': (allFiles) => {
        const eslintFiles = micromatch(allFiles, ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'])
        return [`eslint --max-warnings=0 ${eslintFiles.join(' ')}`, `prettier --check ${allFiles.join(' ')}`]
    },
}

export default config