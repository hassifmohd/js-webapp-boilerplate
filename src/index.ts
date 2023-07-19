import App from './app'; //example: import class

function docReady(fn: { (): void; (): void; }) {
    if (document.readyState === "complete" || document.readyState === "interactive") {
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

docReady(function () {
    const app = new App();
    app.documentReady();
});
