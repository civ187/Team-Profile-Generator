const Intern = require("../lib/Intern");
const { exportAllDeclaration } = require("@babel/types");

test('Creates Intern Obj', () => {
    const intern = new Intern('Victor', '0019', 'civ187@gmial.com', 'Bootcamp');

    expect(intern).toEqual(expect.any(Object));

    expect(intern.name).toBe('Victor');
    expect(intern.id).toBe('0019');
    expect(intern.email).toBe('civ187@gmial.com');
    expect(intern.school).toBe('Bootcamp');
});

test('Get intern school via getSchool()', () => {
    const intern = new Intern('Victor', '0019', 'civ187@gmial.com', 'Bootcamp');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('Get intern role via getRole()', () => {
    const intern = new Intern('Victor', '0019', 'civ187@gmial.com', 'Bootcamp');

    expect(intern.getRole()).toBe('Intern');
});