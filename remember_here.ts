
Videos
Welcome!

Scrolls
Memento
magikcraft.io.memento

Access your memory, to store or recall something.
setItem
To remember something, use memento.setItem:
Example
const magik = magikcraft.io;

function remember_here() {
    const here = magik.hic();
    magik.memento.setItem(here);
}
memento.setItem can also take a key, so you can remember more than one thing:
const magik = magikcraft.io;

function remember_here(name){
    const here = magik.hic();
    magik.memento.setItem(name, here);
}
getItem
To recall something, use memento.getItem:
Example
const magik = magikcraft.io;

function recall(){
    const memory = magik.memento.getItem();
    magik.dixit(memory);