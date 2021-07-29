export interface informations {
    userGrade: number
    streak: number, // days
    intervalDay: number, //days
    easinessFactor: number

}

export const sm2 = (inf: informations) => {
    if (inf.userGrade >= 3){
        if (inf.streak == 0) {
            inf.intervalDay = 1
        } else if (inf.streak == 1){
            inf.intervalDay = 6
        } else {
            inf.intervalDay *= inf.easinessFactor
        }

        inf.easinessFactor += (0.1 - (5 - inf.userGrade) * (0.08 + (5 - inf.userGrade) * 0.02))

        // test code 
        console.log(inf.easinessFactor)

        if(inf.easinessFactor < 1.3) inf.easinessFactor = 1.3

        inf.streak++
    } else{
        inf.streak = 0
        inf.intervalDay = 1
    }
    // test code
    console.log(` output: ${inf.streak} ${inf.intervalDay} ${inf.intervalDay}`)

    return(inf.streak, inf.intervalDay, inf.intervalDay )

}



