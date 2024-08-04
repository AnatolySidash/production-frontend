import { classNames } from './classNames';

describe('classNames', () => {
    test('only one param added', () => {
        expect(classNames('someClass')).toBe('someClass');
    });

    test('additional class added', () => {
        const expected = 'someClass newClass1 newClass2';
        expect(classNames('someClass', {}, ['newClass1', 'newClass2']))
            .toBe(expected);
    });

    test('mods added', () => {
        const expected = 'someClass newClass1 newClass2 hovered scrollable';
        expect(classNames(
            'someClass',
            { hovered: true, scrollable: true },
            ['newClass1', 'newClass2'],
        ))
            .toBe(expected);
    });

    test('false mod added', () => {
        const expected = 'someClass newClass1 newClass2 hovered';
        expect(classNames(
            'someClass',
            { hovered: true, scrollable: false },
            ['newClass1', 'newClass2'],
        ))
            .toBe(expected);
    });

    test('undefined mod added', () => {
        const expected = 'someClass newClass1 newClass2 hovered';
        expect(classNames(
            'someClass',
            { hovered: true, scrollable: undefined },
            ['newClass1', 'newClass2'],
        ))
            .toBe(expected);
    });
});
