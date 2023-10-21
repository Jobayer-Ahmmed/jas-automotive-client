const getCar=()=>{
    const getStorage = localStorage.getItem("Car")
    if(getStorage)
        return JSON.parse(getStorage)
    return []
}

const saveCar=carId=>{
    const storeCar = getCar()
    const exists = storeCar.find(id=>id==carId )
    if(!exists){
        storeCar.push(carId)
        const stringifiedCar = JSON.stringify(storeCar)
        localStorage.setItem("Car", stringifiedCar)
    }

}

export  {saveCar, getCar}