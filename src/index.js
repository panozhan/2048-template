
const ReactDOM = require('react-dom/client');
const React = require('react');
const { default: Game } = require('./game.jsx');

function initApplication() {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(React.createElement(Game));
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        initApplication();
    }); 
} else if (document.readyState === 'complete' || document.readyState === 'interactive') {
    initApplication();
}