class Template {
    render(html, data) {
        html = Template.bindVariables(html, data);

        return `${html}`;
    }

    static htmlEscape(str) {
        return str.replace(/&/g, '&amp;')
            .replace(/>/g, '&gt;')
            .replace(/</g, '&lt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;')
            .replace(/`/g, '&#96;')
        ;//END
    }

    static bindVariables(html, replaceMap) {
        // Find variables in `{{ foo }}` format.
        var format = /{{\s*(\S*)\s*}}/gi;
        return html.replace(format, (str, match) => (replaceMap[match] || str));
    }
}

window.Template = Template;

export default Template;