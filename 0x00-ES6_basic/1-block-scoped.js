export default function taskBlock(trueorfalse) {
    var task = false;
    var task2 = true;

    if (trueorfalse) {
        const task = true;
        const task2 = false;
    }

    return [task, task2];
}