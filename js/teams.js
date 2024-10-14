function checkFormat() {
    const format = document.getElementById('participation-format').value;
    const teamOptions = document.getElementById('team-options');
    if (format === 'team') {
        teamOptions.classList.remove('hidden');
    } else {
        teamOptions.classList.add('hidden');
        document.getElementById('team-name-container').classList.add('hidden');
        document.getElementById('no-team-message').classList.add('hidden');
    }
}

function checkTeam() {

    const hasTeam = document.getElementById('has-team').value;
    const teamNameContainer = document.getElementById('team-name-container');
    const noTeamMessage = document.getElementById('no-team-message');
    const PartFormat = document.getElementById('participation-format');


    if (hasTeam === 'yes') {
        teamNameContainer.classList.remove('hidden');
        noTeamMessage.classList.add('hidden');
    } else {
        teamNameContainer.classList.add('hidden');
        noTeamMessage.classList.remove('hidden');
    }
}

