"use strict";
class CarroCompacto {
    acelerar(velocidade) {
        console.log("o carro compacto acelerou para" + velocidade + "km/h");
    }
    frear() {
        console.log("o carro compacto freou");
    }
}
class carroEsportivo {
    acelerar(velocidade) {
        console.log("o carro esportivo acelerou para" + velocidade + "km/h");
    }
    frear() {
        console.log("o carro esportivo freou");
    }
}
const meuCarroEsportivo = new carroEsportivo();
meuCarroEsportivo.acelerar(200);
meuCarroEsportivo.frear();
const meuCarroCompacto = new carroEsportivo();
meuCarroCompacto.acelerar(100);
meuCarroCompacto.frear();
