function generatePage(team) {
    let employees = '';

for (i = 0; i < team.length; i++) {
    if (team[i].role ==='Manager') {
        employees += `
                    <div class="card m-2 shadow" style="width: 19rem;">
                        <div class="card-header text-white bg-primary">
                            <h2 class="card-title">${team[i].name}</h2>
                            <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${team[i].role}</h3>
                        </div>
                        <div class="card-body">
                            <ul class="list-group">
                                <li class="list-group-item">ID: ${team[i].id}</li>
                                <li class="list-group-item">Email: <a href="mailto:${team[i].email}">${team[i].email}</a></li>
                                <li class="list-group-item">Office number: ${team[i].officeNumber}</li>
                            </ul>
                        </div>
                    </div>
                    `
    } else if (team[i].role === 'Engineer') {
        employees += `
                    <div class="card m-2 shadow" style="width: 19rem;">
                        <div class="card-header text-white bg-primary">
                            <h2 class="card-title">${team[i].name}</h2>
                            <h3 class="card-title"><i class="fas fa-calculator mr-2"></i>${team[i].role}</h3>
                        </div>
                        <div class="card-body">
                            <ul class="list-group">
                                <li class="list-group-item">ID: ${team[i].id}</li>
                                <li class="list-group-item">Email: <a href="mailto:${team[i].email}">${team[i].email}</a></li>
                                <li class="list-group-item">GitHub: <a href="https://github.com/${team[i].github}" target="_blank" rel="noopener noreferrer">${team[i].github}</a></li>
                            </ul>
                        </div>
                    </div>
                    `
    } else {
        employees += `
                    <div class="card m-2 shadow" style="width: 19rem;">
                        <div class="card-header text-white bg-primary">
                            <h2 class="card-title">${team[i].name}</h2>
                            <h3 class="card-title"><i class="fas fa-graduation-cap mr-2"></i>${team[i].role}</h3>
                        </div>
                        <div class="card-body">
                            <ul class="list-group">
                                <li class="list-group-item">ID: ${team[i].id}</li>
                                <li class="list-group-item">Email: <a href="mailto:${team[i].email}">${team[i].email}</a></li>
                                <li class="list-group-item">School: ${team[i].school}</li>
                            </ul>
                        </div>
                    </div>
                    `
    }
}
    let page = `
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <title>My Team</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
        <script src="https://kit.fontawesome.com/c929a84fca.js" crossorigin="anonymous"></script>
    </head>
    <body>
        <div class="container-fluid bg-danger text-white text-center py-5">
            <h1>My Team</h1>
        </div>

        <div class="container-fluid">
            <div class="row justify-content-center">
                <div class="row justify-content-center mt-2">
                    ${employees}
                </div>
            </div>
        </div>
    </body>
</html>
`
    return page;
};

module.exports = generatePage;