let team = {
    _players: [{
        firstName: 'Pablo',
        lastName: 'Sanchez',
        age: 11
    }],
    _games: [{
        opponent: 'Broncos',
        teamPoints: 42,
        opponentPoints: 27
    }],
    get players() {
        return this._players;
    },
    get games() {
        return this._games;
    },

    addPlayer(firstName, lastName, age) {
        let player = {
            firstName,
            lastName,
            age
        };
        this._players.push(player);
    },
    addGame(opponent, teamPoints, opponentPoints) {
        let game = {
            opponent,
            teamPoints,
            opponentPoints
        };
        this._games.push(game);
    }
};

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);


team.addGame('Poker', 3, 98);
team.addGame
console.log(team);