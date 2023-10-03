interface Carro {
    acelerar(velocidade: number):void;
    frear(): void;
}

class CarroCompacto implements Carro{
    acelerar(velocidade: number): void {
        console.log("o carro compacto acelerou para" + velocidade + "km/h");
    }

    frear(): void {
        console.log("o carro compacto freou");
    }
}

class carroEsportivo  implements Carro{
    acelerar(velocidade: number): void {
        console.log("o carro esportivo acelerou para" + velocidade + "km/h");
    }

    frear(): void {
        console.log("o carro esportivo freou");
    }
}
const meuCarroEsportivo = new carroEsportivo();
meuCarroEsportivo.acelerar(200);
meuCarroEsportivo.frear();

const meuCarroCompacto = new carroEsportivo();
meuCarroCompacto.acelerar(100);
meuCarroCompacto.frear();
