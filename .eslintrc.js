module.exports = {
  "parser": "babel-eslint",
  "plugins": [
    "react"
  ],
  "parserOptions": {
    "ecmaVersion": 7
  },
  "env": {
    "es6": true,
    "browser": true,
    "jasmine": true,
    "node": true
  },
  "globals": {
    "_": true,
    "$": true,
    "USER_INFO": true,
    "log": true,
    "Primus": true
  },
  "rules": {
    "array-bracket-spacing": 0,
    "camelcase": 2,
    "computed-property-spacing": [
      2,
      "never"
    ],
    "curly": [
      2,
      "all"
    ],
    "dot-notation": 0,
    "eqeqeq": 2,
    "max-len": [
      2,
      150,
      4
    ],
    "new-cap": [
      2, {
        "capIsNew": false
      }
    ],
    "no-eq-null": 2,
    "no-mixed-spaces-and-tabs": 2,
    "no-multiple-empty-lines": [
      2, {
        "max": 2
      }
    ],
    "no-use-before-define": [ 2, "nofunc" ],
    "no-undef": 2,
    "no-underscore-dangle": 0,
    "no-unused-vars": 1,
    "no-var": 1,
    "quotes": [
      2,
      "single"
    ],
    "semi": [ 0, "always" ],
    "keyword-spacing": [
      "error", {
        "after": true
      }
    ],
    "space-before-blocks": [ 2, "always" ],
    "object-curly-spacing": [ 2, "always" ],
    "space-infix-ops": [ 2 ],
    "space-unary-ops": [
      2, {
        "words": true,
        "nonwords": false
    }],
    "no-warning-comments": [
      1, {
        "terms": [
          "fixme"
        ],
        "location": "anywhere"
      }
    ],
    "strict": 0,
    "vars-on-top": 0,
    "indent": [
      2,
      2, {
        "SwitchCase": 1
      }
    ],
    "react/display-name": 0,
    "react/jsx-boolean-value": 2,
    "react/jsx-no-undef": 2,
    "react/jsx-sort-props": 0,
    "react/jsx-uses-react": 2,
    "react/jsx-uses-vars": 2,
    "react/no-did-mount-set-state": 2,
    "react/no-did-update-set-state": 2,
    // "react/no-multi-comp": 0,
    "react/no-unknown-property": 2,
    "react/prop-types": 2,
    "react/react-in-jsx-scope": 2,
    "react/self-closing-comp": 2,
    // "react/jsx-wrap-multilines": 2
  }
};

