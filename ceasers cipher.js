function ceasersCipher(str) {
    var strUpper = str.toUpperCase();
    var ceaserStr = "";
    for (let a = 0; a < str.length; a++) {
        switch(strUpper.charAt(a)) {
            case "A":
            ceaserStr = ceaserStr+"N";
            break;
            case "B":
            ceaserStr = ceaserStr+"O";
            break;
            case "C":
            ceaserStr = ceaserStr+"P";
            break;
            case "D":
            ceaserStr = ceaserStr+"Q";
            break;
            case "E":
            ceaserStr = ceaserStr+"R";
            break;
            case "F":
            ceaserStr = ceaserStr+"S";
            break;
            case "G":
            ceaserStr = ceaserStr+"T";
            break;
            case "H":
            ceaserStr = ceaserStr+"U";
            break;
            case "I":
            ceaserStr = ceaserStr+"V";
            break;
            case "J":
            ceaserStr = ceaserStr+"W";
            break;
            case "K":
            ceaserStr = ceaserStr+"X";
            break;
            case "L":
            ceaserStr = ceaserStr+"Y";
            break;
            case "M":
            ceaserStr = ceaserStr+"Z";
            break;
            case "N":
            ceaserStr = ceaserStr+"A";
            break;
            case "O":
            ceaserStr = ceaserStr+"B";
            break;
            case "P":
            ceaserStr = ceaserStr+"C";
            break;
            case "Q":
            ceaserStr = ceaserStr+"D";
            break;
            case "R":
            ceaserStr = ceaserStr+"E";
            break;
            case "S":
            ceaserStr = ceaserStr+"F";
            break;
            case "T":
            ceaserStr = ceaserStr+"G";
            break;
            case "U":
            ceaserStr = ceaserStr+"H";
            break;
            case "V":
            ceaserStr = ceaserStr+"I";
            break;
            case "W":
            ceaserStr = ceaserStr+"J";
            break;
            case "X":
            ceaserStr = ceaserStr+"K";
            break;
            case "Y":
            ceaserStr = ceaserStr+"L";
            break;
            case "Z":
            ceaserStr = ceaserStr+"M";
            break;
            default:
            ceaserStr = ceaserStr + str.charAt(a);
        }
    }   
    return ceaserStr;
}

console.log(ceasersCipher("serr PBQR PNZC"));