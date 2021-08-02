import { informations } from "./revison-algorithm";
import { sm2 } from "./revison-algorithm";

const acceptableUserGrade = {
    lose: 1.5,
    win: 4
}

const test1: informations = {
     userGrade: acceptableUserGrade.win,
    streak: 6, // days
    intervalDay: 6, //days
    easinessFactor: 1.3
}

sm2(test1)