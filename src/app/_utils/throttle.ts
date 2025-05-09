export default function throttle(func: Function, delay: number){
    let shouldWait: boolean = false;
    let waitingArgs: any[] | null;

    function timeoutFunc(){
        if (waitingArgs === null){
            shouldWait = false;
        } else {
            func(...waitingArgs);
            waitingArgs = null;
            setTimeout(timeoutFunc, delay);
        }
    }

    return (...args: any[]) => {
        if (shouldWait) {
            waitingArgs = args;
            return;
        }
        
        func(...args);      
        shouldWait = true;

        setTimeout(timeoutFunc, delay)
    }
}