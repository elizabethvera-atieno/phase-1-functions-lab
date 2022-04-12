// Code your solution in this file!
function distanceFromHqInBlocks(blocks){   
    if (blocks > 42){
    return blocks - 42
}else{
    return 42 - blocks
    }
}

function distanceFromHqInFeet(blocks){
    // return feet * 264
    if (blocks > 42){
        return 264 *(blocks - 42) 
    }else{
        return 264 *(42 - blocks)
        }
}

function distanceTravelledInFeet(block1, block2){
    if(block1 > block2){
        return 264 * (block1 - block2)
    }else{
        return 264 * (block2 - block1) 
    }
}

function calculatesFarePrice(start, destination){
    let distance = Math.abs(264 * (destination - start))
    if ( distance <= 400 ){
        return 0
    }else if(distance > 400 && distance <=2000){
        return (distance -400) * 0.02
    }else if (distance>2000 && distance<= 2500){
        return 25
    }else{
        return 'cannot travel that far'
    }

}
console.log(calculatesFarePrice(34, 32))