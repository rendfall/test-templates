const { Template } = require('../lib/templates');

describe('General', () => {

    it('should defined', function () {
        expect(Template).toBeDefined();
    });

    describe('htmlEscape', () => {
        it('should espace some chars', function () {
            const input = '"&<>\'`';
            const output = '&quot;&amp;&lt;&gt;&#39;&#96;';
            expect(Template.htmlEscape(input)).toEqual(output);
        });
    });

    describe('bindVariables', () => {
        it('should compile text with data', function () {
            const input = 'My favourite cookie: {{ cookie }}';
            const output = 'My favourite cookie: applecake';
            const params = { cookie: 'applecake' };
            expect(Template.bindVariables(input, params)).toEqual(output);
        });
    });

    xdescribe('compile', () => {
        pending(' :: probably this function should not use htmlEscape');
        it('should compile and escape', function () {
            const input = 'My favourite cookie: "{{ cookie }}"';
            const output = 'My favourite cookie: &quot;applecake&quot;';
            const params = { cookie: 'applecake' };
            expect(Template.compile(input, params)).toEqual(output);
        });
    });

});
