interface Subject {
    registerObserver(o: Observer): void;
    removeObserver(o: Observer): void;
    notifyObservers(o: Observer): void;
}

interface Observer {
    update(tmp: number, humidity: number, pressure: number): void;
}

interface DisplayElement {
    display(): void;
}

class WeatherData implements Subject {
    private observers: Observer[];
    private temperature: number;
    private humidity: number;
    private pressure: number;

    constructor() {
        this.observers = new Array();
    }

    public registerObserver(o: Observer): void {
        this.observers.push(o);
    }

    public removeObserver(o: Observer): void {
        let i: number = this.observers.indexOf(o);
        if (!!~i) {
            this.observers.splice(i, 1);
        }
    }

    public notifyObservers(): void {
        for (let observer of this.observers) {
            observer.update(this.temperature, this.humidity, this.pressure)
        }
    }

    public measurementsChanged(): void {
        this.notifyObservers();
    }

    public setMeasurements(temperature: number, humidity: number, pressure: number) {
        this.temperature = temperature;
        this.humidity = humidity;
        this.pressure = pressure;
        this.measurementsChanged();
    }

    // Some methods WeatherData
}

class CurrentContitionsDisplay implements Observer, DisplayElement {
    private temperature: number;
    private humidity: number;
    private weatherData: Subject;

    constructor(weatherData: Subject) {
        this.weatherData = weatherData;
        weatherData.registerObserver(this);
    }

    public update(temperature: number, humidity: number, pressure: number): void {
        this.temperature = temperature;
        this.humidity = humidity;
        this.display();
    }

    public display(): void {
        console.log(`Текущее состояние: ${this.temperature} градусов и ${this.humidity} влажности`);
    }
}

//// Testing

class WeatherStation {
    public main(): void {
        let weatherData: WeatherData = new WeatherData();

        let currentContitionsDisplay: CurrentContitionsDisplay = new CurrentContitionsDisplay(weatherData);

        weatherData.setMeasurements(80, 65, 30.4);
        weatherData.setMeasurements(82, 70, 29.2);
        weatherData.setMeasurements(78, 90, 29.2);
    }
}

const weatherStation = new WeatherStation();
weatherStation.main();