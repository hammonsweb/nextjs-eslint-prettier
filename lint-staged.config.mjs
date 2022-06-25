import micromatch from 'micromatch'

const config = {
    '*.{js,jsx,ts,tsx}': (files) => {
        return [`eslint --max-warnings=0 ${files.join(' ')}`, `prettier --check ${files.join(' ')}`]
    },
}

export default config