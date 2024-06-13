function minPlanesRequired(fuelArray) {
    const n = fuelArray.length;
    if (n === 0) return -1;

    let maxReach = 0; 
    let planes = 0;   
    let currentEnd = 0; 

    for (let i = 0; i < n; i++) {
        if (i > maxReach) {
            return -1;
        }
        
        maxReach = Math.max(maxReach, i + fuelArray[i]);

        if (i === currentEnd) {
            planes++;
            currentEnd = maxReach;
            
           
            if (currentEnd >= n - 1) {
                return planes;
            }
        }
    }
    
    return -1; 
}

console.log(minPlanesRequired( [1,6,3,4,5,0,0,0,6]))