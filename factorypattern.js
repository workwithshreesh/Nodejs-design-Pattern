class Auto{
    constructor(type){
        this.type = type
    }

    ride(){
        console.log(`Ye ek ${this.type} Auto hai`)
    }

}

function autoFactory(type){
    return new Auto(type)
}

const acAuto = autoFactory("Ac")
const normalAuto = autoFactory("Normal")
acAuto.ride()
normalAuto.ride()