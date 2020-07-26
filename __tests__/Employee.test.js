const Employee = require('../lib/Employee.js');

test('Creates Employee Obj', () => {
    const employee = new Employee('Victor', '0019', 'civ187@gmail.com')
    
    expect(employee.name).toBe('Victor');
    expect(employee.id).toBe('0019');
    expect(employee.email).toBe('civ187@gmail.com');
    expect(employee).toEqual(expect.any(Object));
});

test('Get employee Name', () => {
    const employee = new Employee('Victor', '0019', 'civ187@gmail.com')

    expect(employee.getName()).toEqual(expect.stringContaining(employee.name.toString()));
});

test('Get employee ID', () => {
    const employee = new Employee('Victor', '0019', 'civ187@gmail.com')

    expect(employee.getId()).toEqual(expect.stringContaining(employee.id.toString()));
});

test('Get employee email', () => {
    const employee = new Employee('Victor', '0019', 'civ187@gmail.com')

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

test('Get employee role', () => {
    const employee = new Employee('Victor', '0019', 'civ187@gmail.com')

    expect(employee.getRole()).toBe('Employee');
});