import { informations } from "./revison-algorithm";
import { sm2 } from "./revison-algorithm";

const acceptableUserGrade = {
    lose: 1.5,
    win: 4
}

const test1: informations = {
     userGrade: acceptableUserGrade.win,
    streak: 0, // days
    intervalDay: 0, //days
    easinessFactor: 0
}


sm2(test1)

