import Car from './Car.js';

class CarRacingGame {
  constructor(carNames) {
    this.cars = carNames.map((e) => new Car(e));
  }

  startGame(totalRounds) {
    for (let i = 0; i < totalRounds; i++) {
      this.playRound();
    }

    this.determineWinners();
  }

  playRound() {
    this.cars.forEach((car) => {
      car.attemptMove();
    });
  }

  determineWinners() {
    const winners = this.cars.reduce((winnerCars, currentCar) => {
      if (
        winnerCars.length === 0 ||
        winnerCars[0].distance < currentCar.distance
      ) {
        return [currentCar];
      } else if (winnerCars[0].distance === currentCar.distance) {
        return [...winnerCars, currentCar];
      }
    }, []);

    return winners.map((car) => car.name);
  }
}

export default CarRacingGame;
