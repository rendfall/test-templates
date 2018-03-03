// Find variables in `{{ foo }}` format.
const format = /{{\s*(\S*)\s*}}/gi;

const entities = new Map();
entities.set(/&/g, '&amp;');
entities.set(/</g, '&lt;');
entities.set(/>/g, '&gt;');
entities.set(/"/g, '&quot;');
entities.set(/'/g, '&#39;');
entities.set(/`/g, '&#96;');

class Template {

    static compile(html, data) {
        html = Template.bindVariables(html, data);
        // html = Template.htmlEscape(html, data);
        return `${html}`;
    }

    /**
     * I can't understand for what is that function...
     */
    static htmlEscape(str) {
        entities.forEach((value, key) => {
            str = str.replace(key, value);
        });
        return str;
    }

    static bindVariables(html, replaceMap) {
        return html.replace(format, (str, match) => (replaceMap[match] || str));
    }

}

module.exports = { Template };
