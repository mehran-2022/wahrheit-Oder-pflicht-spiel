


function mye(){
    let salam= document.querySelector(".heder");
let arr =
[ "Wer ist dein Lieblingslehrer / deine Lieblingslehrerin?","Was ist ein Wort, dass du erfunden hast?","Was ist dein Lieblingsessen von deiner Mama?","Was ist dein Lieblingsessen von deiner Mama?","Hättest du lieber ein Haustier oder eine Schwester / Bruder?","Hättest du lieber ein Haustier oder eine Schwester / Bruder?","Hast du schon einmal in der Dusche gesungen?","Wer würde in einem Kampf gewinnen - Hulk oder Iron Man?","Hast du schon einmal ins Bett gemacht?","Wan warst du das letzte mal so richtig gelangweilt?","Wie oft benutzt du Zahnseide?","Welche Berühmtheit würdest du gerne sein und wieso?","Magst du lieber Hunde oder Katzen?","Hast du Angst vor Geistern?","Was sind die lustigsten Wörter, die du kennst?","Hast du schon einmal ein Glas Milch in einen Pflanzentopf geschüttet?","Hast du schon einmal etwas kapputt gemacht und niemanden davon erzählt?","Hast du schon einmal bei einem Film geweint?","Entschuldigst du dich nach einem Streit?","Wenn du nur eine Minute Zeit hättest, aus deinem Haus zu fliehen, was würdest du mitnehmen?","Findest du, dass Regen gut riecht","Wenn du einen Dinosaurier als Haustier haben könntest, welchen würdest du dann auswählen?"];
    var randomIndex = Math.floor(Math.random() * arr.length);
    salam.innerHTML=arr[randomIndex]
    console.log(randomIndex)
}

function my2(){
    let salam= document.querySelector(".heder2");
    let arr2 =["Gib jemanden eine Huckepackfahrt.","Du darfst für eine Minute lang nicht blinzeln.","Jedes Mal, wenn jemand etwas trinkt, frage, ob du einen Schluck haben darfst.","Imitiiere Buzz Lightyear von Toy Story","Lauf eine Runde um dein Haus. ","Gehe raus und rufe der ersten Person, die du siehst “Ich bin ein Nasenbohrer” zu.","Esse einen Löffel voll scharfe Soße.","Umarme einen Baum oder eine Laterne für 20 Sekunden lang.","Singe “Alle meine Entchen” in deiner besten Opern-Stimme.","Beiße ein Stück von einer Butter ab.","Zeichne ein Gesicht auf deine Hand. Sprich mit deiner Hand, wenn du wieder an der Reihe bist.","Lass dich von der Person, die dir am nächsten ist, schminken. Lasse es für mindestens eine Stunde oben.","Mache die Pflicht-Aufgabe, die die nächste Person bekommt.","Schreibe jemanden eine Whatsapp Nachricht nur mit deiner Nase.","Verwende den Gehsteig für 5 Minuten als Laufsteg, und winke allen vorbeigehenden Menschen.","Putze deine Zähne vor allen anderen.","Mach solange Humpelmänner, bis du das nächste mal dran bist.","Mache 2 perfekte Liegestützen","Spiel ein Ständchen auf einem Instrument. Wenn du kein Instrument hast, dann singe ein Ständchen."]
    var randomIndex2 = Math.floor(Math.random() * arr2.length);
    salam.innerHTML=arr2[randomIndex2]
    console.log(randomIndex2)
}
 
