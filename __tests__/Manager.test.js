const Manager = require("../lib/Manager");

test('Creates Manager Obj', () => {
    const manager = new Manager('Victor', '0019', 'civ187@gmail.com', '300');

    expect(manager).toEqual(expect.any(Object));


    expect(manager.name).toBe('Victor');
    expect(manager.id).toBe('0019');
    expect(manager.email).toBe('civ187@gmail.com');
    expect(manager.officeNumber).toBe('300');
});

test('Get manager role via getRole()', () => {
    const manager = new Manager('Victor', '0019', 'civ187@gmail.com', '300');

    expect(manager.getRole()).toBe('Manager');
});