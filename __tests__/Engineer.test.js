const Engineer = require("../lib/Engineer");


test('Create Engineer Obj', () => {
    const engineer = new Engineer('Victor', '0019', 'civ187@gmail.com', 'civ187');

    expect(engineer).toEqual(expect.any(Object));

    expect(engineer.name).toBe('Victor');
    expect(engineer.id).toBe('0019');
    expect(engineer.email).toBe('civ187@gmail.com');
    expect(engineer.github).toBe('civ187');
});

test('Get engineer github via getGithub()', () => {
    const engineer = new Engineer('Victor', '0019', 'civ187@gmail.com', 'civ187');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

test('Get engineer role', () => {
    const engineer = new Engineer('Victor', '0019', 'civ187@gmail.com', 'civ187');

    expect(engineer.getRole()).toBe('Engineer');
});